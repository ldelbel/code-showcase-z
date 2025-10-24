import { UserConceptModalContext } from '@/context/UserConceptModalContext';
import { useContext } from 'react';

export const useUserConceptModal = () => {
  const context = useContext(UserConceptModalContext);
  if (!context) {
    throw new Error(
      'useUserConceptModal must be used within a UserConceptModalProvider'
    );
  }
  return context;
};
