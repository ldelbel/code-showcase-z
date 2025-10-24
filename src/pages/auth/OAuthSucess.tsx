import {
  useFetchConcepts,
  useFetchUserProfile,
  useProducts,
  useUserProducts,
} from '@/api/hooks';
import { useFetchOAuthUser } from '@/api/hooks/auth';
import { useUserStore } from '@/store/useStore';
import { Provider } from '@zodic/shared/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mockUserProfile, { mockConcepts } from '../mock';
import Auth from '../Signup/steps/Step5/components/Auth';

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { setConcepts, setUserProfile } = useUserStore();
  const { data, error, isLoading, refetch } = useFetchOAuthUser();
  const {
    error: userError,
    isLoading: userIsLoading,
    refetch: userRefetch,
  } = useFetchUserProfile();
  const {
    data: conceptsData,
    error: conceptsError,
    isLoading: conceptsLoading,
    refetch: refetchConcepts,
  } = useFetchConcepts();
  const { isLoading: isLoadingProducts, error: productsError } = useProducts();
  const {
    refetch: refetchUserProducts,
    isLoading: isLoadingUserProducts,
    error: userProductsError,
  } = useUserProducts();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');
    const provider = urlParams.get('provider') as Provider | undefined;

    if (accessToken && provider) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('provider', provider);
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      } else {
        localStorage.removeItem('refreshToken');
      }
      console.log('✅ Stored tokens and provider in localStorage:', {
        accessToken,
        refreshToken,
        provider,
      });
    } else {
      console.warn('⚠️ Missing accessToken or provider in URL params:', {
        accessToken,
        refreshToken,
        provider,
      });
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;

    if (error) {
      console.error('OAuth user fetch error:', error.message);
      alert(`Authentication failed: ${error.message}`);
      navigate('/login');
      return;
    }

    if (data) {
      if ('sessionToken' in data && data.sessionToken) {
        localStorage.setItem('sessionToken', data.sessionToken);
        console.log(
          '✅ User logged in successfully with sessionToken:',
          data.sessionToken
        );
      } else if ('tempUserId' in data && data.tempUserId) {
        localStorage.setItem('tempUserId', data.tempUserId);
        console.log(
          '✅ User logged in with OAuth, proceeding to signup with tempUserId:',
          data.tempUserId
        );
        navigate('/signup?oauth=true');
      } else if ('error' in data) {
        console.error('OAuth user fetch error:', data.error);
        alert(`Authentication failed: ${data.error}`);
        navigate('/login');
      }
    } else {
      console.log('🔄 Triggering OAuth user fetch');
      refetch();
    }
  }, [data, error, isLoading, navigate, refetch]);

  useEffect(() => {
    if (!data || !('sessionToken' in data) || userIsLoading) return;

    const fetchProfile = async () => {
      try {
        const userProfileResult = await userRefetch();
        if (userProfileResult.data) {
          console.log('✅ User profile fetched:', userProfileResult.data);
          setUserProfile(userProfileResult.data);
        } else {
          console.warn('⚠️ No user profile data returned', userProfileResult);
          setUserProfile(mockUserProfile);
        }
      } catch (userFetchErr) {
        console.error('User profile fetch failed:', userFetchErr);
        setUserProfile(mockUserProfile);
      }
    };

    fetchProfile();
  }, [data, userIsLoading, userRefetch, setUserProfile]);

  useEffect(() => {
    if (!data || !('sessionToken' in data) || conceptsLoading) return;

    const fetchConcepts = async () => {
      if (!conceptsData && !conceptsError) {
        try {
          const conceptsResult = await refetchConcepts();
          if (conceptsResult.data) {
            console.log('✅ Concepts fetched and set:', conceptsResult.data);
            setConcepts(conceptsResult.data);
          } else {
            console.log('⚠️ No concepts data returned', conceptsResult);
            setConcepts(mockConcepts);
          }
        } catch (conceptsErr) {
          console.error('Concepts fetch failed:', conceptsErr);
          setConcepts(mockConcepts);
        }
      } else if (conceptsError) {
        console.error('Error fetching generic concepts:', conceptsError);
        setConcepts(mockConcepts);
      } else if (conceptsData) {
        console.log('✅ Concepts already available:', conceptsData);
        setConcepts(conceptsData);
      }
    };

    fetchConcepts();
  }, [
    data,
    conceptsData,
    conceptsError,
    conceptsLoading,
    refetchConcepts,
    setConcepts,
  ]);

  useEffect(() => {
    if (!data || !('sessionToken' in data) || isLoadingUserProducts) return;

    const fetchUserProducts = async () => {
      try {
        await refetchUserProducts();
      } catch (userProductsErr) {
        console.error('Error fetching User Products:', userProductsErr);
      }
    };

    fetchUserProducts();
  }, [data, isLoadingUserProducts, refetchUserProducts]);

  useEffect(() => {
    if (
      !data ||
      isLoading ||
      userIsLoading ||
      conceptsLoading ||
      isLoadingUserProducts
    )
      return;

    if ('sessionToken' in data && data.sessionToken) {
      if (
        !userError &&
        !conceptsError &&
        !userProductsError &&
        !productsError
      ) {
        console.log('✅ All data fetched successfully, navigating to /main');
        navigate('/main');
      } else {
        console.log(
          '⚠️ Some data fetch failed, but proceeding to /main with mocks where applicable'
        );
        navigate('/main');
      }
    }
  }, [
    data,
    isLoading,
    userIsLoading,
    conceptsLoading,
    isLoadingUserProducts,
    userError,
    conceptsError,
    userProductsError,
    productsError,
    navigate,
  ]);

  if (
    isLoading ||
    userIsLoading ||
    conceptsLoading ||
    isLoadingProducts ||
    isLoadingUserProducts
  ) {
    return (
      <div className="h-[calc(100dvh-80px)] flex items-center justify-center">
        <Auth />
      </div>
    );
  }

  return null;
};

export default OAuthSuccess;
