import { SignupSchemaType } from '@/form/schemas';
import GradientLine from '@/shared/GoldenLine';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import { lang } from '@/utils/lang';
import React from 'react';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import GoldenButton from '../../../shared/Button';
import InputField from '../../../shared/InputField';

const translations = {
  'pt-br': {
    emailLabel: 'Email',
    nameLabel: 'Nome',
    passwordLabel: 'Senha',
    confirmPasswordLabel: 'Confirmar Senha',
    nextButton: 'PRÓXIMO',
    alreadyHaveAccount: 'Já tem uma conta?',
    loginLink: 'Login',
  },
  'en-us': {
    emailLabel: 'Email',
    nameLabel: 'Name',
    passwordLabel: 'Password',
    confirmPasswordLabel: 'Confirm Password',
    nextButton: 'NEXT',
    alreadyHaveAccount: 'Already have an account?',
    loginLink: 'Login',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

interface Step1Props {
  register: UseFormRegister<SignupSchemaType>;
  watch: UseFormWatch<SignupSchemaType>;
  errors: FieldErrors<SignupSchemaType>;
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ register, watch, errors, onNext }) => {
  const values = watch(['email', 'name', 'password', 'password_confirmation']);

  const step1Errors = {
    email: errors.email,
    name: errors.name,
    password: errors.password,
    password_confirmation: errors.password_confirmation,
  };
  const hasStep1Errors = Object.values(step1Errors).some((error) => error);
  const isDisabled = values.some((value) => !value) || hasStep1Errors;

  return (
    <div className="flex flex-col gap-8 items-center mt-4">
      <div className="flex flex-col gap-7 items-center">
        <TooltipProvider delayDuration={0}>
          <Tooltip open={!!errors.email}>
            <TooltipTrigger asChild>
              <div>
                <InputField
                  label={t.emailLabel}
                  type="email"
                  register={register('email')}
                />
              </div>
            </TooltipTrigger>
            {errors.email && (
              <TooltipContent
                side="bottom"
                className="bg-red-500 text-white border-none"
              >
                <span>{errors.email.message}</span>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip open={!!errors.name}>
            <TooltipTrigger asChild>
              <div>
                <InputField
                  label={t.nameLabel}
                  type="text"
                  register={register('name')}
                />
              </div>
            </TooltipTrigger>
            {errors.name && (
              <TooltipContent
                side="bottom"
                className="bg-red-500 text-white border-none"
              >
                <span>{errors.name.message}</span>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
      <GradientLine />
      <div className="flex flex-col gap-7 items-center">
        <TooltipProvider delayDuration={0}>
          <Tooltip open={!!errors.password}>
            <TooltipTrigger asChild>
              <div>
                <InputField
                  label={t.passwordLabel}
                  type="password"
                  register={register('password')}
                />
              </div>
            </TooltipTrigger>
            {errors.password && (
              <TooltipContent
                side="bottom"
                className="bg-red-500 text-white border-none"
              >
                <span>{errors.password.message}</span>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip open={!!errors.password_confirmation}>
            <TooltipTrigger asChild>
              <div>
                <InputField
                  label={t.confirmPasswordLabel}
                  type="password"
                  register={register('password_confirmation')}
                />
              </div>
            </TooltipTrigger>
            {errors.password_confirmation && (
              <TooltipContent
                side="bottom"
                className="bg-red-500 text-white border-none"
              >
                <span>{errors.password_confirmation.message}</span>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col gap-12 items-center mt-6">
        <GoldenButton
          base="golden"
          variant="main"
          text={t.nextButton}
          type="button"
          onClick={onNext}
          disabled={isDisabled}
        />
        <div className="flex items-center gap-1 text-oldgoldbrown">
          <p>{t.alreadyHaveAccount}</p>
          <Link
            to="/login"
            className="underline font-bold text-oldgoldbrown hover:text-oldgoldbrown"
          >
            {t.loginLink}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step1;
