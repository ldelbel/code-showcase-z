export type Archetype = {
  id: string;
  name: string;
  description: string;
  virtues: string[];
  images: ArchetypeImage[];
};

export type ArchetypeImage = {
  leonardoId: string;
  url: string;
  height: number;
  width: number;
};

export type ArchetypeData = Archetype[];

export type FetchOAuthUserResponse =
  | {
      message: 'User logged in successfully';
      sessionToken: string;
    }
  | {
      message: 'User logged in with OAuth. Proceed to signup completion.';
      tempUserId: string;
    }
  | {
      error: string;
      details?: string;
    };

export type UserArtifact = {
  artifactName: string;
  status: 'pending' | 'completed' | 'revealed' | 'failed';
  images?: Array<{
    id: string;
    url: string;
    isFaceSwapped?: boolean;
    origUrl?: string;
    origLeonardoId?: string;
  }>;
  createdAt?: string;
  chosenImageUrl?: string | null;
  framedImageUrl?: string | null;
  archetypeData?: ArchetypeDataInUserArtifact;
};

export type ArchetypeDataInUserArtifact = {
  name: string;
  combination: string;
  description: string;
  virtues: string[];
  content: Array<{
    section: string;
    text: string;
  }>;
  essenceLine: string;
}

export type Nullable<T> = T | null;
