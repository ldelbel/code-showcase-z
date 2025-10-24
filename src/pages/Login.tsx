import Footer from '@/shared/Footer';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useInitiateOAuth, useLoginUser } from '../api/hooks/auth';
import { loginSchema } from '../form/schemas';
import GoldenButton from '../shared/Button';
import GradientText from '../shared/GradientText';
import InputField from '../shared/InputField';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { mutate: login, isPending: isLoggingIn } = useLoginUser();
  const { mutate: initiateOAuth } = useInitiateOAuth();

  const handleLogin = (data: { email: string; password: string }) => {
    login(data, {
      onSuccess: (response: { success: boolean }) => {
        if (response.success) {
          console.log('✅ Login successful, navigating to /main');
          navigate('/main');
        } else {
          alert('Login successful, but no session established.');
        }
      },
      onError: (err) => alert(`Error: ${(err as Error).message}`),
    });
  };

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

  return (
    <div className="min-h-dvh flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="login-container max-w-sm px-4">
          {/* ✅ Title */}
          <div className="flex flex-col items-center mb-14 gap-5">
            <GradientText text={'Login'} />
            <GradientText
              text={'Enter your email and password to login'}
              fontSize="16px"
              fontWeight={'400'}
            />
          </div>

          {/* ✅ Email Login Form */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col items-center gap-6"
          >
            <InputField
              label="Email"
              type="email"
              error={errors.email?.message}
              register={register('email')}
            />
            <div>
              <InputField
                label="Password"
                type="password"
                error={errors.password?.message}
                register={register('password')}
              />
              <Link to="/forgot-password">
                <p className="text-oldgoldbrown text-sm mt-2 text-right">
                  Forgot your password?
                </p>
              </Link>
            </div>

            <div className="mt-5">
              <GoldenButton
                base="golden"
                variant="main"
                text="LOGIN"
                type="submit"
                disabled={isLoggingIn}
              />
            </div>
          </form>

          {/* ✅ OAuth Login Section */}
          <div className="flex flex-col items-center gap-3 mt-10">
            <p className="text-oldgoldbrown text-center">or login with</p>

            <div className="flex gap-3">
              <button
                onClick={() => handleOAuth('google')}
                aria-label="Login with Google"
                className="relative social-media-container bg-transparent p-0"
              >
                <img src="google-button.png" alt="Google Login" width={'140'} />
              </button>

              <button
                onClick={() => handleOAuth('facebook')}
                aria-label="Login with Facebook"
                className="relative social-media-container bg-transparent p-0"
              >
                <img
                  src="facebook-button.png"
                  alt="Facebook Login"
                  width={'140'}
                />
              </button>
            </div>
          </div>

          {/* ✅ Signup and Help Section */}
          <div className="flex flex-col items-center mt-10 gap-3">
            <p className="text-oldgoldbrown flex gap-1">
              Don't have an account?
              <Link to="/signup" className="cursor-pointer">
                <p className="text-oldgoldbrown font-black text-lg underline">
                  Sign up
                </p>
              </Link>
            </p>
            <p className="text-oldgoldbrown flex gap-1">
              Need help?
              <Link to="/help">
                <p className="text-oldgoldbrown font-black">
                  Visit our help center
                </p>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
