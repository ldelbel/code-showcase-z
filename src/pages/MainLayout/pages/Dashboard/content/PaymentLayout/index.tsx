import { useUserProducts } from '@/api/hooks';
import { useCheckout } from '@/api/hooks/payment';
import { CheckoutPayload } from '@/api/payment';
import GradientText from '@/shared/GradientText';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import { getProductLabel } from '@/utils/ProductLabels';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CreditsHeader } from './components/CreditsHeader';
import ProductCard from './components/ProductCard';
import './styles.css';
import logoCarved from '/logo-carved.png';

const translations = {
  'pt-br': {
    acquireProducts: 'Desbloqueie sua Experiência',
    pay: 'Ir para pagamento',
    backToMain: 'Voltar ao Início',
    backToPayment: 'Voltar ao Pagamento',
    successMessage: 'Pagamento realizado com sucesso!',
    canceledMessage: 'Pagamento cancelado.',
    expiredMessage: 'Pagamento expirou.',
    processingPayment: 'Processando pagamento...',
    paymentFailed: 'Falha no pagamento. Tente novamente.',
  },
  'en-us': {
    acquireProducts: 'Unlock your Experience',
    pay: 'Go to payment',
    backToMain: 'Back to Home',
    backToPayment: 'Back to Payment',
    successMessage: 'Payment completed successfully!',
    canceledMessage: 'Payment canceled.',
    expiredMessage: 'Payment expired.',
    processingPayment: 'Processing payment...',
    paymentFailed: 'Payment failed. Please try again.',
  },
};

const t = translations[lang];

interface Product {
  slug: string;
  price: number;
}

const Payment = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState<
    Array<{ slug: string; title: string; price: number; isSelected: boolean }>
  >([]);
  const { products, userProducts } = useUserStore();

  const { mutate: checkout, isPending: isLoading } = useCheckout();
  const { isLoading: userProductsLoading, error: userProductsError } =
    useUserProducts();

  const handleToggleProduct = (product: Product) => {
    const productLabel = getProductLabel(product.slug, lang);
    const isPurchased = userProducts?.some(
      (up) => up.productSlug === product.slug && up.status === 'unlocked'
    );

    if (isPurchased) return;

    setSelectedItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.slug === product.slug
      );
      if (existingIndex >= 0) {
        return prev.filter((_, i) => i !== existingIndex);
      } else {
        return [
          ...prev,
          {
            slug: product.slug,
            title: productLabel.name,
            price: product.price,
            isSelected: true,
          },
        ];
      }
    });
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) return;

    const payload: CheckoutPayload = {
      items: selectedItems.map((item) => ({
        productSlug: item.slug,
      })),
    };

    checkout(payload, {
      onSuccess: (response) => {
        if (response.checkoutUrl) {
          window.location.href = response.checkoutUrl;
        } else {
          console.error('No checkout URL in response');
        }
      },
      onError: (error) => {
        console.error('Checkout failed:', error.message);
      },
    });
  };

  if (userProductsLoading) return <div>Loading...</div>;
  if (userProductsError)
    return <div>Error loading user products: {userProductsError.message}</div>;

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-[30px] bg-golden-gradient shadow-box flex items-center justify-center">
        <div
          style={{ backgroundImage: `url(${logoCarved})` }}
          className="w-[50px] h-[12px] bg-cover bg-center"
        />
      </div>
      <div className="w-full">
        <CreditsHeader title={t.acquireProducts} />
      </div>
      <div className="w-full h-[calc(78dvh-100px)] bg-gray-gradient flex flex-col justify-around relative shadow-[0px_5px_10px_0px_#00000080_inset,0px_-3px_6px_0px_#00000040_inset]">
        <div className="w-full flex justify-center items-center overflow-hidden">
          <div className="w-full pb-12 md:pb-14 relative">
            <div className="absolute w-full h-[95px] top-[45%] -translate-y-1/2 shadow-[0px_0px_15px_0px_#00000060_inset] rounded-lg" />
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
              {products.map((product, index) => {
                const productLabel = getProductLabel(product.slug, lang);
                const isPurchased = userProducts?.some(
                  (up) =>
                    up.productSlug === product.slug && up.status === 'unlocked'
                );
                const isSelected = selectedItems.some(
                  (item) => item.slug === product.slug
                );

                return (
                  <SwiperSlide key={index} className="py-12 md:py-14">
                    <div
                      className={`transform transition-transform duration-300 ${
                        selectedIndex === index ? 'scale-100' : 'scale-90'
                      }`}
                    >
                      <ProductCard
                        title={productLabel.name}
                        price={product.price}
                        slug={product.slug}
                        isSelected={isSelected}
                        isPurchased={isPurchased}
                        onClick={() =>
                          !isPurchased && handleToggleProduct(product)
                        }
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="w-full h-[150px] flex flex-col items-center relative">
          <div className="w-[320px] h-[46px] md:h-[56px] bg-white rounded-[60%] shadow-box absolute top-8" />
          <div
            className={`w-full h-[60px] absolute flex justify-center items-center ${
              selectedItems.length === 2 ? 'gap-1' : ''
            }`}
          >
            {selectedItems.map((item, index, array) => {
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
                  className={`w-[100px] h-[70px] md:w-[110px] md:h-[90px] p-1 bg-white rounded-md shadow-box ${
                    isMiddle ? 'relative z-10 -mx-2 -mt-3' : ''
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

          <div className="absolute bottom-3 md:bottom-2 left-1/2 -translate-x-1/2">
            <GradientText
              text={`${selectedItems.length} ${
                selectedItems.length === 1 ? 'Item' : 'Itens'
              }`}
              fontSize="20px"
              fontWeight="900"
            />
          </div>
        </div>

        <div className="bg-golden-gradient min-w-[160px] p-[2px] absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-md">
          <div className="bg-DarkGray py-[2px] px-2 flex gap-1 items-center rounded-md">
            <p className="text-white font-medium">Total:</p>
            <span className="text-LightGreen text-left font-medium text-xl">
              R$ {total.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100dvh-78dvh)] bg-golden-gradient pt-[2px]">
        <div className="w-full h-full bg-white flex items-center justify-center pb-[53px]">
          <button
            onClick={handleCheckout}
            disabled={selectedItems.length === 0 || isLoading}
            className="bg-LightGreen py-1 px-4 rounded-md text-white font-bold text-xl shadow-box disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? t.processingPayment : t.pay}
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export { Payment, PaymentLayout };
