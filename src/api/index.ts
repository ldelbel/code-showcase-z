export * from './auth';

import { MyConceptsData } from '@/pages/MainLayout/pages/Dashboard/content/types';
import { Archetype } from '@/types';
import {
  AstroKVData,
  Concept,
  UserConceptData,
  UserProfile,
} from '@zodic/shared/types';
import { apiClient, ApiClientResponse } from './client';

interface RawConcept {
  slug: Concept;
  planet1: string;
  planet2: string;
  planet3: string;
}

export const fetchConcepts = async (): Promise<MyConceptsData> => {
  const response = await apiClient<RawConcept[]>('/concepts');
  console.log('FETCH CONCEPTS: ', response);

  if (response.error) {
    console.error(`❌ [fetchConcepts] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchConcepts] No data in response');
    throw new Error('No data in response');
  }

  return response.data.map((concept: RawConcept) => ({
    slug: concept.slug,
    placements: [concept.planet1, concept.planet2, concept.planet3],
    userConcept: null,
    image: `/images/${concept.slug}.png`,
    composition: [],
  }));
};

interface RawArchetype {
  id: string;
  name: string;
  essenceLine: string;
  description: string;
  virtues: string[];
  images: Array<{
    leonardoId: string;
    url: string;
    width: number;
    height: number;
  }>;
}

interface ArchetypeApiResponse {
  archetypes: RawArchetype[];
}

interface ProcessingResponse {
  message: string;
}

interface ErrorResponse {
  error: string;
}

export const fetchArchetypes = async (): Promise<{
  status: 'success' | 'processing' | 'error';
  data?: Archetype[];
  error?: string;
}> => {
  const response = await apiClient<
    ArchetypeApiResponse | ProcessingResponse | ErrorResponse
  >(`/artifact/cosmic-mirror/archetypes`);
  console.log('FETCH ARCHETYPES: ', response);

  if (response.error) {
    console.error(`❌ [fetchArchetypes] Error:`, response.error);
    return { status: 'error', error: response.error };
  }

  if (!response.data) {
    console.error('❌ [fetchArchetypes] No data in response');
    return { status: 'error', error: 'No data in response' };
  }

  if ('message' in response.data) {
    console.warn(
      '⚠️ [fetchArchetypes] Processing in progress:',
      response.data.message
    );
    return { status: 'processing', error: response.data.message };
  }

  const archetypeResponse = response.data as ArchetypeApiResponse;
  const archetypes = archetypeResponse.archetypes.map(
    (archetype: RawArchetype) => ({
      id: archetype.id,
      name: archetype.name,
      essenceLine: archetype.essenceLine,
      description: archetype.description,
      virtues: archetype.virtues,
      images: archetype.images,
    })
  );
  return { status: 'success', data: archetypes };
};

export const fetchUserProfile = async (): Promise<UserProfile> => {
  const response = await apiClient<UserProfile>('/user/profile');

  if (response.error) {
    console.error(`❌ [fetchUserProfile] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchUserProfile] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const fetchUserAstrology = async (): Promise<AstroKVData> => {
  const response = await apiClient<AstroKVData>('/user/astrology');

  if (response.error) {
    console.error(`❌ [fetchUserAstrology] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchUserAstrology] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const fetchUserConcept = async (
  conceptSlug: Concept
): Promise<UserConceptData> => {
  const response = await apiClient<UserConceptData>(
    `/user/concepts/${conceptSlug}`
  );

  if (response.error) {
    console.error(`❌ [fetchUserConcept] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchUserConcept] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const fetchUserConcepts = async (): Promise<UserConceptData[]> => {
  const response = await apiClient<UserConceptData[]>('/user/concepts');

  if (response.error) {
    console.error(`❌ [fetchUserConcepts] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchUserConcepts] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const updateUserProfile = async (updates: {
  name?: string;
  gender?: string;
  birthDateTime?: string;
  latitude?: number;
  longitude?: number;
}): Promise<UserProfile> => {
  const response = await apiClient<UserProfile>('/user/profile', {
    method: 'PUT',
    body: JSON.stringify(updates),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.error) {
    console.error(`❌ [updateUserProfile] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [updateUserProfile] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const uploadUserPhoto = async (
  file: File
): Promise<{ uploadImageUrl: string; uploadImageId: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await apiClient<{
    uploadImageUrl: string;
    uploadImageId: string;
  }>('/user/upload-photo', {
    method: 'POST',
    body: formData,
  });

  if (response.error) {
    console.error(`❌ [uploadUserPhoto] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [uploadUserPhoto] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const uploadProfilePicture = async (
  file: File
): Promise<{ fileUrl: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await apiClient<{ fileUrl: string }>(
    '/upload-profile-picture',
    {
      method: 'POST',
      body: formData,
    }
  );

  if (response.error) {
    console.error(`❌ [uploadProfilePicture] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [uploadProfilePicture] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const generateAstrologyData = async (): Promise<AstroKVData> => {
  const response = await apiClient<AstroKVData>('/user/generate-astrology', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.error) {
    console.error(`❌ [generateAstrologyData] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [generateAstrologyData] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export interface GenerateUserConceptResponse {
  newConcept: UserConceptData;
  userConcepts: UserConceptData[];
}

export const generateUserConcept = async (
  conceptSlug: string
): Promise<ApiClientResponse<GenerateUserConceptResponse>> => {
  console.log(
    `🌐 [generateUserConcept] Fetching user concept for conceptSlug: ${conceptSlug}`
  );

  const response = await apiClient<GenerateUserConceptResponse>(
    '/user/generate-concept',
    {
      method: 'POST',
      body: JSON.stringify({ conceptSlug }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(`🌐 [generateUserConcept] Response:`, response);

  if (response.error) {
    console.error(`❌ [generateUserConcept] Error:`, response.error);
    throw new Error(response.error);
  }

  return response;
};

export interface UpdateUserConceptImageIdxResponse {
  message: string;
  data: UserConceptData;
}

export const updateUserConceptImageIdx = async (
  conceptSlug: string,
  imageIdx: number
): Promise<UpdateUserConceptImageIdxResponse> => {
  try {
    console.log(
      `📡 Updating imageIdx for conceptSlug: ${conceptSlug} to ${imageIdx}`
    );
    const response = await apiClient<UpdateUserConceptImageIdxResponse>(
      '/user/concept/image',
      {
        method: 'PATCH',
        body: JSON.stringify({ conceptSlug, imageIdx }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.error || !response.data) {
      throw new Error(response.error || 'Failed to update image index');
    }

    console.log('✅ Image index updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error updating image index:', error);
    throw error;
  }
};

export interface GenerateCosmicMirrorPayload {
  generatedImageId: string;
  size: 'post'; 
  archetypeDataId: string;
}


export interface GenerateCosmicMirrorResponse {
  sdGenerationJob: {
    generationId: string;
  };
}

export interface GenerateCosmicMirrorError {
  error: string;
}

export const generateCosmicMirror = async (
  payload: GenerateCosmicMirrorPayload
) => {
  try {
    console.log('📡 Generating Cosmic Mirror with payload:', payload);
    const response = await apiClient<GenerateCosmicMirrorResponse>(
      '/artifact/cosmic-mirror/generate',
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.error || !response.data) {
      throw new Error(response.error || 'Failed to generate Cosmic Mirror');
    }

    console.log('✅ Cosmic Mirror generation initiated:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error generating Cosmic Mirror:', error);
    throw error;
  }
};


export interface Product {
  slug: string;
  price: number;
  imageUrl: string | null;
  imageBase64: string | null;
}

export interface UserProduct {
  productSlug: string;
  status: 'processing_payment' | 'unlocked' | 'locked';
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await apiClient<Product[]>('/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.error) {
    console.error(`❌ [fetchProducts] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchProducts] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const fetchUserProducts = async (): Promise<UserProduct[]> => {
  const response = await apiClient<UserProduct[]>('/user/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.error) {
    console.error(`❌ [fetchUserProducts] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchUserProducts] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const fetchShareImage = async (): Promise<Blob> => {
  const response = await apiClient<Blob>('/user/share-images/cosmic-mirror', {
    method: 'GET',
    responseType: 'blob',
  });

  if (response.error) {
    console.error('❌ [fetchShareImage] Error:', response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchShareImage] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};

export const fetchConceptImage = async (conceptSlug: string): Promise<Blob> => {
  const response = await apiClient<Blob>(`/user/share-images/${conceptSlug}`, {
    method: 'GET',
    responseType: 'blob',
  });

  if (response.error) {
    console.error('❌ [fetchConceptImage] Error:', response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [fetchConceptImage] No data in response');
    throw new Error('No data in response');
  }

  return response.data;
};