import { MyConceptsData } from '@/pages/MainLayout/pages/Dashboard/content/types';
import { useUserStore } from '@/store/useStore';
import { Archetype } from '@/types';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import {
  AstroKVData,
  Concept,
  UserConceptData,
  UserProfile,
} from '@zodic/shared/types';
import { useEffect, useState } from 'react';
import {
  fetchArchetypes,
  fetchConceptImage,
  fetchConcepts,
  fetchProducts,
  fetchShareImage,
  fetchUserAstrology,
  fetchUserConcept,
  fetchUserConcepts,
  fetchUserProducts,
  fetchUserProfile,
  generateAstrologyData,
  generateCosmicMirror,
  GenerateCosmicMirrorPayload,
  GenerateCosmicMirrorResponse,
  generateUserConcept,
  Product,
  updateUserConceptImageIdx,
  UpdateUserConceptImageIdxResponse,
  updateUserProfile,
  uploadProfilePicture,
  uploadUserPhoto,
  UserProduct,
} from '../../api';
import { ApiClientResponse } from '../client';

export const useFetchUserProfile = (): UseQueryResult<UserProfile, Error> => {
  return useQuery({
    queryKey: ['fetchUserProfile'],
    queryFn: fetchUserProfile,
    enabled: false,
  });
};

export const useFetchShareImage = (
  enabled: boolean
): UseQueryResult<Blob, Error> => {
  return useQuery({
    queryKey: ['fetchShareImage', 'cosmic-mirror'],
    queryFn: fetchShareImage,
    enabled,
  });
};

export const useFetchConceptImage = (
  enabled: boolean,
  conceptSlug: string
): UseQueryResult<Blob, Error> => {
  return useQuery({
    queryKey: ['fetchConceptImage', conceptSlug],
    queryFn: () => fetchConceptImage(conceptSlug),
    enabled,
  });
};

export const useFetchConcepts = (): UseQueryResult<MyConceptsData, Error> => {
  const setConcepts = useUserStore((state) => state.setConcepts);
  return useQuery({
    queryKey: ['concepts'],
    queryFn: async () => {
      console.log('useFetchConcepts: Starting fetch');
      const concepts = await fetchConcepts();
      console.log('useFetchConcepts: Fetched concepts', concepts);
      setConcepts(concepts);
      return concepts;
    },
    staleTime: Infinity,
    retry: 1,
    enabled: false,
  });
};

export const useFetchArchetypes = (language: string, enabled: boolean) => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'processing' | 'success' | 'error'
  >('idle');
  const [data, setData] = useState<Archetype[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWithPolling = async () => {
    setStatus('loading');
    let attempt = 0;
    const maxAttempts = 12;
    const pollingInterval = 5000;

    while (attempt < maxAttempts) {
      const result = await fetchArchetypes();
      console.log('useFetchArchetypes: Fetch attempt', { attempt, result });

      if (result.status === 'success') {
        setStatus('success');
        setData(result.data!);
        setError(null);
        return;
      } else if (result.status === 'processing') {
        setStatus('processing');
        setError(result.error!);
        attempt++;
      
        await new Promise((resolve) => setTimeout(resolve, pollingInterval));
      } else {
      
        setStatus('error');
        setError(result.error!);
        return;
      }
    }

  
    setStatus('error');
    setError(
      'Timed out: Archetypes are still processing. Please try again later.'
    );
  };

  useEffect(() => {
    if (enabled) {
      fetchWithPolling();
    }
  }, [enabled, language]);

  return { status, data, error };
};

export const useFetchAstrologyData = (): UseQueryResult<AstroKVData, Error> => {
  const setAstrologyData = useUserStore((state) => state.setAstrologyData);
  return useQuery({
    queryKey: ['astrologyData'],
    queryFn: async () => {
      const astrologyData = await fetchUserAstrology();
      console.log('Astrology Data in useFetchAstrologyData: ', astrologyData);
      setAstrologyData(astrologyData);
      return astrologyData;
    },
    staleTime: Infinity,
    retry: 1,
    enabled: false,
  });
};

type FetchUserConceptParams = {
  conceptSlug: Concept;
};

export const useFetchUserConcept = ({
  conceptSlug,
}: FetchUserConceptParams): UseQueryResult<UserConceptData, Error> => {
  return useQuery({
    queryKey: ['fetchUserConcept', conceptSlug],
    queryFn: () => fetchUserConcept(conceptSlug),
    enabled: false,
  });
};

interface GenerateUserConceptResponse {
  newConcept: UserConceptData;
  userConcepts: UserConceptData[];
}

