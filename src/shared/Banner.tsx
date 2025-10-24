import models from '/banner-artifacts.png';

const Banner: React.FC = () => {
  return (
    <div
        className="flex justify-center w-full h-[128px] bg-CustomBlack mx-auto"
        style={{
          boxShadow: `
            0px -3px 4px 0px #00000080 inset,
            0px 3px 5px 1px #00000040 inset
          `
        }}
      >
        <div className='w-[330px] h-40 -mt-4' style={{ backgroundImage: `url(${models})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
  );
};

export default Banner;