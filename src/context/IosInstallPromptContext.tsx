import { createContext, ReactNode, useState } from 'react';

type IosInstallPromptContextType = {
  isVisible: boolean;
  showPrompt: () => void;
  hidePrompt: () => void;
};

const IosInstallPromptContext = createContext<
  IosInstallPromptContextType | undefined
>(undefined);

export const IosInstallPromptProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showPrompt = () => setIsVisible(true);
  const hidePrompt = () => {
    setIsVisible(false);
    localStorage.setItem('iosInstallPromptDismissed', 'true');
  };

  return (
    <IosInstallPromptContext.Provider
      value={{ isVisible, showPrompt, hidePrompt }}
    >
      {children}
    </IosInstallPromptContext.Provider>
  );
};

export { IosInstallPromptContext };
