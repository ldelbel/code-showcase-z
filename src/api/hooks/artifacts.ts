import { useUserStore } from '@/store/useStore';
import { UserArtifact } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { ApiClientResponse } from '../client';
import {
  fetchUserArtifact,
  fetchUserArtifacts,
  revealArtifact,
  selectArtifactImage,
} from '../client/artifacts';

export const useFetchUserArtifacts = () => {
  const setUserArtifacts = useUserStore((state) => state.setUserArtifacts);

  return useQuery<UserArtifact[], Error>({
    queryKey: ['userArtifacts'],
    queryFn: async () => {
      const artifacts = await fetchUserArtifacts();
      setUserArtifacts(artifacts);
      return artifacts;
    },
    staleTime: Infinity,
    retry: 1,
    enabled: false,
  });
};

export const useFetchCosmicMirror = () => {
  return useQuery<UserArtifact, Error>({
    queryKey: ['cosmic-mirror'],
    queryFn: async () => {
      const response: ApiClientResponse<UserArtifact> = await fetchUserArtifact(
        'cosmic-mirror'
      );
      if (response.status === 200 && response.data) {
        return response.data;
      }
      throw new Error(
        `Failed to fetch cosmic-mirror: HTTP status ${response.status}`
      );
    },
    staleTime: Infinity,
    retry: 1,
    enabled: false,
  });
};

export const useRevealArtifact = (artifactName: string) => {
  const queryClient = useQueryClient();
  const { userArtifacts, setUserArtifacts } = useUserStore((state) => state);

  return useMutation<UserArtifact, Error>({
    mutationKey: ['revealArtifact', artifactName],
    mutationFn: () => revealArtifact(artifactName),
    onSuccess: (updatedArtifact) => {
      const newUserArtifacts = (userArtifacts || []).map(
        (artifact: UserArtifact) =>
          artifact.artifactName === artifactName ? updatedArtifact : artifact
      );
      setUserArtifacts(
        newUserArtifacts.length ? newUserArtifacts : [updatedArtifact]
      );

      queryClient.invalidateQueries({ queryKey: ['userArtifacts'] });
    },
    onError: (error) => {
      console.error('Error revealing artifact:', error.message);
    },
  });
};

export const useSelectArtifactImage = (artifactName: string) => {
  const queryClient = useQueryClient();
  const { userArtifacts, setUserArtifacts } = useUserStore((state) => state);

  return useMutation<UserArtifact, Error, string>({
    mutationKey: ['selectArtifactImage', artifactName],
    mutationFn: (imageUrl) => selectArtifactImage(artifactName, imageUrl),
    onSuccess: (updatedArtifact) => {
      const newUserArtifacts = (userArtifacts || []).map(
        (artifact: UserArtifact) =>
          artifact.artifactName === artifactName ? updatedArtifact : artifact
      );
      setUserArtifacts(
        newUserArtifacts.length ? newUserArtifacts : [updatedArtifact]
      );

      queryClient.invalidateQueries({ queryKey: ['userArtifacts'] });
    },
    onError: (error) => {
      console.error('Error selecting artifact image:', error.message);
    },
  });
};

export const usePollUserArtifact = () => {
  const { userArtifacts } = useUserStore();
  const isPollingRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const artifactName = 'cosmic-mirror';
    let shouldPoll: boolean | undefined = false;

    const artifact = userArtifacts.find((a) => a.artifactName === artifactName);
    shouldPoll = artifact && artifact.status === 'pending';

    if (!shouldPoll) {
      console.log(
        `[${new Date().toISOString()}] No pending artifact for ${artifactName}, skipping polling`
      );

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log(
          `[${new Date().toISOString()}] Cleared existing interval for ${artifactName}`
        );
      }
      return;
    }

    const poll = async () => {
      if (!isPollingRef.current) return;

      const currentArtifact = useUserStore
        .getState()
        .userArtifacts.find((a) => a.artifactName === artifactName);
      if (!currentArtifact || currentArtifact.status !== 'pending') {
        console.log(
          `[${new Date().toISOString()}] Artifact ${artifactName} is no longer pending, stopping polling`
        );
        isPollingRef.current = false;
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      try {
        console.log(`[${new Date().toISOString()}] Polling ${artifactName}...`);
        await fetchUserArtifact(artifactName);
      } catch (error) {
        console.error(
          `[${new Date().toISOString()}] Polling error for ${artifactName}:`,
          error
        );
      }
    };

    const POLL_INTERVAL = 4000;
    const MAX_ATTEMPTS = 15;

    const startPolling = () => {
      isPollingRef.current = true;
      let attempts = 0;

      poll();

      intervalRef.current = setInterval(() => {
        if (!isPollingRef.current || attempts >= MAX_ATTEMPTS) {
          console.log(
            `[${new Date().toISOString()}] Stopping polling for ${artifactName} after ${attempts} attempts`
          );
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          isPollingRef.current = false;
          return;
        }

        poll();
        attempts++;
      }, POLL_INTERVAL);
    };

    if (shouldPoll && !intervalRef.current) {
      startPolling();
    }

    return () => {
      isPollingRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log(
          `[${new Date().toISOString()}] Cleared polling interval for ${artifactName} on cleanup`
        );
      }
    };
  }, [userArtifacts]);

  return null;
};
