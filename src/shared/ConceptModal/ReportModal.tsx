import { useReport } from '@/hooks/useReport';
import GradientText from '@/shared/GradientText';
import Modal from '@/shared/Modal';
import convertToHtml, { AstroReport } from '@/utils/convertToHTML';
import { DialogTitle } from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import ArrowInBoxIcon from '../Icons/ArrowInBox';
import ReturnButton from '../ReturnButton';

const ReportModal = () => {
  const {
    isModalOpen,
    selectedReports,
    currentReportIndex,
    closeReport,
    navigateReport,
  } = useReport();

  if (!selectedReports.length) return null;

  const currentReport = selectedReports[currentReportIndex];
  const { title } = currentReport;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  const handleNavigate = () => {
    navigateReport(selectedReports.length > 1 ? 'next' : 'prev');
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeReport}>
          <motion.div
            className="space-y-3 -m-3 z-50 report-modal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <DialogTitle className="flex flex-col items-center">
              <GradientText text={title} fontSize="26px" lineHeight="30px" />
              <p className="font-bold font-rajdhani text-slate-300">
                Leitura Astrológica
              </p>
            </DialogTitle>
            <motion.div
              className={`max-w-prose mx-auto p-4 ${
                title.length > 22 ? 'h-[67%]' : 'h-[70%]'
              } bg-[#171717] rounded-lg shadow-inner scrollbar-thin scrollbar-thumb-oldgoldlight scrollbar-track-[#171717] scrollbar-thumb-rounded-full flex flex-col items-center py-4`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              key={currentReportIndex}
              style={{
                boxShadow: `
                  0px -4px 5px 2px rgba(0, 0, 0, 0.5) inset,
                  0px 4px 5px 2px rgba(0, 0, 0, 0.5) inset
                `,
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
            >
              {convertToHtml(currentReport.report as AstroReport)}{' '}
              {/* Cast to AstroReport, assuming valid reports are filtered */}
            </motion.div>

            {selectedReports.length > 1 && (
              <div
                className={`flex justify-${
                  currentReportIndex === 0 ? 'end' : 'start'
                } items-center gap-1`}
                onClick={handleNavigate}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-center gap-1 ${
                    currentReportIndex === 1 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <GradientText
                    text={
                      selectedReports[currentReportIndex === 0 ? 1 : 0].title
                    }
                    fontSize="18px"
                    lineHeight="20px"
                    small
                  />
                  <ArrowInBoxIcon
                    className={`drop-shadow-sm cursor-pointer ${
                      currentReportIndex === 1 ? 'rotate-180' : ''
                    }`}
                    size={30}
                  />
                </motion.div>
              </div>
            )}

            <div className="flex justify-center pt-4">
              <ReturnButton onClick={closeReport} />
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default ReportModal;
