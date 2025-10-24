import GradientText from '@/shared/GradientText';
import { lang } from '@/utils/lang';
import { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CreditsHeader } from '../PaymentLayout/components/CreditsHeader';
import ProductCard from '../PaymentLayout/components/ProductCard';
import logoCarved from '/logo-carved.png';

const translations = {
  'pt-br': {
    title: 'Desbloqueie sua Experiência',
    currentBalance: 'Saldo Atual:',
    value: 'Valor:',
    pay: 'Pagar',
    packages: {
      astralMap: 'Seção Premium do Mapa Astral',
      cosmicMirror: 'Espelho Cósmico',
      concepts: 'Conceitos',
    },
  },
  'en-us': {
    title: 'Unlock Your Experience',
    currentBalance: 'Current Balance:',
    value: 'Value:',
    pay: 'Pay',
    packages: {
      astralMap: 'Premium Astral Map Section',
      cosmicMirror: 'Cosmic Mirror',
      concepts: 'Concepts',
    },
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

interface PriceCardItem {
  title: string;
  price: number;
  isSelected: boolean;
}

const Credits = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState<PriceCardItem[]>([
    { title: t.packages.astralMap, price: 24.9, isSelected: false },
    { title: t.packages.cosmicMirror, price: 24.9, isSelected: false },
    { title: t.packages.concepts, price: 24.9, isSelected: false },
  ]);

  const handleItemToggle = (index: number) => {
    setSelectedItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const totalPrice = selectedItems
    .filter((item) => item.isSelected)
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-[30px] bg-golden-gradient shadow-box flex items-center justify-center">
        <div
          style={{ backgroundImage: `url(${logoCarved})` }}
          className="w-[50px] h-[12px] bg-cover bg-center"
        />
      </div>
      <div className="w-full">
        <CreditsHeader title={t.title} />
      </div>
      <div className="w-full h-[calc(75dvh-100px)] bg-gray-gradient flex flex-col justify-around relative">
        <div className="w-full flex justify-center items-center overflow-hidden">
          <div className="w-full px-1 pb-12 md:pb-14 relative">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                390: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
              }}
              centeredSlides={true}
              spaceBetween={10}
              initialSlide={1}
              onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
              className="mySwiper"
            >
              {selectedItems.map((card, index) => (
                <SwiperSlide key={index} className="py-12 md:py-14">
                  <div
                    className={`transform transition-transform duration-300 ${
                      selectedIndex === index ? 'scale-100' : 'scale-90'
                    }`}
                  >
                    <ProductCard
                      {...card}
                      onClick={() => handleItemToggle(index)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-full h-[150px] flex flex-col items-center relative">
          <div className="w-[320px] h-[46px] md2:h-[56px] bg-white rounded-[60%] shadow-box absolute top-12" />
          <div
            className={`w-full h-[90px] absolute flex justify-center items-center ${
              selectedItems.filter((item) => item.isSelected).length === 2
                ? 'gap-1'
                : ''
            }`}
          >
            {selectedItems
              .filter((item) => item.isSelected)
              .map((item, index, array) => {
                const isMiddle = array.length === 3 && index === 1;
                const isLeft =
                  (array.length === 3 && index === 0) ||
                  (array.length === 2 && index === 0);
                const isRight =
                  (array.length === 3 && index === 2) ||
                  (array.length === 2 && index === 1);
                return (
                  <div
                    key={index}
                    className={`w-[100px] h-[70px] md2:w-[110px] md2:h-[90px] p-1 bg-white rounded-md shadow-box ${
                      isMiddle ? 'relative z-10 -mx-2' : ''
                    } ${isLeft ? 'rotate-[-2deg]' : ''} ${
                      isRight ? 'rotate-[2deg]' : ''
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-golden-gradient rounded-md p-2">
                      <p
                        className={`text-customBrown font-bold ${
                          item.title.length > 15
                            ? 'text-xs md:text-sm'
                            : 'text-sm md:text-base'
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="absolute bottom-2 md2:bottom-0 left-1/2 -translate-x-1/2">
            <GradientText
              text={`${
                selectedItems.filter((item) => item.isSelected).length
              } Itens`}
              fontSize="20px"
              fontWeight="900"
            />
          </div>
        </div>

        <div className="bg-golden-gradient p-[2px] absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-md">
          <div className="bg-DarkGray py-[2px] px-2 flex gap-1 items-center justify-between rounded-md">
            <p className="text-white font-medium">Total:</p>
            <span className="text-LightGreen font-medium text-xl">
              R$ {totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100dvh-75dvh)] bg-white flex items-center justify-center pb-[53px]">
        <div className="bg-LightGreen py-2 px-4 rounded-md text-white font-bold text-xl shadow-box">
          Ir para pagamento
        </div>
      </div>
    </div>
  );
};

export default Credits;
