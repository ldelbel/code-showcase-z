import { ReportContext } from '@/context/ReportContext';
import { useContext } from 'react';

export const useReport = () => {
  const context = useContext(ReportContext);
  if (context === undefined) {
    throw new Error('useReport must be used within a ReportProvider');
  }
  return context;
};
