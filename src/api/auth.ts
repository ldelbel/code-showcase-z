import { FetchOAuthUserResponse } from '@/types';
import { OAuthCompleteBody, SignupBody } from '@zodic/shared/types';
import { authClient } from './client';

export interface LoginResponse {
  success: boolean;
  token: string;
  refreshToken: string;
  error?: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface InitiateOAuthResponse {
  redirectUrl: string;
}

export const signupUser = async (
  params: SignupBody
): Promise<LoginResponse> => {
  try {
    const data = await authClient<LoginResponse>('/signup', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    return data;
  } catch (error) {
    console.error(
      '❌ [signupUser] Error:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

export const completeSignupUser = async (
  params: OAuthCompleteBody
): Promise<LoginResponse> => {
  try {
    const tempUserId = localStorage.getItem('tempUserId');
    const data = await authClient<LoginResponse>('/complete-signup', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'X-OAuth-TempUserId': tempUserId || "",
      },
    });

    if (!data.success) {
      throw new Error(data.error || 'Failed to complete signup');
    }

    return data;
  } catch (error) {
    console.error(
      '❌ [completeSignupUser] Error:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const data = await authClient<LoginResponse>('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    return data;
  } catch (error) {
    console.error(
      '❌ [loginUser] Error:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

export const refreshToken = async (
  token: string
): Promise<RefreshTokenResponse> => {
  try {
    const data = await authClient<RefreshTokenResponse>('/refresh-token', {
      method: 'POST',
      body: JSON.stringify({ refreshToken: token }),
    });
    return data;
  } catch (error) {
    console.error(
      '❌ [refreshToken] Error:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

export const initiateOAuth = async (
  provider: string
): Promise<InitiateOAuthResponse> => {
  try {
    const url = `/oauth/initiate?provider=${encodeURIComponent(provider)}`;
    const data = await authClient<InitiateOAuthResponse>(url, {
      method: 'GET',
    });
    return data;
  } catch (error) {
    console.error(
      '❌ [initiateOAuth] Error:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

export const fetchOAuthUser = async (): Promise<FetchOAuthUserResponse> => {
  const provider = localStorage.getItem('provider');

  if (!provider) {
    throw new Error('OAuth provider not found in localStorage');
  }

  try {
    const response = await authClient<FetchOAuthUserResponse>('/oauth/user', {
      method: 'GET',
      headers: {
        'X-OAuth-Provider': provider,
      },
    });

    if (!response) {
      throw new Error('Failed to fetch OAuth user');
    }

    console.log(
      '✅ [fetchOAuthUser] Successfully fetched OAuth user:',
      response
    );
    return response;
  } catch (error) {
    console.error(
      '❌ [fetchOAuthUser] Error:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

export interface Session {
  userId: string;
  email: string;
}

export const checkSession = async (): Promise<Session | null> => {
  try {
    console.log('checkSession: Starting session check');
    const data = await authClient<Session>('/session', {
      method: 'GET',
    });
    console.log('checkSession: Session found:', data);
    return data;
  } catch (error) {
    console.error(
      '❌ [checkSession] Error:',
      error instanceof Error ? error.message : error
    );
    if (error instanceof Error && error.message.includes('401')) {
      console.log('checkSession: No active session (401)');
      return null;
    }
    throw error;
  }
};

export interface LogoutResponse {
  message: string;
  error?: string;
}

export interface LogoutResponse {
  message: string;
  error?: string;
}

export const logout = async (): Promise<LogoutResponse> => {
  console.log('Logout');
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    let response: LogoutResponse | null = null;

    response = await authClient<LogoutResponse>('/logout', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response) {
      throw new Error('Failed to log out');
    }

    localStorage.removeItem('sessionToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('zodic-user-store');

    const result = response || {
      message: 'Logged out successfully (client-side only)',
    };
    console.log('✅ Logged out successfully:', result);
    return result;
  } catch (error) {
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('zodic-user-store');

    console.error('❌ Error logging out:', error);
    throw error;
  }
};
