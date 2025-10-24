import Crown2 from '@/assets/Crown2.png';
import EyeIcon from '@/shared/Icons/EyeIcon';

const WithCrown = ({ isLoading }: { isLoading?: boolean }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 text-center'>
      <div className={`${isLoading ? 'w-[96px] h-[96px] -mt-10 golden-glow' : 'w-[206px] h-[206px]'} bg-golden-gradient rounded-md relative transition-all duration-300 golden-glow`}>
        <div className={`${isLoading ? 'w-[90px] h-[90px]' : 'w-[200px] h-[200px]'} rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGray transition-all duration-300`}>
          <div className={`${isLoading ? 'w-[90px] h-[90px]' : 'w-[200px] h-[200px]'} transition-all duration-300`}
            style={{ backgroundImage: `url(${Crown2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className={`${isLoading ? 'w-[24px] h-[24px]' : 'w-[32px] h-[32px]'} absolute -bottom-4 -right-4 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300`}>
            <EyeIcon />
          </div>
        </div>
      </div>
      <div className='mt-2 mb-10'>
        <h2
          className='-mt-4 bg-golden-gradient-2 bg-clip-text text-transparent font-bold transition-all duration-300 golden-glow-text'
          style={{
            fontSize: isLoading ? '14px' : '20px',
          }}
        >
          The Crown of Focused Power
        </h2>
      </div>

    </div>
  );
};

export default WithCrown;