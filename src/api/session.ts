import { jwtDecode } from 'jwt-decode';

export const checkSession = () => {
  let token = localStorage.getItem('jwtToken');

  if (!token) {
    const cookies = document.cookie.split('; ');
    const jwtCookie = cookies.find((cookie) => cookie.startsWith('jwtToken='));
    token = jwtCookie ? jwtCookie.split('=')[1] : null;
  }

  if (!token) {
    return null;
  }

  try {
    const decoded: { exp: number } = jwtDecode(token);

    if (decoded.exp * 1000 < Date.now()) {
      console.warn('Session expired');
      return null;
    }

    return decoded;
  } catch (error) {
    console.error('Invalid JWT token:', error);
    return null;
  }
};
