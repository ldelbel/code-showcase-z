import { useUploadProfilePicture } from '@/api/hooks';
import { SignupSchemaType } from '@/form/schemas';
import Button from '@/shared/Button';
import ProfileIcon from '@/shared/Icons/ProfileIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import { lang } from '@/utils/lang';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

const translations = {
  'pt-br': {
    title: 'Fazer upload da foto de perfil',
    fileSizeLimit: '*até 5 mb',
    uploadButton: 'UPLOAD',
    uploadingButton: 'UPLOADING...',
    fileSizeError: 'O arquivo deve ter menos de 5MB',
    uploadError: 'Falha ao fazer upload da imagem',
    prevButton: 'ANTERIOR',
    nextButton: 'PRÓXIMO',
    skipButton: 'PULAR',
  },
  'en-us': {
    title: 'Upload profile picture',
    fileSizeLimit: '*up to 5 mb',
    uploadButton: 'UPLOAD',
    uploadingButton: 'UPLOADING...',
    fileSizeError: 'File size must be less than 5MB',
    uploadError: 'Failed to upload image',
    prevButton: 'PREV',
    nextButton: 'NEXT',
    skipButton: 'SKIP',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

interface Step2Props {
  register: UseFormRegister<SignupSchemaType>;
  setValue: UseFormSetValue<SignupSchemaType>;
  watch: UseFormWatch<SignupSchemaType>;
  errors: FieldErrors<SignupSchemaType>;
  onNext: () => void;
  onPrev: () => void;
}

const Step2: React.FC<Step2Props> = ({ setValue, watch, onNext, onPrev }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const uploadMutation = useUploadProfilePicture();
  const profilePictureUrl = watch('profilePicture');

  useEffect(() => {
    if (profilePictureUrl) {
      setImagePreview(profilePictureUrl);
    }
  }, [profilePictureUrl]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    const maxSize = 5 * 1024 * 1024; // 5mb

    if (file) {
      if (file.size > maxSize) {
        setFileError(t.fileSizeError);
        setImagePreview(null);
        setValue('profilePicture', undefined);
        return;
      }

      setFileError('');
      setUploading(true);
      setImagePreview(URL.createObjectURL(file));

      console.log('Before Mutate');
      try {
        const { fileUrl } = await uploadMutation.mutateAsync(file);
        console.log('After Mutate', fileUrl);
        setValue('profilePicture', fileUrl);
        setImagePreview(fileUrl);
      } catch (error) {
        console.error('Upload failed:', error);
        setFileError(t.uploadError);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div>
      <h3 className="text-lg font-normal mb-2 bg-golden-gradient bg-clip-text text-transparent text-center">
        {t.title}
      </h3>
      <div className="relative w-[164px] h-[164.5px] mx-auto rounded-[4px]">
        <div
          className="text-white w-[168px] h-[167px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-transparent rounded-[4px] mt-4"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #a47a1e 3%, #d3a84c 19%, #ffec94 38%, #e6be69 58%, #ffd87c 80%, #b58f3e 91%, #956d13 100%)',
            backgroundClip: 'border-box',
            padding: '1px',
          }}
        />
        <div
          className="absolute h-full w-full rounded-[4px] top-[17px]"
          style={{
            background:
              'radial-gradient(174.71% 87.3% at 21.88% 8.6%, #353535 0.12%, #202020 100%)',
          }}
        >
          <div className="flex justify-end">
            <span className="text-xs text-oldgoldbrown font-semibold mr-8">
              {t.fileSizeLimit}
            </span>
          </div>
          <div className="flex items-center justify-center h-[100px] mt-4">
            <AnimatePresence mode="wait">
              {imagePreview ? (
                <motion.img
                  key="preview"
                  src={imagePreview}
                  alt="Profile preview"
                  className="w-[125px] h-[125px] object-cover rounded-[4px] shadow-[3px_4px_4px_0px_#00000080]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              ) : (
                <motion.div
                  key="placeholder"
                  className="w-[125px] h-[125px] flex items-end justify-center rounded-[4px] bg-oldgoldbrown shadow-[3px_4px_4px_0px_#00000080]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ProfileIcon className="-mb-[1px]" size={125} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <TooltipProvider delayDuration={0}>
              <Tooltip open={!!fileError}>
                <TooltipTrigger asChild>
                  <div>
                    <Button
                      variant="rounded"
                      text={uploading ? t.uploadingButton : t.uploadButton}
                      base="golden"
                      type="button"
                      onClick={handleUploadClick}
                      disabled={uploading} // 5mb
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="bg-red-500 text-white border-none"
                >
                  <span>{fileError}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-28">
        <Button
          variant="silver-medium"
          text={t.prevButton}
          base="silver"
          onClick={onPrev}
        />
        <Button
          variant="medium"
          text={t.nextButton}
          base="golden"
          onClick={onNext}
          disabled={!profilePictureUrl || uploading}
        />
      </div>
      <div className="flex justify-center mt-4">
        <Button
          variant="silver-medium"
          text={t.skipButton}
          base="silver"
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default Step2;
