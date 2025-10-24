import { MyConceptsData } from '@/pages/MainLayout/pages/Dashboard/content/types';
import { UserArtifact } from '@/types';
import { AstroKVData, UserConceptData, UserProfile } from '@zodic/shared/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Product {
  slug: string;
  price: number;
  imageUrl: string | null;
  imageBase64: string | null;
}

interface UserProduct {
  productSlug: string;
  status: 'processing_payment' | 'unlocked' | 'locked';
}

interface UserStore {
  userProfile: UserProfile | null;
  astrologyData: AstroKVData | null;
  concepts: MyConceptsData;
  userConcepts: UserConceptData[];
  userArtifacts: UserArtifact[];
  products: Product[];
  userProducts: UserProduct[];
  setAstrologyData: (data: AstroKVData) => void;
  setConcepts: (concepts: MyConceptsData) => void;
  setUserProfile: (userProfile: UserProfile) => void;
  setUserConcepts: (userConcepts: UserConceptData[]) => void;
  setUserArtifacts: (userArtifacts: UserArtifact[]) => void;
  setProducts: (products: Product[]) => void;
  setUserProducts: (userProducts: UserProduct[]) => void;
  getUserArtifact: (artifactName: string) => UserArtifact | undefined;
  addOrUpdateArtifact: (artifact: UserArtifact) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      userProfile: null,
      astrologyData: null,
      concepts: [],
      userConcepts: [],
      userArtifacts: [],
      products: [],
      userProducts: [],
      setAstrologyData: (data) => set({ astrologyData: data }),
      setConcepts: (concepts) => set({ concepts }),
      setUserProfile: (userProfile) => set({ userProfile }),
      setUserConcepts: (userConcepts) => set({ userConcepts }),
      setUserArtifacts: (userArtifacts) => set({ userArtifacts }),
      setProducts: (products) => set({ products }),
      setUserProducts: (userProducts) => set({ userProducts }),
      getUserArtifact: (artifactName) => {
        return get().userArtifacts?.find(
          (a) => a.artifactName === artifactName
        );
      },
      addOrUpdateArtifact: (artifact) =>
        set((state) => {
          const existingArtifacts = state.userArtifacts || [];
          const existingIndex = existingArtifacts.findIndex(
            (a) => a.artifactName === artifact.artifactName
          );
          if (existingIndex !== -1) {
            const updatedArtifacts = [...existingArtifacts];
            updatedArtifacts[existingIndex] = {
              ...updatedArtifacts[existingIndex],
              ...artifact,
            };
            return { userArtifacts: updatedArtifacts };
          }
          return { userArtifacts: [...existingArtifacts, artifact] };
        }),
    }),
    {
      name: 'zodic-user-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
