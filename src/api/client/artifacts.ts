import { useUserStore } from '@/store/useStore';
import { UserArtifact } from '@/types';
import { apiClient, ApiClientResponse } from './index';

export const fetchUserArtifacts = async (): Promise<UserArtifact[]> => {
  const response = await apiClient<{
    artifacts: UserArtifact[];
    count: number;
  }>('/user/artifacts');
  return response.data?.artifacts || [];
};

const requestCache: {
  [key: string]: {
    timestamp: number;
    response: ApiClientResponse<UserArtifact>;
  };
} = {};
const CACHE_DURATION = 5000;

export const clearArtifactCache = () => {
  Object.keys(requestCache).forEach((key) => {
    delete requestCache[key];
  });
  console.log(`[${new Date().toISOString()}] Cleared artifact request cache`);
};

export const fetchUserArtifact = async (
  artifactName: string
): Promise<ApiClientResponse<UserArtifact>> => {
  try {
    console.log(
      `[${new Date().toISOString()}] Checking cache for ${artifactName}`
    );
    const cached = requestCache[artifactName];
    if (cached) {
      const age = Date.now() - cached.timestamp;
      console.log(`[${new Date().toISOString()}] Cache found, age: ${age}ms`);
      if (age < CACHE_DURATION) {
        console.log(
          `[${new Date().toISOString()}] Using cached response for ${artifactName}`
        );
        return cached.response;
      } else {
        console.log(
          `[${new Date().toISOString()}] Cache expired for ${artifactName}, fetching fresh`
        );
      }
    } else {
      console.log(
        `[${new Date().toISOString()}] No cache entry for ${artifactName}`
      );
    }

    const response = await apiClient<UserArtifact>(
      `/user/artifacts/${artifactName}`
    );
    console.log(
      `[${new Date().toISOString()}] fetchUserArtifact response for ${artifactName}:`,
      response
    );

    const { addOrUpdateArtifact } = useUserStore.getState();

    if (response.status === 401) {
      console.log(
        `[${new Date().toISOString()}] Unauthorized (401) for ${artifactName}, doing nothing`
      );
    } else if (response.status === 204) {
      console.log(
        `[${new Date().toISOString()}] Artifact ${artifactName} not found (204), doing nothing`
      );
    } else if (response.status === 500) {
      console.log(
        `[${new Date().toISOString()}] Server error (500) for ${artifactName}, treating as transient`
      );
    } else if (response.status === 200 && response.data) {
      const artifactStatus = response.data.status;
      console.log('ArtifactData: ', response.data);
      console.log('ArtifactStatus: ', artifactStatus);
      if (artifactStatus === 'completed' || artifactStatus === 'revealed') {
        addOrUpdateArtifact({ ...response.data, status: artifactStatus });
        console.log(
          `[${new Date().toISOString()}] Artifact ${artifactName} is ${artifactStatus}, setting data`
        );
      } else if (artifactStatus === 'pending') {
        const currentArtifact = useUserStore
          .getState()
          .userArtifacts.find((a) => a.artifactName === artifactName);
        if (currentArtifact?.status !== 'pending') {
          addOrUpdateArtifact({ artifactName, status: 'pending' });
          console.log(
            `[${new Date().toISOString()}] Artifact ${artifactName} status is ${artifactStatus}, setting to pending`
          );
        } else {
          console.log(
            `[${new Date().toISOString()}] Artifact ${artifactName} already pending in store, skipping update`
          );
        }
      }
    } else {
      console.log(
        `[${new Date().toISOString()}] Unexpected status ${
          response.status
        } for ${artifactName}, no store update`
      );
    }

    requestCache[artifactName] = { timestamp: Date.now(), response };
    console.log(
      `[${new Date().toISOString()}] Cached response for ${artifactName}`
    );
    return response;
  } catch (error) {
    console.error(
      `[${new Date().toISOString()}] Error fetching ${artifactName}:`,
      error
    );

    throw error;
  }
};

export const revealArtifact = async (
  artifactName: string
): Promise<UserArtifact> => {
  const response = await apiClient<UserArtifact>(
    `/user/artifacts/${artifactName}/reveal`,
    {
      method: 'POST',
    }
  );
  return response.data!;
};

export const selectArtifactImage = async (
  artifactName: string,
  imageUrl: string
): Promise<UserArtifact> => {
  const response = await apiClient<UserArtifact>(
    `/user/artifacts/${artifactName}/select-image`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl }),
    }
  );
  return response.data!;
};
