interface TotalSectionProps {
  total: number;
  onAddProducts: () => void;
}

export const TotalSection = ({ total, onAddProducts }: TotalSectionProps) => {
  return (
    <div className="w-full flex justify-between">
      <div 
        className="bg-oldgolddark h-[22px] text-white text-sm font-bold font-inter px-2 py-1 rounded-md flex items-center shadow-box cursor-pointer"
        onClick={onAddProducts}
      >
        Adicionar Produtos
      </div>
      <div className="flex gap-1">
        <p className="text-customGray2 text-sm font-bold font-inter">Total:</p>
        <span className="text-oldgolddark2 text-sm font-bold font-inter">{total} créditos</span>
      </div>
    </div>
  );
}; 