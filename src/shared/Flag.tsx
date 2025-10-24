const Flag = () => {
  return (
    <div className="relative">
      {/* <div 
        className="h-3 w-3 bg-red-500 absolute top-[-2px] right-[1.9px]"
        style={{
          transform: 'rotate(19.87deg)',
          zIndex: '-10'
        }}
      /> */}
      <div 
        className="text-white font-bold py-0.5 px-2"
        style={{
          background: 'linear-gradient(88.37deg, #34B64A 5.53%, #237A31 95.74%)',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          fontSize: '11px',
          textAlign: 'right',
          minWidth: '80px'
        }}
      >
        SELECTED
      </div>
    </div>
  );
};

export default Flag; 