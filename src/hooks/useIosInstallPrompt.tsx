import { IosInstallPromptContext } from "@/context/IosInstallPromptContext";
import { useContext } from "react";

export const useIosInstallPrompt = () => {
  const context = useContext(IosInstallPromptContext);
  if (!context) {
    throw new Error('useIosInstallPrompt must be used within IosInstallPromptProvider');
  }
  return context;
};