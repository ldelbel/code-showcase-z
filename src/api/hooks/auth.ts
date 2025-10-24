import { FetchOAuthUserResponse } from '@/types';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import { OAuthCompleteBody, SignupBody } from '@zodic/shared/types';
import {
  completeSignupUser,
  fetchOAuthUser,
  initiateOAuth,
  InitiateOAuthResponse,
  LoginResponse,
  loginUser,
  logout,
  LogoutResponse,
  refreshToken,
  RefreshTokenResponse,
  signupUser,
} from '../auth';

export const useSignupUser = (): UseMutationResult<
  LoginResponse,
  Error,
  SignupBody,
  unknown
> => {
  return useMutation({
    mutationFn: (params: SignupBody) => signupUser(params),
    onError: (error: Error) => {
      console.error('❌ [useSignupUser] Error signing up user:', error.message);
    },
  });
};

export const useCompleteSignupUser = (): UseMutationResult<
  LoginResponse,
  Error,
  OAuthCompleteBody,
  unknown
> => {
  return useMutation({
    mutationFn: (params: OAuthCompleteBody) => completeSignupUser(params),
    onError: (error: Error) => {
      console.error(
        '❌ [useCompleteSignupUser] Error completing signup:',
        error.message
      );
      if (
        error.message.includes(
          'User with this OAuth provider ID already exists'
        )
      ) {
        const sessionToken = localStorage.getItem('sessionToken');
        if (sessionToken) {
          window.location.href = '/setup';
        }
      }
    },
  });
};

export const useLoginUser = (): UseMutationResult<
  LoginResponse,
  Error,
  { email: string; password: string },
  unknown
> => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginUser(email, password),
    onError: (error: Error) => {
      console.error('❌ [useLoginUser] Error logging in user:', error.message);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation<LogoutResponse, Error>({
    mutationFn: () => logout(),
    onSuccess: () => {
      console.log('✅ Successfully logged out');
      queryClient.invalidateQueries({ queryKey: ['session'] });
    },
    onError: (error) => {
      console.error('❌ Error logging out:', error);
    },
  });
};

export const useRefreshToken = (): UseMutationResult<
  RefreshTokenResponse,
  Error,
  string,
  unknown
> => {
  return useMutation({
    mutationFn: (token: string) => refreshToken(token),
    onError: (error: Error) => {
      console.error(
        '❌ [useRefreshToken] Error refreshing token:',
        error.message
      );
    },
  });
};

export const useInitiateOAuth = (): UseMutationResult<
  InitiateOAuthResponse,
  Error,
  string,
  unknown
> => {
  return useMutation({
    mutationFn: (provider: string) => initiateOAuth(provider),
    onError: (error: Error) => {
      console.error(
        '❌ [useInitiateOAuth] Error initiating OAuth:',
        error.message
      );
    },
  });
};

export const useFetchOAuthUser = (): UseQueryResult<
  FetchOAuthUserResponse,
  Error
> => {
  return useQuery({
    queryKey: ['oauthUser'],
    queryFn: fetchOAuthUser,
    enabled: false,
    retry: 1,
  });
};
