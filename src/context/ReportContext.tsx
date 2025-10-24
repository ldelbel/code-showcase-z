import { AstroReport } from '@/utils/convertToHTML';
import React, { createContext, ReactNode, useState } from 'react';

export interface ReportWithTitle {
  title: string;
  report: AstroReport | null | undefined | NonNullable<unknown>;
}

interface ReportContextValue {
  isModalOpen: boolean;
  selectedReports: ReportWithTitle[];
  currentReportIndex: number;
  openReport: (reports: ReportWithTitle[]) => void;
  closeReport: () => void;
  navigateReport: (direction: 'next' | 'prev') => void;
}

const ReportContext = createContext<ReportContextValue | undefined>(undefined);

export const ReportProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReports, setSelectedReports] = useState<ReportWithTitle[]>([]);
  const [currentReportIndex, setCurrentReportIndex] = useState(0);

  const openReport = (reports: ReportWithTitle[]) => {
    const validReports = reports.filter(
      (r) => r.report && Object.keys(r.report).length > 0
    );
    if (validReports.length === 0) {
      console.warn('No valid reports available for this item');
      return;
    }
    setSelectedReports(validReports);
    setCurrentReportIndex(0);
    setIsModalOpen(true);
  };

  const closeReport = () => {
    setIsModalOpen(false);
    setSelectedReports([]);
    setCurrentReportIndex(0);
  };

  const navigateReport = (direction: 'next' | 'prev') => {
    if (selectedReports.length <= 1) return;
    setCurrentReportIndex((prev) =>
      direction === 'next'
        ? (prev + 1) % selectedReports.length
        : (prev - 1 + selectedReports.length) % selectedReports.length
    );
  };

  const value = {
    isModalOpen,
    selectedReports,
    currentReportIndex,
    openReport,
    closeReport,
    navigateReport,
  };

  return (
    <ReportContext.Provider value={value}>{children}</ReportContext.Provider>
  );
};

export { ReportContext };
