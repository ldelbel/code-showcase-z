import { useCompleteSignupUser, useSignupUser } from '@/api/hooks/auth';
import Footer from '@/shared/Footer';
import { FormValues } from '@/types/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Gender } from '@zodic/shared/types';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signupSchema, SignupSchemaType } from '../../form/schemas';
import GradientText from '../../shared/GradientText';
import Stepper from '../../shared/Stepper';
import { Step1, Step2, Step3, Step4 } from './steps';

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOAuth, setIsOAuth] = useState(false);

  const navigate = useNavigate();
  const signupMutation = useSignupUser();
  const completeSignupMutation = useCompleteSignupUser();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('oauth') === 'true') {
      setIsOAuth(true);
      setCurrentStep(3);
    }
  }, []);

  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
    clearErrors,
  } = useForm<SignupSchemaType>({
    resolver: yupResolver(signupSchema(isOAuth)) as Resolver<SignupSchemaType>,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = [
          'name',
          'email',
          'password',
          'password_confirmation',
        ];
        break;
      case 2:
        fieldsToValidate = ['profilePicture'];
        break;
      case 3:
        fieldsToValidate = [
          'gender',
          'birthDate',
          'birthTime',
          'birthLocation',
        ];
        break;
      case 4:
        setCurrentStep((prev) => prev + 1);
        return;
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    clearErrors();

    const fieldsToClear = {
      2: ['profilePicture'],
      3: [
        'gender',
        'birthDate',
        'birthTime',
        'birthLocation',
        'latitude',
        'longitude',
      ],
      4: ['instagram', 'tiktok'],
    }[currentStep];

    if (fieldsToClear) {
      fieldsToClear.forEach((field) => {
        setValue(field as keyof SignupSchemaType, undefined, {
          shouldValidate: false,
          shouldDirty: false,
          shouldTouch: false,
        });
      });
    }

    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit: SubmitHandler<SignupSchemaType> = async (formData) => {
    console.log('Form submitted with data:', formData);
    try {
      if (isOAuth) {
        completeSignupMutation.mutate(
          {
            gender: formData.gender as Gender,
            birthDate: formData.birthDate,
            birthTime: formData.birthTime || null,
            latitude: formData.latitude,
            longitude: formData.longitude,
            birthLocation: formData.birthLocation,
            instagramUsername: formData.instagram || null,
            tiktokUsername: formData.tiktok || null,
            language: 'en-us',
          },
          {
            onSuccess: () => {
              console.log('OAuth signup completed');
              navigate('/setup');
            },
            onError: (err) => console.error('OAuth signup error:', err),
          }
        );
      } else {
        signupMutation.mutate(
          {
            email: formData.email!,
            name: formData.name!,
            password: formData.password!,
            profileImage: formData.profilePicture || null,
            latitude: formData.latitude,
            longitude: formData.longitude,
            birthDate: formData.birthDate,
            birthLocation: formData.birthLocation,
            birthTime: formData.birthTime || null,
            instagramUsername: formData.instagram || null,
            tiktokUsername: formData.tiktok || null,
            language: 'en-us',
            gender: formData.gender as Gender,
          },
          {
            onSuccess: () => {
              console.log('Regular signup completed');
              navigate('/setup');
            },
            onError: (err) => console.error('Regular signup error:', err),
          }
        );
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const renderStep = () => (
    <div className="signup-container flex flex-col items-center justify-center min-h-[calc(100vh-50px)]">
      <div className="fixed top-8 left-0 right-0 flex flex-col items-center pt-8 pb-4 z-10">
        <div className="mb-6">
          <GradientText text="Cadastro" />
        </div>
        <div className="w-[60vw]">
          <Stepper totalSteps={4} currentStep={currentStep} />
        </div>
      </div>
      <div className="mt-44 max-w-md">
        <AnimatePresence mode="wait">
          {!isOAuth && currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Step1
                register={register}
                watch={watch}
                errors={errors}
                onNext={nextStep}
              />
            </motion.div>
          )}
          {!isOAuth && currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Step2
                register={register}
                watch={watch}
                errors={errors}
                onNext={nextStep}
                onPrev={prevStep}
                setValue={setValue}
              />
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Step3
                watch={watch}
                errors={errors}
                setValue={setValue}
                onNext={nextStep}
                onPrev={prevStep}
                isOAuth={isOAuth}
              />
            </motion.div>
          )}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Step4
                register={register}
                isOAuth={isOAuth}
                watch={watch}
                getValues={getValues}
                onPrev={prevStep}
                errors={errors}
                isSubmitting={isSubmitting}
                onSubmit={onSubmit}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <div className="min-h-dvh flex flex-col">
      <form onSubmit={(e) => e.preventDefault()} className="flex-grow">
        {' '}
        {/* Prevent default form submission */}
        {renderStep()}
      </form>
      <Footer />
    </div>
  );
};

export default Signup;
