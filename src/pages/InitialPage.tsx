import { checkSession, Session } from '@/api';
import { useIosInstallPrompt } from '@/hooks/useIosInstallPrompt';
import { useIsIOS } from '@/hooks/useIsIOS';
import { useShouldShowIosPrompt } from '@/hooks/useShouldShowIosPrompt';
import GoogleIcon from '@/shared/Icons/GoogleIcon';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInitiateOAuth } from '../api/hooks/auth';

const InitialPage = () => {
  const navigate = useNavigate();
  const isIOS = useIsIOS();
  const { mutate: initiateOAuth } = useInitiateOAuth();
  const shouldShowIosPrompt = useShouldShowIosPrompt();
  const { showPrompt } = useIosInstallPrompt();

  const {
    data: session,
    isLoading: sessionLoading,
    error: sessionError,
  } = useQuery<Session | null, Error>({
    queryKey: ['session'],
    queryFn: checkSession,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const handleOAuth = (provider: string) => {
    localStorage.setItem('provider', provider);
    initiateOAuth(provider, {
      onSuccess: (data) => {
        console.log('🔍 OAuth initiation response:', data);
        if (data.redirectUrl) {
          window.location.href = data.redirectUrl;
        } else {
          console.error('❌ Missing redirect URL:', data);
          throw new Error('OAuth initiation failed: Missing redirect URL');
        }
      },
      onError: (err) => alert(`OAuth Error: ${(err as Error).message}`),
    });
  };

  useEffect(() => {
    if (sessionLoading) return;

    if (sessionError) {
      console.error('Session check failed:', sessionError.message);
      return;
    }

    if (!session) {
      console.log('No session, navigating to /login');
    } else {
      navigate('/main');
    }
  }, [session, sessionLoading, sessionError, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_#1e1e1e_75%,_#111_100%)]">
      {/* Top image container with conditional transform-gpu */}
      <div
        className={`-translate-y-12 overflow-visible ${
          isIOS ? 'transform-gpu' : ''
        }`}
      >
        <img
          src="/zodic-initial-image.png"
          alt="Initial Page Background"
          loading="eager"
          decoding="async"
          className={`w-full h-auto drop-shadow-[5px_18px_24px_rgba(0,0,0,0.9)] ${
            isIOS ? 'transform-gpu' : ''
          }`}
        />
      </div>

      {/* Button area */}
      <div className="flex flex-1 items-center justify-center relative -translate-y-14">
        <button
          onClick={() => handleOAuth('google')}
          aria-label="Login with Google"
          className="relative text-lg px-4 flex items-center gap-2 bg-golden-gradient-4 rounded-md shadow-[_-4px_-4px_10px_rgba(255,255,255,0.4),_8px_8px_8px_rgba(0,0,0,0.7)]"
        >
          <GoogleIcon size={30} color="#55472a" />
          <span className="font-inter font-bold text-xl text-customBrown">
            Entrar com Google
          </span>
        </button>
      </div>
      {shouldShowIosPrompt && (
        <div className="fixed bottom-[30%] right-0 z-20 rounded-l-full pl-[1px] pt-[1px] pb-[1px] bg-golden-gradient golden-glow pulse-glow">
          <button
            onClick={() => showPrompt()}
            className="bg-DarkGrey text-whitesmoke font-semibold text-sm px-2 py-2 rounded-l-full shadow-lg hover:brightness-105 transition-all"
          >
            Instalar Zodic
          </button>
        </div>
      )}

      {/* Copyright */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-customGray4 opacity-60 pointer-events-none">
        © {new Date().getFullYear()} Zodic. Todos os direitos reservados.
      </div>
    </div>
  );
};

export default InitialPage;