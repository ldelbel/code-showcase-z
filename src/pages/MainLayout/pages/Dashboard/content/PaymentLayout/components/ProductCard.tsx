import AddIcon from './Icons/AddIcon';
import RemoveIcon from './Icons/RemoveIcon';
import models from '/banner-artifacts.png';
import conceptsBanner from '/concepts-banner.png';
import premiumTabs from '/premium-tabs.png';

interface PriceCardProps {
  title: string;
  price: number;
  slug?: string;
  isSelected?: boolean;
  isPurchased?: boolean;
  onClick?: () => void;
}

const ProductCard = ({
  title,
  price,
  slug,
  isSelected = false,
  isPurchased = false,
  onClick,
}: PriceCardProps) => {
  return (
    <div
      className={`w-[150px] h-[180px] sm:w-[160px] sm:h-[200px] md:h-[220px] ${
        isPurchased ? 'bg-LightGreen' : 'bg-oldgolddark2'
      } rounded-[12px] flex flex-col items-center relative shadow-box-3`}
    >
      <div className="font-bold text-white md:text-lg">
        {isPurchased ? (
          <span>Adquirido</span>
        ) : (
          <>
            <span>R$ </span>
            <span>{price.toFixed(2).replace('.', ',')}</span>
          </>
        )}
      </div>
      <div
        className={`w-full h-[170px] sm:h-[190px] md:h-[210px] p-[2px]  rounded-lg relative ${
          isPurchased
            ? 'bg-[#757575] cursor-not-allowed'
            : 'bg-golden-gradient cursor-pointer'
        }`}
        onClick={isPurchased ? undefined : onClick}
      >
        <div className="w-full h-full">
          <div
            className={`w-full h-full flex flex-col items-center ${
              isPurchased ? 'bg-customGray4' : 'bg-whitesmoke'
            } rounded-lg`}
          >
            <div className="h-[35%] py-1 text-center flex items-center justify-center">
              <h3
                className={` text-sm sm:text-base font-bold leading-4 sm:leading-4 ${
                  isPurchased ? 'text-[#757575]' : 'text-oldgolddark'
                }`}
              >
                {title}
              </h3>
            </div>

            <div
              className={`w-full h-[60%] sm:h-[50%] ${
                isPurchased ? 'bg-customGray2' : 'bg-golden-gradient'
              } py-[1px]`}
            >
              <div className="w-full h-full bg-DarkGray relative">
                {slug === 'concepts' && (
                  <div
                    className={`w-full h-full bg-cover bg-center ${
                      isPurchased ? 'filter grayscale' : ''
                    }`}
                    style={{ backgroundImage: `url(${conceptsBanner})` }}
                  />
                )}
                {slug === 'premium-astrology-reports' && (
                  <div
                    className={`w-full h-full bg-contain bg-no-repeat bg-center ${
                      isPurchased ? 'filter grayscale' : ''
                    }`}
                    style={{ backgroundImage: `url(${premiumTabs})` }}
                  />
                )}
                {slug === 'cosmic-mirror' && (
                  <div
                    className={`w-full h-full bg-cover bg-center ${
                      isPurchased ? 'filter grayscale' : ''
                    }`}
                    style={{ backgroundImage: `url(${models})` }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isPurchased && (
        <div
          className={`absolute w-7 h-7 md:w-9 md:h-9 -bottom-10 md:-bottom-12 ${
            isSelected ? 'bg-customRed' : 'bg-LightGreen'
          } rounded-md flex items-center justify-center shadow-box-3 cursor-pointer text-[40px] text-whitesmoke leading-none`}
          onClick={onClick}
        >
          {isSelected ? <RemoveIcon /> : <AddIcon />}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
