import { ApiClientResponse } from '@/api/client';
import { fetchUserArtifact } from '@/api/client/artifacts';
import { useUserStore } from '@/store/useStore';
import { UserArtifact } from '@/types';

class UserArtifactsPoller {
  private pollingInterval = 5000;
  private maxAttempts = 30;
  private attempt = 0;
  private isPolling = false;
  private timeout: NodeJS.Timeout | null = null;

  private async pollArtifact(artifactName: string) {
    if (this.isPolling) {
      console.log(
        `[${new Date().toISOString()}] Polling already in progress for ${artifactName}, skipping...`
      );
      return;
    }

    this.isPolling = true;
    this.attempt += 1;

    try {
      console.log(
        `[${new Date().toISOString()}] Polling attempt ${this.attempt}/${
          this.maxAttempts
        } for ${artifactName}`
      );
      const result: ApiClientResponse<UserArtifact> = await fetchUserArtifact(
        artifactName
      );

      console.log('Result Status: ', result.status);

      const { addOrUpdateArtifact } = useUserStore.getState();

      if (result.status === 401) {
        console.log(
          `[${new Date().toISOString()}] Unauthorized (401) for ${artifactName}, stopping polling`
        );
        this.isPolling = false;
        return;
      }

      if (result.status === 404) {
        console.log(
          `[${new Date().toISOString()}] Artifact ${artifactName} not found (404), stopping polling`
        );
        this.isPolling = false;
        return;
      }

      if (result.status === 200 && result.data) {
        const artifactStatus = result.data.status;
        if (artifactStatus === 'completed' || artifactStatus === 'revealed') {
          addOrUpdateArtifact({ ...result.data, status: artifactStatus });
          console.log(
            `[${new Date().toISOString()}] Artifact ${artifactName} is ${artifactStatus}, stopping polling`
          );
          this.isPolling = false;
          return;
        } else {
          addOrUpdateArtifact({ artifactName, status: 'pending' });
          console.log(
            `[${new Date().toISOString()}] Artifact ${artifactName} status is ${artifactStatus}, continuing polling`
          );
        }
      } else if (result.status === 500) {
        console.error(
          `[${new Date().toISOString()}] Unexpected status ${
            result.status
          } for artifact ${artifactName}`
        );
        addOrUpdateArtifact({ artifactName, status: 'failed' });
        this.isPolling = false;
        return;
      } else {
        addOrUpdateArtifact({ artifactName, status: 'pending' });
        console.log(
          `[${new Date().toISOString()}] Artifact ${artifactName} is still processing (202), continuing polling`
        );
      }

      if (this.attempt >= this.maxAttempts) {
        console.error(
          `[${new Date().toISOString()}] Timed out: Artifact ${artifactName} after ${
            this.maxAttempts
          } attempts`
        );
        addOrUpdateArtifact({ artifactName, status: 'failed' });
        this.isPolling = false;
        return;
      }

      console.log(
        `[${new Date().toISOString()}] Scheduling next poll in ${
          this.pollingInterval
        }ms`
      );
      this.timeout = setTimeout(() => {
        console.log(
          `[${new Date().toISOString()}] Next poll triggered for ${artifactName}`
        );
        this.isPolling = false;
        this.pollArtifact(artifactName);
      }, this.pollingInterval);
    } catch (error) {
      console.error(
        `[${new Date().toISOString()}] Polling error for ${artifactName}:`,
        error
      );
      const { addOrUpdateArtifact } = useUserStore.getState();
      addOrUpdateArtifact({ artifactName, status: 'failed' });
      this.isPolling = false;
    }
  }

  startPolling(artifactName: string) {
    const { userArtifacts } = useUserStore.getState();
    const artifact = userArtifacts?.find(
      (a) => a.artifactName === artifactName
    );
    if (!this.isPolling && (!artifact || artifact.status === 'pending')) {
      this.attempt = 0;
      this.pollArtifact(artifactName);
    }
  }

  stopPolling() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.isPolling = false;
    this.attempt = 0;
  }
}

export const userArtifactsPoller = new UserArtifactsPoller();
