import banner from '/banner-concepts.png';

const ConceptsBanner: React.FC = () => {
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
        <div className='w-80 h-40 -mt-4' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
  );
};

export default ConceptsBanner;