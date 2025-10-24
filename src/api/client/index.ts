const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;
const AUTH_BASE_URL = `${import.meta.env.VITE_AUTH_BASE_URL}/auth`;
const PAYMENT_BASE_URL = `${import.meta.env.VITE_PAYMENT_BASE_URL}/payment`;

export interface ApiClientResponse<T> {
  status: number;
  headers: Headers;
  data?: T;
  error?: string;
}

export const apiClient = async <T>(
  endpoint: string,
  options: RequestInit & { responseType?: 'json' | 'blob' } = {}
): Promise<ApiClientResponse<T>> => {
  let sessionToken = localStorage.getItem('sessionToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const makeRequest = async (
    token: string | null
  ): Promise<ApiClientResponse<T>> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        ...(options.headers || {}),
      },
      credentials: 'include',
    });

    const result: ApiClientResponse<T> = {
      status: response.status,
      headers: response.headers,
    };

    if (response.status === 401) {
      console.warn('Unauthorized. Attempting to refresh token...');
      if (!refreshToken) {
        return { ...result, error: 'No refresh token available' };
      }

      try {
        const refreshResponse = await fetch(`${AUTH_BASE_URL}/refresh`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        });

        const refreshData = (await refreshResponse.json()) as any;
        sessionToken = refreshData.token;
        if (!refreshResponse.ok || !sessionToken) {
          localStorage.removeItem('sessionToken');
          localStorage.removeItem('refreshToken');
          return { ...result, error: 'Failed to refresh token' };
        }

        localStorage.setItem('sessionToken', sessionToken);

        return await makeRequest(sessionToken);
      } catch (error) {
        console.error('Error refreshing token:', error);
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('refreshToken');
        return { ...result, error: 'Failed to refresh token' };
      }
    }

    const responseType = options.responseType || 'json';
    try {
      if (responseType === 'blob') {
        const data = (await response.blob()) as unknown as T;
        result.data = data;
      } else {
        const data = (await response.json()) as unknown as T;
        result.data = data;
      }
    } catch (error) {
      console.error(`Failed to parse response (${responseType}):`, error);
      result.error = `Failed to parse ${responseType} response`;
    }

    if (!response.ok && response.status !== 202) {
      console.error(`API Error: ${response.statusText}`, result.data);
      // @ts-expect-error (Data is not typed)
      throw new Error(result.data?.error || response.statusText || 'API Error');
    }

    return result;
  };

  return await makeRequest(sessionToken);
};

export const authClient = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const token =
    localStorage.getItem('accessToken') ||
    localStorage.getItem('authToken') ||
    localStorage.getItem('sessionToken');

  const response = await fetch(`${AUTH_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options?.headers || {}),
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`Auth Error: ${response.status} - ${response.statusText}`);
  }

  const data = (await response.json()) as any;

  if (data.token) {
    localStorage.removeItem('accessToken');
    localStorage.setItem('sessionToken', data.token);
    console.log('Updated session token in localStorage:', data.token);
  }

  return data as T;
};

export const paymentClient = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiClientResponse<T>> => {
  let sessionToken = localStorage.getItem('sessionToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const makeRequest = async (
    token: string | null
  ): Promise<ApiClientResponse<T>> => {
    const response = await fetch(`${PAYMENT_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        ...(options?.headers || {}),
      },
      credentials: 'include',
    });

    const result: ApiClientResponse<T> = {
      status: response.status,
      headers: response.headers,
    };

    if (response.status === 401) {
      console.warn('Unauthorized. Attempting to refresh token...');
      if (!refreshToken) {
        return { ...result, error: 'No refresh token available' };
      }

      try {
        const refreshResponse = await fetch(`${AUTH_BASE_URL}/refresh`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        });

        const refreshData = (await refreshResponse.json()) as any;
        sessionToken = refreshData.token;
        if (!refreshResponse.ok || !sessionToken) {
          localStorage.removeItem('sessionToken');
          localStorage.removeItem('refreshToken');
          return { ...result, error: 'Failed to refresh token' };
        }

        localStorage.setItem('sessionToken', sessionToken);

        return await makeRequest(sessionToken);
      } catch (error) {
        console.error('Error refreshing token:', error);
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('refreshToken');
        return { ...result, error: 'Failed to refresh token' };
      }
    }

    try {
      const data = (await response.json()) as any;
      result.data = data;
    } catch (error) {
      console.error(`Failed to parse response JSON:`, error);
      result.error = 'Failed to parse response';
    }

    if (!response.ok && response.status !== 202) {
      console.error(`Payment API Error: ${response.statusText}`, result.data);
      throw new Error(
        // @ts-expect-error (Data is not typed)
        result.data?.error || response.statusText || 'Payment API Error'
      );
    }

    return result;
  };

  return await makeRequest(sessionToken);
};
