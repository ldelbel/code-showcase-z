import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const returnedState = urlParams.get('state');

      console.log('🔍 URL Parameters:', { code, returnedState });

      
      if (code && returnedState) {
        try {
          const response = await fetch(
            `/oauth/callback?code=${encodeURIComponent(
              code
            )}&state=${encodeURIComponent(returnedState)}`,
            {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
            }
          );

          const result = await response.json() as any;
          if (response.ok && result.redirect_url) {
            console.log(
              '✅ Received redirect URL from backend:',
              result.redirect_url
            );
            window.location.href = result.redirect_url; 
          } else {
            console.error('❌ Failed to get redirect URL:', result.error);
            alert(
              `Error: ${result.error || 'Failed to process OAuth callback'}`
            );
            navigate('/login');
          }
        } catch (err) {
          console.error(
            '❌ Error fetching redirect URL:',
            (err as Error).message
          );
          alert(`Error: ${(err as Error).message}`);
          navigate('/login');
        }
        return;
      }

      
      const storedState = localStorage.getItem('oauth_state');
      const codeVerifier = localStorage.getItem('oauth_codeVerifier');
      const provider = localStorage.getItem('oauth_provider');

      console.log('🔍 Local Storage Values:', {
        storedState,
        codeVerifier,
        provider,
      });

      if (!storedState || !codeVerifier || !provider) {
        console.error('❌ Missing critical OAuth parameters from localStorage');
        alert('Missing OAuth parameters. Please try again.');
        navigate('/login');
        return;
      }

      if (storedState !== returnedState) {
        console.error('❌ State mismatch! Possible CSRF attack.');
        alert('Invalid OAuth state. Please try again.');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('/oauth/callback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code,
            returnedState,
            storedState,
            codeVerifier,
            provider,
          }),
        });

        const result = await response.json() as any;
        if (response.ok && result.redirect_url) {
          console.log(
            '✅ OAuth callback successful, redirecting to:',
            result.redirect_url
          );
          window.location.href = result.redirect_url; 
          localStorage.removeItem('oauth_state');
          localStorage.removeItem('oauth_codeVerifier');
          localStorage.removeItem('oauth_provider');
        } else {
          console.error('❌ OAuth callback failed:', result.error);
          alert(`Authentication failed: ${result.error}`);
          navigate('/login');
        }
      } catch (err) {
        console.error(
          '❌ Error during OAuth callback:',
          (err as Error).message
        );
        alert(`Error: ${(err as Error).message}`);
        navigate('/login');
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-dvh flex items-center justify-center">
      <p>Processing OAuth callback... Please wait.</p>
    </div>
  );
};

export default Callback;
