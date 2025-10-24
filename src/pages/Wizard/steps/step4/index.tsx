import { useUploadUserPhoto } from '@/api/hooks';
import Button from '@/shared/Button';
import Check from '@/shared/Icons/Check';
import ProfileIcon from '@/shared/Icons/ProfileIcon';
import RedCross from '@/shared/Icons/RedCross';
import Modal from '@/shared/Modal';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useEffect, useRef, useState } from 'react';
import GuidelineItem from './guidelines.enum';

const translations = {
  'pt-br': {
    instruction:
      'Use sua foto de perfil ou faça upload de uma nova foto para personalizar seu personagem',
    instructionUploadOnly:
      'Faça upload de uma foto para personalizar seu personagem',
    profilePictureLabel: 'Foto de Perfil',
    uploadPhotoLabel: 'Fazer Upload de Foto',
    fileSizeLimit: '*até 5MB',
    attentionLabel: '*Atenção:',
    guidelinesLink: 'diretrizes',
    attentionMessageBefore:
      'Para garantir que seu personagem reflita verdadeiramente sua aparência, é importante usar uma foto que siga nossas ',
    attentionMessageAfter:
      '. Isso ajuda a IA a criar uma representação impressionante e realista.',
    changeButton: 'ALTERAR',
    uploadButton: 'UPLOAD',
    prevButton: 'ANTERIOR',
    nextButton: 'PRÓXIMO',
    selectionAlert: 'Por favor, selecione uma foto para prosseguir.',
    fileSizeError: 'O tamanho do arquivo deve be inferior a 5MB',
    fetchProfileError: 'Falha ao carregar a foto de perfil',
    fetchImageError: 'Falha ao carregar a imagem de perfil',
    uploadError: 'Falha ao fazer upload da foto. Tente novamente.',

    photoLabel: 'Foto',
    guidelinesTitle: 'Diretrizes',
    additionalNotesTitle: 'Notas Adicionais:',
    additionalNote1:
      'Se você não tem certeza sobre sua foto, tente tirar uma nova com seu telefone ou câmera seguindo estas dicas.',
    additionalNote2:
      'Fotos que não seguem essas diretrizes podem resultar em uma geração de personagem menos precisa.',
    returnButton: 'VOLTAR',
  },
  en: {
    instruction:
      'Use your profile picture or upload a new photo to personalize your character',
    instructionUploadOnly: 'Upload a photo to personalize your character',
    profilePictureLabel: 'Profile Picture',
    uploadPhotoLabel: 'Upload Photo',
    fileSizeLimit: '*up to 5MB',
    attentionLabel: '*Attention:',
    guidelinesLink: 'guidelines',
    attentionMessageBefore:
      'To ensure your character truly reflects your likeness, it’s important to use a photo that meets our ',
    attentionMessageAfter:
      '. This helps the AI accurately craft a stunning and lifelike representation.',
    changeButton: 'CHANGE',
    uploadButton: 'UPLOAD',
    prevButton: 'PREV',
    nextButton: 'NEXT',
    selectionAlert: 'Please select a photo to proceed.',
    fileSizeError: 'File size must be less than 5MB',
    fetchProfileError: 'Failed to load profile photo',
    fetchImageError: 'Failed to load profile image',
    uploadError: 'Failed to upload photo. Please try again.',

    photoLabel: 'Photo',
    guidelinesTitle: 'Guidelines',
    additionalNotesTitle: 'Additional notes:',
    additionalNote1:
      "If you're unsure about your photo, try taking a new one with your phone or camera following these tips.",
    additionalNote2:
      'Photos that don’t meet these guidelines may result in less accurate character generation.',
    returnButton: 'RETURN',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en'];

const Step4 = ({
  nextStep,
  prevStep,
  userPhotoUrl,
  setUserPhoto,
}: {
  nextStep: () => void;
  prevStep: () => void;
  userPhotoUrl: string | null;
  setUserPhoto: (photoUrl: string, photoId: string | null) => void;
}) => {
  const { userProfile } = useUserStore();
  const profileImage = userProfile?.profileImage || '';
  const hasProfileImage = !!profileImage;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    mutate: uploadPhoto,
    isPending,
    error: uploadError,
  } = useUploadUserPhoto();
  const [fileError, setFileError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState<
    'left' | 'right' | 'profile' | null
  >(null);
  const [isGuidelinesModalOpen, setIsGuidelinesModalOpen] = useState(false);

  useEffect(() => {
    if (userPhotoUrl) {
      if (hasProfileImage && userPhotoUrl === profileImage) {
        setSelectedCheckbox('left');
        setUploadPreview(null);
      } else {
        setSelectedCheckbox('right');
        setUploadPreview(userPhotoUrl);
      }
    } else {
      setSelectedCheckbox(null);
      setUploadPreview(null);
      setSelectedFile(null);
    }
  }, [userPhotoUrl, profileImage, hasProfileImage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const maxSize = 5 * 1024 * 1024; // 5mb
    if (file) {
      if (file.size > maxSize) {
        setFileError(t.fileSizeError);
        setUploadPreview(null);
        setSelectedFile(null);
        event.target.value = '';
        return;
      }
      setFileError('');
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setUploadPreview(previewUrl);
      if (!hasProfileImage) {
        setSelectedCheckbox('right');
      }
    }
  };

  const handleCheckboxSelect = (type: 'left' | 'right' | 'profile') => {
    setSelectedCheckbox(selectedCheckbox === type ? null : type);

    if (selectedCheckbox === type) {
      setSelectedFile(null);
      setUploadPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } else {
      switch (type) {
        case 'left':
          if (profileImage) {
            fetch(profileImage)
              .then((res) => res.blob())
              .then((blob) => {
                const file = new File([blob], 'profile.jpg', {
                  type: 'image/jpeg',
                });
                setSelectedFile(file);
                setUploadPreview(null);
              })
              .catch((err) => {
                console.error('Error fetching profile photo:', err);
                setFileError(t.fetchProfileError);
              });
          }
          break;
        case 'right':
          if (selectedFile) {
            setUploadPreview(URL.createObjectURL(selectedFile));
          }
          break;
        case 'profile':
          fetch(profileImage)
            .then((res) => res.blob())
            .then((blob) => {
              const file = new File([blob], 'default.jpg', {
                type: 'image/jpeg',
              });
              setSelectedFile(file);
              setUploadPreview(null);
            })
            .catch((err) => {
              console.error('Error fetching profile image:', err);
              setFileError(t.fetchImageError);
            });
          break;
      }
    }
  };

  const handleNext = () => {
    if (!hasProfileImage && !selectedFile && !userPhotoUrl) {
      alert(t.selectionAlert);
      return;
    }

    if (hasProfileImage && !selectedCheckbox) {
      alert(t.selectionAlert);
      return;
    }

    if (
      hasProfileImage &&
      (selectedCheckbox === 'right' || !hasProfileImage) &&
      !selectedFile &&
      !userPhotoUrl
    ) {
      alert(t.selectionAlert);
      return;
    }

    if (
      hasProfileImage &&
      (selectedCheckbox === 'left' || selectedCheckbox === 'profile')
    ) {
      const photoUrl = profileImage;
      setUserPhoto(photoUrl, null);
      nextStep();
    } else if (selectedCheckbox === 'right' || !hasProfileImage) {
      if (userPhotoUrl && userPhotoUrl === uploadPreview) {
        nextStep();
      } else if (selectedFile) {
        uploadPhoto(selectedFile, {
          onSuccess: (data) => {
            setUserPhoto(data.uploadImageUrl, data.uploadImageId);
            if (uploadPreview) {
              URL.revokeObjectURL(uploadPreview);
            }
            nextStep();
          },
          onError: (err) => {
            console.error('Error uploading photo:', err);
            setFileError(t.uploadError);
          },
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-[90vw] mt-10 text-center flex items-center justify-center">
        <h2 className="text-base font-semibold text-oldgoldlight text-shadow">
          {hasProfileImage ? t.instruction : t.instructionUploadOnly}
          <span className="text-customOrange">*</span>
        </h2>
      </div>
      <div
        className={`w-[85vw] text-center h-[27dvh] ${
          hasProfileImage ? 'flex justify-between' : 'flex justify-center'
        }`}
      >
        {hasProfileImage && (
          <div className="w-[35vw] h-[35vw] flex flex-col items-center">
            <h3
              className="text-base bg-golden-gradient bg-clip-text text-transparent font-bold"
              style={{ fontWeight: '500' }}
            >
              {t.profilePictureLabel}
            </h3>
            <div
              className="w-[28vw] h-[28vw] flex items-center justify-center relative rounded-lg"
              style={{
                backgroundImage: profileImage ? `url(${profileImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '3px 4px 4px rgba(0, 0, 0, 0.5)',
                backgroundColor: profileImage ? 'transparent' : '#D9D9D91A',
              }}
            >
              {!profileImage && <ProfileIcon size={155} />}
              <div className="w-[37px] h-[37px] input-field rounded-lg absolute -bottom-20 left-1/2 transform -translate-x-1/2"></div>
              <div
                className="w-[37px] h-[37px] input-field rounded-lg absolute -bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => handleCheckboxSelect('left')}
              >
                {selectedCheckbox === 'left' && (
                  <div className="text-white text-2xl font-bold flex items-center justify-center h-[37px] w-[37px]">
                    <Check height={37} width={37} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div
          className={`flex flex-col items-center ${
            hasProfileImage ? 'w-[35vw] h-[35vw]' : 'w-[70vw] h-[70vw]'
          }`}
        >
          <h3
            className="text-base bg-golden-gradient bg-clip-text text-transparent font-bold"
            style={{
              fontWeight: '500',
              width: hasProfileImage ? '120%' : '100%',
            }}
          >
            {t.uploadPhotoLabel}
          </h3>
          <div
            className={`flex items-center justify-center relative rounded-lg bg-oldgoldbrown ${
              hasProfileImage ? 'w-[28vw] h-[28vw]' : 'w-[36vw] h-[36vw]'
            }`}
            style={
              uploadPreview
                ? {
                    backgroundImage: `url(${uploadPreview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '3px 4px 4px rgba(0, 0, 0, 0.5)',
                  }
                : {}
            }
          >
            {!uploadPreview && (
              <ProfileIcon size={hasProfileImage ? 155 : 310} />
            )}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 ${
                hasProfileImage ? '-bottom-9' : '-bottom-10 md:-bottom-12'
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <TooltipProvider delayDuration={0}>
                <Tooltip open={!!fileError || !!uploadError}>
                  <TooltipTrigger asChild>
                    <div>
                      <Button
                        variant="small"
                        text={uploadPreview ? t.changeButton : t.uploadButton}
                        base="golden"
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isPending}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="bg-red-500 text-white border-none"
                  >
                    <span>{fileError || uploadError?.message || ''}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {!uploadPreview && (
                <span className="text-xs text-oldgoldbrown font-semibold">
                  {t.fileSizeLimit}
                </span>
              )}
            </div>
            {hasProfileImage && uploadPreview && (
              <div
                className={`input-field rounded-lg absolute left-1/2 transform -translate-x-1/2 cursor-pointer -bottom-20 ${
                  hasProfileImage ? 'w-[37px] h-[37px]' : 'w-[50px] h-[50px]'
                }`}
                onClick={() => handleCheckboxSelect('right')}
              >
                {selectedCheckbox === 'right' && (
                  <div
                    className={`text-white text-2xl font-bold flex items-center justify-center ${
                      hasProfileImage
                        ? 'h-[37px] w-[37px]'
                        : 'h-[50px] w-[50px]'
                    }`}
                  >
                    <Check
                      height={hasProfileImage ? 37 : 50}
                      width={hasProfileImage ? 37 : 50}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-1">
        <p className="w-[90vw] font-bold text-white text-xs border-2 rounded-2xl px-2 py-1.5 leading-5">
          <span className="text-customOrange font-bold text-shadow">
            {t.attentionLabel}{' '}
          </span>
          {t.attentionMessageBefore}
          <a
            className="text-oldgoldlight underline hover:text-oldgoldbrown cursor-pointer text-shadow text-base font-bold"
            onClick={() => setIsGuidelinesModalOpen(true)}
          >
            {t.guidelinesLink}
          </a>
          {t.attentionMessageAfter}
        </p>
      </div>
      <div className="flex gap-5 mt-4">
        <Button
          variant="silver-medium"
          base="silver"
          text={t.prevButton}
          type="submit"
          onClick={prevStep}
        />
        <Button
          variant="medium"
          base="golden"
          text={t.nextButton}
          type="submit"
          onClick={handleNext}
          disabled={
            hasProfileImage
              ? !selectedCheckbox || isPending
              : (!selectedFile && !userPhotoUrl) || isPending
          }
        />
      </div>

      <Modal
        isOpen={isGuidelinesModalOpen}
        onClose={() => setIsGuidelinesModalOpen(false)}
      >
        <div className="flex flex-col gap-2 max-w-2xl -mx-5">
          <DialogTitle className="text-2xl font-bold text-center flex flex-col items-center">
            <p className="text-whitesmoke">{t.photoLabel}</p>
            <span className="bg-golden-gradient-2 bg-clip-text text-transparent">
              {t.guidelinesTitle}
            </span>
          </DialogTitle>
          <div
            className="text-whitesmoke overflow-y-auto max-h-[40vh]"
            style={{
              backgroundColor: '#D9D9D91A',
              scrollbarWidth: 'thin',
              scrollbarColor: '#E6BE69 #171717',
            }}
          >
            {Object.values(GuidelineItem).map((item, index, array) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center justify-center m-4"
              >
                <h3 className="text-oldgold font-bold">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-whitesmoke text-sm">{item.description}</p>
                <div
                  className={`flex items-center justify-center gap-8 mt-2 ${
                    index === array.length - 1 ? 'mb-2' : 'mb-10'
                  }`}
                >
                  <div className="w-[30vw] h-[50vw] flex flex-col gap-2 items-center justify-center">
                    <div
                      className="w-[30vw] h-[40vw] bg-white rounded-lg"
                      style={{
                        backgroundImage: `url(${item?.wrongImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="w-[30vw] h-[10vw] rounded-lg flex items-center justify-center">
                      <RedCross size={40} />
                    </div>
                  </div>
                  <div className="w-[30vw] h-[50vw] flex flex-col gap-2 items-center justify-center">
                    <div
                      className="w-[30vw] h-[40vw] bg-white rounded-lg"
                      style={{
                        backgroundImage: `url(${item?.rightImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="w-[30vw] h-[10vw] rounded-lg flex items-center justify-center">
                      <Check height={40} width={40} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ml-2">
            <h3 className="text-oldgoldlight font-bold">
              {t.additionalNotesTitle}
            </h3>
            <div className="mt-2">
              <ul className="text-whitesmoke text-sm space-y-4 ml-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t.additionalNote1}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t.additionalNote2}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="silver-medium"
              text={t.returnButton}
              base="silver"
              onClick={() => setIsGuidelinesModalOpen(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Step4;
