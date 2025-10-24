import { Dialog, DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import CloseButton from '../CloseButton';
import './index.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  hasGlow?: boolean;
  startGlow?: boolean;
  fadeOutGlow?: boolean;
  width?: number;
  hasCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  hasGlow,
  startGlow = false,
  fadeOutGlow = false,
  width = 90,
  hasCloseButton = true,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
      <DialogContent
        className={`text-white w-[${width}vw] fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-transparent rounded-[20px] ${
          hasGlow ? 'golden-glow' : 'shadow-[0px_4px_4px_0px_#00000040]'
        }`}
        style={{
          backgroundImage:
            'linear-gradient(90deg, #a47a1e 3%, #d3a84c 19%, #ffec94 38%, #e6be69 58%, #ffd87c 80%, #b58f3e 91%, #956d13 100%)',
          backgroundClip: 'border-box',
          padding: '1px',
        }}
        aria-describedby="modal-description"
      >
        {hasCloseButton && (
          <button
            onClick={onClose}
            className="absolute -top-2 -right-3 cursor-pointer hover:opacity-95 transition-opacity p-0 m-0 rounded-full bg-transparent line-height-0 focus:outline-none border-none z-[50]"
          >
            <CloseButton size={28} />
          </button>
        )}
        <div
          className={`overflow-hidden relative rounded-[20px] ${
            startGlow ? 'golden-shine-delayed' : ''
          }`}
        >
          {startGlow && (
            <div
              className={`absolute top-[51%] left-1/2 w-[500px] h-[500px] bg-gradient-radial from-white/80 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-glow z-[20] pointer-events-none transition-all duration-1000 ${
                fadeOutGlow ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
              }`}
            ></div>
          )}
          <div
            className="h-full w-full rounded-[20px] relative hover:outline-none"
            style={{
              background:
                'radial-gradient(90.16% 143.01% at 55.32% 121.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)',
              backgroundColor: '#111117',
            }}
          >
            <div className="rounded-[20px] p-6 relative hover:outline-none modal-bg">
              <div className="relative z-[2]">
                <div id="modal-description" className="sr-only">
                  Modal content
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
