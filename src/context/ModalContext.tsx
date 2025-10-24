import { createContext, ReactNode, useState } from 'react';

interface ModalState {
  userArtifactModal: {
    isOpen: boolean;
    artifactName: string | null;
  };
  commercialArtifactModal: {
    isOpen: boolean;
    hasGlow: boolean;
  };
}

interface ModalContextType {
  modalState: ModalState;
  openUserArtifactModal: (artifactName: string) => void;
  closeUserArtifactModal: () => void;
  openCommercialArtifactModal: (hasGlow: boolean) => void;
  closeCommercialArtifactModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState>({
    userArtifactModal: {
      isOpen: false,
      artifactName: null,
    },
    commercialArtifactModal: {
      isOpen: false,
      hasGlow: false,
    },
  });

  const openUserArtifactModal = (artifactName: string) => {
    setModalState((prev) => ({
      ...prev,
      userArtifactModal: { isOpen: true, artifactName },
    }));
  };

  const closeUserArtifactModal = () => {
    setModalState((prev) => ({
      ...prev,
      userArtifactModal: { isOpen: false, artifactName: null },
    }));
  };

  const openCommercialArtifactModal = (hasGlow: boolean) => {
    setModalState((prev) => ({
      ...prev,
      commercialArtifactModal: { isOpen: true, hasGlow },
    }));
  };

  const closeCommercialArtifactModal = () => {
    setModalState((prev) => ({
      ...prev,
      commercialArtifactModal: { isOpen: false, hasGlow: false },
    }));
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        openUserArtifactModal,
        closeUserArtifactModal,
        openCommercialArtifactModal,
        closeCommercialArtifactModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext };
