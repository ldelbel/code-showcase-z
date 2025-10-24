import { SignupSchemaType } from '@/form/schemas';
import Button from '@/shared/Button';
import { lang } from '@/utils/lang';
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

const translations = {
  'pt-br': {
    title: 'Compartilhe suas redes sociais',
    instagramLabel: 'Instagram',
    tiktokLabel: 'TikTok',
    prevButton: 'ANTERIOR',
    finishButton: 'FINALIZAR',
    oauthError: 'Erro no cadastro OAuth:',
    regularError: 'Erro no cadastro:',
  },
  'en-us': {
    title: 'Share with us your social media',
    instagramLabel: 'Instagram',
    tiktokLabel: 'TikTok',
    prevButton: 'PREV',
    finishButton: 'FINISH',
    oauthError: 'OAuth signup error:',
    regularError: 'Regular signup error:',
  },
};

const t = translations[lang];

interface Step4Props {
  register: UseFormRegister<SignupSchemaType>;
  watch: UseFormWatch<SignupSchemaType>;
  getValues: UseFormGetValues<SignupSchemaType>;
  errors: FieldErrors<SignupSchemaType>;
  isOAuth: boolean;
  onPrev: () => void;
  isSubmitting: boolean;
  onSubmit: (data: SignupSchemaType) => void;
}

const Step4 = ({
  register,
  getValues,
  onPrev,
  errors,
  isSubmitting,
  onSubmit,
}: Step4Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleFinish = () => {
    const formData = getValues();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col gap-6 items-center -mt-14">
      <h2 className="text-oldgoldbrown text-xl text-center">{t.title}</h2>

      <div className="flex flex-col gap-4 w-[70vw] mb-12">
        <div>
          <label className="block text-left mb-1 bg-golden-gradient-2 bg-clip-text text-transparent">
            {t.instagramLabel}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              @
            </span>
            <input
              type="text"
              className="input-field pl-8 w-full bg-[#1E1E1E] text-whitesmoke"
              {...register('instagram')}
              onKeyDown={handleKeyDown}
            />
            {errors.instagram && (
              <p className="text-red-500 text-sm mt-1">
                {errors.instagram.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-left mb-1 bg-golden-gradient-2 bg-clip-text text-transparent">
            {t.tiktokLabel}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              @
            </span>
            <input
              type="text"
              className="input-field pl-8 w-full bg-[#1E1E1E] text-whitesmoke"
              {...register('tiktok')}
              onKeyDown={handleKeyDown}
            />
            {errors.tiktok && (
              <p className="text-red-500 text-sm mt-1">
                {errors.tiktok.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center gap-4">
        <Button
          variant="silver-medium"
          text={t.prevButton}
          base="silver"
          onClick={onPrev}
          disabled={isSubmitting}
        />
        <Button
          type="button"
          variant="medium"
          text={t.finishButton}
          base="golden"
          onClick={handleFinish}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default Step4;
