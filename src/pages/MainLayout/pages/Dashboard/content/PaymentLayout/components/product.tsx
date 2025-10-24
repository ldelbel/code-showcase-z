const Product = ({ name, price, onRemove }: { name: string, price: number, onRemove: () => void }) => {
  return (
    <div className="flex items-center h-[24px] flex-shrink-0 pl-2.5 bg-lightgray2 border border-customGray4 rounded-md overflow-hidden shadow-box">

      <div className="w-[75%] h-[24px] flex items-center">
        <span className="text-customGray3 text-sm font-medium font-inter">{name}</span>
      </div>

      <div className="w-[15%] h-[24px] flex items-center justify-center">
        <span className="text-oldgolddark2 text-lg font-bold font-inter">{price}</span>
      </div>

      <div className="bg-customRed w-[10%] h-[24px] flex items-center justify-center cursor-pointer rounded-r-sm" onClick={onRemove}>
        <span className="text-white text-base font-bold font-inter text-center">X</span>
      </div>

    </div>
  );
};  

export default Product;
