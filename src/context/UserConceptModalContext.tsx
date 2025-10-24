import { Concept } from '@zodic/shared/types';
import { createContext, ReactNode, useState } from 'react';
import UserConceptModal from '@/shared/ConceptModal/UserConceptModal';
interface UserConceptModalContextType {
  openModal: (conceptSlug: Concept) => void;
  closeModal: () => void;
}

const UserConceptModalContext = createContext<
  UserConceptModalContextType | undefined
>(undefined);

export const UserConceptModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [conceptSlug, setConceptSlug] = useState<Concept | null>(null);

  const openModal = (slug: Concept) => {
    setConceptSlug(slug);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setConceptSlug(null);
  };

  return (
    <UserConceptModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {conceptSlug && (
        <UserConceptModal
          isOpen={isOpen}
          onClose={closeModal}
          conceptSlug={conceptSlug}
        />
      )}
    </UserConceptModalContext.Provider>
  );
};

export { UserConceptModalContext };
