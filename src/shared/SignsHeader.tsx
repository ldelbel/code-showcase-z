import AC from '@/assets/ac.svg';
import Moon from '@/assets/moon.svg';
import Aquarius from '@/assets/sign-icon/aquarius.svg';
import Libra from '@/assets/sign-icon/libra.svg';
import Sagittarius from '@/assets/sign-icon/sagittarius.svg';
import Sun from '@/assets/sun.svg';

const SignsHeader = () => {
  return (
    <div>
      <div className="flex gap-1 items-center justify-center p-2">
        <div className="flex flex-col items-center w-28">
          <img src={Sun} alt="Sun" />
          <div className='flex flex-col justify-center items-center mt-2'>
            <img width={20} height={20} src={Sagittarius} alt="Sagittarius" />
            <p className='text-whitesmoke' style={{ fontSize: '10px' }}>Sagittarius</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-28">
          <img src={Moon} alt="Moon" />
          <div className='flex flex-col items-center justify-center mt-2'>
            <img width={20} height={20} src={Aquarius} alt="Aquarius" />
            <p className='text-whitesmoke' style={{ fontSize: '10px' }}>Aquarius</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-28">
          <img src={AC} alt="AC" />
          <div className='flex flex-col items-center justify-center mt-2'>
            <img width={20} height={20} src={Libra} alt="Libra" />
            <p className='text-whitesmoke' style={{ fontSize: '10px' }}>Libra</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignsHeader;