export const useGenerateUserConcept = (conceptSlug: Concept) => {
  const queryClient = useQueryClient();
  const { setUserConcepts } = useUserStore();

  return useMutation<
    ApiClientResponse<GenerateUserConceptResponse>,
    Error,
    void
  >({
    mutationKey: ['generateUserConcept', conceptSlug],
    mutationFn: () => {
      console.log(`🌐 Fetching user concept for conceptSlug: ${conceptSlug}`);
      return generateUserConcept(conceptSlug);
    },
    onError: (error: Error) => {
      console.error(
        '❌ [useGenerateUserConcept] Error generating user concept:',
        error.message
      );
    },
    onSuccess: (response: ApiClientResponse<GenerateUserConceptResponse>) => {
      console.log('[useGenerateUserConcept] User concept response:', response);
      if (response.status === 201 && response.data?.newConcept) {
        console.log(
          '[useGenerateUserConcept] Updating userConcepts in store with:',
          response.data.userConcepts
        );
        setUserConcepts(response.data.userConcepts);
        console.log('[useGenerateUserConcept] Invalidating userConcepts query');
        queryClient.invalidateQueries({ queryKey: ['userConcepts'] });
      }
    },
  });
};

export const useUpdateUserConceptImageIdx = (
  conceptSlug: string,
  setUserConcept: (concept: UserConceptData) => void,
  setUserConcepts: (concepts: UserConceptData[]) => void,
  userConcepts: UserConceptData[]
) => {
  return useMutation<
    UpdateUserConceptImageIdxResponse,
    Error,
    number
  >({
    mutationFn: (imageIdx) => updateUserConceptImageIdx(conceptSlug, imageIdx),
    onSuccess: (response) => {
      console.log('✅ Successfully updated imageIdx:', response);
    
      setUserConcept(response.data);
    
      setUserConcepts(
        userConcepts.map((concept) =>
          concept.conceptSlug === conceptSlug ? response.data : concept
        )
      );
    },
    onError: (error) => {
      console.error('❌ Error in useUpdateUserConceptImageIdx:', error);
    },
  });
};

export const useFetchUserConcepts = (): UseQueryResult<
  UserConceptData[],
  Error
> => {
  const setUserConcepts = useUserStore((state) => state.setUserConcepts);
  return useQuery({
    queryKey: ['userConcepts'],
    queryFn: async () => {
      const userConcepts = await fetchUserConcepts();
      setUserConcepts(userConcepts);
      return userConcepts;
    },
    staleTime: Infinity,
    retry: 1,
    enabled: false,
  });
};

type UpdateUserProfileParams = {
  name?: string;
  gender?: string;
  birthDateTime?: string;
  latitude?: number;
  longitude?: number;
};

export const useUpdateUserProfile = (): UseMutationResult<
  UserProfile,
  Error,
  UpdateUserProfileParams,
  unknown
> => {
  return useMutation({
    mutationFn: (params: UpdateUserProfileParams) => updateUserProfile(params),
  });
};

export const useUploadUserPhoto = (): UseMutationResult<
  { uploadImageUrl: string; uploadImageId: string },
  Error,
  File,
  unknown
> => {
  return useMutation({
    mutationFn: (file: File) => uploadUserPhoto(file),
  });
};

export const useUploadProfilePicture = (): UseMutationResult<
  { fileUrl: string },
  Error,
  File,
  unknown
> => {
  return useMutation({
    mutationFn: (file: File) => uploadProfilePicture(file),
  });
};

export const useGenerateAstrologyData = (): UseMutationResult<
  AstroKVData,
  Error,
  void,
  unknown
> => {
  return useMutation({
    mutationFn: () => generateAstrologyData(),
  });
};

export const useGenerateCosmicMirror = () => {
  return useMutation<
    GenerateCosmicMirrorResponse,
    Error,
    GenerateCosmicMirrorPayload
  >({
    mutationFn: generateCosmicMirror,
  });
};

export const useProducts = () => {
  const setProducts = useUserStore((state) => state.setProducts);

  const productsQuery = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (productsQuery.data) {
      setProducts(productsQuery.data);
    }
  }, [productsQuery.data, setProducts]);

  return {
    products: productsQuery.data,
    isLoading: productsQuery.isLoading,
    error: productsQuery.error,
  };
};

export const useUserProducts = ({ enabled = false } = {}) => {
  const setUserProducts = useUserStore((state) => state.setUserProducts);

  const userProductsQuery = useQuery<UserProduct[], Error>({
    queryKey: ['userProducts'],
    queryFn: fetchUserProducts,
    staleTime: 5 * 60 * 1000,
  
    enabled,
  });

  useEffect(() => {
    if (userProductsQuery.data) {
      setUserProducts(userProductsQuery.data);
    }
  }, [userProductsQuery.data, setUserProducts]);

  return {
    userProducts: userProductsQuery.data,
    isLoading: userProductsQuery.isLoading,
    error: userProductsQuery.error,
    refetch: userProductsQuery.refetch,
  };
};
