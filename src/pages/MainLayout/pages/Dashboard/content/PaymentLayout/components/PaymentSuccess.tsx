import { useUserProducts } from '@/api/hooks';
import RedCross from '@/shared/Icons/RedCross';
import Successfull from '@/shared/Icons/Successfull';
import LoadingSpinner from '@/shared/LoadingSpinner';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoCarved from '/logo-carved.png';

const translations = {
  'pt-br': {
    backToMain: 'Voltar ao Início',
    backToPayment: 'Voltar ao Pagamento',
    successMessage: 'Pagamento realizado com sucesso!',
    processingPayment: 'Processando pagamento...',
    paymentFailed: 'Falha no pagamento. Tente novamente.',
  },
  'en-us': {
    backToMain: 'Back to Home',
    backToPayment: 'Back to Payment',
    successMessage: 'Payment completed successfully!',
    processingPayment: 'Processing payment...',
    paymentFailed: 'Payment failed. Please try again.',
  },
};

const t = translations[lang];

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userProducts, refetch } = useUserProducts();
  const { setUserProducts } = useUserStore();
  const [isProcessing, setIsProcessing] = useState(true);
  const [hasFailed, setHasFailed] = useState(false);
  const [initialProcessingSlugs, setInitialProcessingSlugs] = useState<
    string[]
  >([]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    let timeout: NodeJS.Timeout | undefined = undefined;

    const initializeProcessingSlugs = () => {
      const queryParams = new URLSearchParams(location.search);
      const productSlugsParam = queryParams.get('productSlugs');
      if (productSlugsParam) {
        const slugs = decodeURIComponent(productSlugsParam).split(',');
        console.log(
          '🔍 Initial processing_payment userProducts slugs from URL:',
          slugs
        );
        setInitialProcessingSlugs(slugs);
      } else {
        console.log('🔴 No productSlugs found in URL');
        setIsProcessing(false);
        setHasFailed(true);
      }
    };

    initializeProcessingSlugs();

    const checkPaymentStatus = async () => {
      try {
        await refetch();

        if (!userProducts || userProducts.length === 0) {
          console.log('🔴 No userProducts found during polling');
          setIsProcessing(false);
          setHasFailed(true);
          clearInterval(interval);
          return;
        }

        if (initialProcessingSlugs.length === 0) {
          console.log('🔴 No initial processing_payment userProducts to track');
          setIsProcessing(false);
          setHasFailed(true);
          clearInterval(interval);
          return;
        }

        const trackedProducts = userProducts.filter((up) =>
          initialProcessingSlugs.includes(up.productSlug)
        );

        console.log('🔍 Tracked userProducts:', trackedProducts);

        if (trackedProducts.length === 0) {
          console.log('🔴 No tracked userProducts found for given slugs');
          setIsProcessing(false);
          setHasFailed(true);
          clearInterval(interval);
          return;
        }

        const hasProcessing = trackedProducts.some(
          (up) => up.status === 'processing_payment'
        );
        const allUnlocked = trackedProducts.every(
          (up) => up.status === 'unlocked'
        );

        if (allUnlocked) {
          console.log(
            '✅ All tracked userProducts are unlocked:',
            trackedProducts
          );
          setUserProducts(userProducts);
          setIsProcessing(false);
          clearInterval(interval);

          setTimeout(() => {
            navigate('/main');
          }, 3000);
        } else if (!hasProcessing) {
          console.log(
            '🔴 No processing_payment items remain, but not all are unlocked:',
            trackedProducts
          );
          setUserProducts(userProducts);
          setIsProcessing(false);
          setHasFailed(true);
          clearInterval(interval);

          setTimeout(() => {
            navigate('/main/payment');
          }, 3000);
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
      }
    };

    const startPolling = async () => {
      await refetch();
      if (initialProcessingSlugs.length > 0) {
        interval = setInterval(checkPaymentStatus, 2000);

        timeout = setTimeout(() => {
          console.log('⏰ Polling timeout after 30 seconds');
          if (!hasFailed) {
            setIsProcessing(false);
            setHasFailed(true);
            setUserProducts(userProducts || []);
            navigate('/main/payment');
          }
          clearInterval(interval);
        }, 30000);
      }
    };

    startPolling();

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [userProducts, refetch, setUserProducts, navigate, location.search]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="fixed top-0 left-0 w-full h-[30px] bg-golden-gradient shadow-box flex items-center justify-center z-50">
        <div
          style={{ backgroundImage: `url(${logoCarved})` }}
          className="w-[50px] h-[12px] bg-cover bg-center"
        />
      </div>
      {isProcessing ? (
        <>
          <div className="w-[240px] h-[250px] bg-golden-gradient p-[3px] rounded-lg">
            <div className="w-full h-full bg-DarkGray flex items-center justify-center rounded-lg">
              <LoadingSpinner size={14} border={6} />
            </div>
          </div>
          <div className="w-full h-[80px] -mt-4 bg-golden-gradient py-[3px]">
            <div className="w-full h-full bg-[#D3A84C] flex items-center justify-center">
              <p className="text-white text-xl font-bold text-center">
                {t.processingPayment}
              </p>
            </div>
          </div>
        </>
      ) : hasFailed ? (
        <>
          <div className="w-[240px] h-[250px] bg-golden-gradient p-[3px] rounded-lg">
            <div className="w-full h-full bg-DarkGray flex items-center justify-center rounded-lg">
              <RedCross size={80} />
            </div>
          </div>
          <div className="w-full h-[80px] -mt-4 bg-golden-gradient py-[3px]">
            <div className="w-full h-full bg-customRed flex items-center justify-center px-2">
              <p className="text-white text-center text-2xl font-bold">
                {t.paymentFailed}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-[240px] h-[250px] bg-golden-gradient p-[3px] rounded-lg">
            <div className="w-full h-full bg-DarkGray flex items-center justify-center rounded-lg">
              <Successfull size={116} />
            </div>
          </div>
          <div className="w-full h-[80px] -mt-4 bg-golden-gradient py-[3px]">
            <div className="w-full h-full bg-LightGreen flex items-center justify-center">
              <p className="text-white text-xl font-bold text-center">
                {t.successMessage}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentSuccess;
