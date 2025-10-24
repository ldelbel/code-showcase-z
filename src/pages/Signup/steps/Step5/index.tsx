import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from './components/Auth';
import Registration from './components/Registration';

const Step5 = () => {
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const authTimer = setTimeout(() => {
      setShowAuth(true);
    }, 5000);

    const navigationTimer = setTimeout(() => {
      navigate('/main');
    }, 10000);

    return () => {
      clearTimeout(authTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      {showAuth ? <Auth /> : <Registration />}
    </div>
  );
};

export default Step5;
