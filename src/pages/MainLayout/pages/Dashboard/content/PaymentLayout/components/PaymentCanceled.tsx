import { useNavigate } from "react-router-dom";
import { lang } from "@/utils/lang";

const translations = {
  'pt-br': {
    backToPayment: 'Voltar ao Pagamento',
    canceledMessage: 'Pagamento cancelado.',
  },
  'en-us': {
    backToPayment: 'Back to Payment',
    canceledMessage: 'Payment canceled.',
  },
};

const t = translations[lang];

const PaymentCanceled = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        {t.canceledMessage}
      </h1>
      <button
        onClick={() => navigate('/main/payment')}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        {t.backToPayment}
      </button>
    </div>
  );
};

export default PaymentCanceled;
