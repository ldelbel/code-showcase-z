import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const signupSchema = (isOAuth: boolean) =>
  yup.object().shape({
    name: yup.string().when([], {
      is: () => !isOAuth,
      then: (schema) => schema.required('Name is required'),
      otherwise: (schema) => schema.notRequired(),
    }),

    email: yup
      .string()
      .email('Invalid email')
      .when([], {
        is: () => !isOAuth,
        then: (schema) => schema.required('Email is required'),
        otherwise: (schema) => schema.notRequired(),
      }),

    password: yup.string().when([], {
      is: () => !isOAuth,
      then: (schema) =>
        schema
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      otherwise: (schema) => schema.notRequired(),
    }),

    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .when([], {
        is: () => !isOAuth,
        then: (schema) => schema.required('Password confirmation is required'),
        otherwise: (schema) => schema.notRequired(),
      }),

    gender: yup.string().required('Gender is required'),
    birthDate: yup.string().required('Birth date is required'),
    birthTime: yup.string().nullable(),
    birthLocation: yup.string().required('Birth location is required'),
    latitude: yup.number().required(),
    longitude: yup.number().required(),
    profilePicture: yup.string().nullable(),
    instagram: yup.string().nullable(),
    tiktok: yup.string().nullable(),
  });

export type SignupSchemaType = yup.InferType<ReturnType<typeof signupSchema>>;
