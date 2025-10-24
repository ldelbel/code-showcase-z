import { useNavigate } from "react-router-dom";
import { lang } from "@/utils/lang";

const translations = {
  'pt-br': {
    expiredMessage: 'Pagamento expirado',
    backToPayment: 'Voltar ao Pagamento',
  },
  'en-us': {
    expiredMessage: 'Payment expired',
    backToPayment: 'Back to Payment',
  },
};

const t = translations[lang];

const PaymentExpired = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">
        {t.expiredMessage}
      </h1>
      <button
        onClick={() => navigate('/main/payment')}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
      >
        {t.backToPayment}
      </button>
    </div>
  );
};

export default PaymentExpired;
