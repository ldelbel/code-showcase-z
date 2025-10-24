import Copy from "@/assets/copy.svg";
import Crown from "@/assets/Crown2.png";
import DownloadIcon from "@/shared/Icons/DownloadIcon";
import ShareIcon from "@/shared/Icons/ShareIcon";
import { useState } from "react";

const Share = () => {
  const [showCopied, setShowCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const description = "This Crown represents the dynamic blend of Scorpio's depth, Aries's courage, and Virgo's precision. It embodies your ability to transform challenges into opportunities, take bold actions, and execute plans with methodical focus and clarity.";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(description);
      setShowCopied(true);
      setIsVisible(true);
      setTimeout(() => {
        setShowCopied(false);
        setTimeout(() => setIsVisible(false), 700);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-6">
      <div className="flex gap-2 justify-center items-center">
        <div
          className="w-[178px] h-[178px] bg-golden-gradient rounded-md relative"
          style={{
            boxShadow: `
            3px 6px 20px 4px rgba(255, 206, 81, 0.5),
            -2px -4px 20px 4px rgba(255, 206, 81, 0.5),
            2px 2px 4px 1px rgba(255, 236, 148, 0.25),
            -2px 2px 4px 1px rgba(255, 236, 148, 0.25),
            2px -2px 4px 1px rgba(255, 236, 148, 0.25),
            -2px -2px 4px 1px rgba(255, 236, 148, 0.25)
          `
          }}
        >
          <div className="w-[176px] h-[176px] bg-DarkGray rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[174px] h-[174px] bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: `url(${Crown})` }}></div>
          </div>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-[41px] h-[25px] bg-golden-gradient rounded-md flex justify-center items-center"
              style={{
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)'
              }}
            >
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="bg-golden-gradient w-[138px] h-[218px] rounded-md relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <h2 className="text-oldgoldlight" style={{ fontSize: '16px', fontFamily: 'Rajdhani' }}>Downloads</h2>
          </div>
          <div className="w-[136px] h-[216px] rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col" style={{
            background: 'radial-gradient(99.16% 99.01% at 90.32% 35.04%, rgba(70, 144, 213, 0) 0%, rgba(8, 48, 75, 0.045) 77.08%, rgba(26, 94, 109, 0.2) 100%)',
            backgroundColor: '#111117',
          }}>
            <div className="h-[100px] mx-4 mt-4 mb-2 flex  justify-between">
              <div className="w-[40px] flex flex-col items-center gap-1">
                <p className="" style={{ fontSize: '8px', fontFamily: 'Roboto' }}>TIKTOK/IG REELS</p>
                <div className="w-[28px] h-[59px] bg-customGray rounded-sm" />
                <p className="text-center" style={{ fontSize: '8px', fontFamily: 'Roboto' }}>830x1480</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[41px] h-[25px] bg-golden-gradient rounded-md flex justify-center items-center" style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)'
                }}>
                  <DownloadIcon />
                </div>
              </div>
            </div>
            <div className="h-[70px] m-4 flex  justify-between">
              <div className="w-[40px] flex flex-col items-center gap-1">
                <p className="" style={{ fontSize: '8px', fontFamily: 'Roboto' }}>IG FEED</p>
                <div className="w-[40px] h-[40px] bg-customGray rounded-sm" />
                <p className="text-center" style={{ fontSize: '8px', fontFamily: 'Roboto' }}>990x1240</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[41px] h-[25px] bg-golden-gradient rounded-md flex justify-center items-center" style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)'
                }}>
                  <DownloadIcon  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-12 bg-DarkGray2 rounded-md px-3 py-4 relative"
        style={{
          boxShadow: `
            inset 0px -3px 4px rgba(0, 0, 0, 0.5),
            inset 0px 3px 5px 1px rgba(0, 0, 0, 0.25)
          `
        }}
      >
        <div className="absolute -top-5 left-2">
          <h2 className="text-oldgoldlight text-lg font-semibold">Copy the description</h2>
        </div>
        <div
          className="w-[40px] h-[40px] bg-DarkGray2 rounded-md bg-cover bg-center cursor-pointer absolute -top-6 right-1 flex justify-center items-center"
          style={{
            boxShadow: `
              -1px -1px 6px rgba(255, 255, 255, 0.4),
              3px 3px 10px rgba(0, 0, 0, 1)
            `
          }}
        >
          <div className="relative">
            <div 
              className="w-[24px] h-[24px] bg-cover bg-center cursor-pointer" 
              style={{ backgroundImage: `url(${Copy})` }}
              onClick={handleCopy}
            />
            <div 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-whitesmoke px-2 py-1 rounded text-sm"
              style={{ 
                transition: 'opacity 700ms ease-in-out',
                opacity: showCopied ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: 'none'
              }}
            >
              Copied!
            </div>
          </div>
        </div>
        <p className="text-sm text-whitesmoke text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Share;