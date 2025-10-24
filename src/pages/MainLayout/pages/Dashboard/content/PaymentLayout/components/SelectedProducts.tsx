import { ProductList } from "./ProductList";
import { TotalSection } from "./TotalSection";

interface SelectedProductsProps {
  products: Array<{ name: string; price: number }>;
  onRemoveProduct: (index: number) => void;
  onAddProducts: () => void;
  total: number;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export const SelectedProducts = ({ products, onRemoveProduct, onAddProducts, total, isCollapsed, setIsCollapsed }: SelectedProductsProps) => {

  return (
    <div className="flex flex-col w-[90vw] items-center justify-center mx-auto mt-3">
      <div 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center gap-2 text-customGray2 text-sm font-bold text-center font-inter mb-1 border border-customGray2 rounded-md px-2 py-0.5 cursor-pointer"
      >
        <span>Produtos Selecionados:</span>
        <span className="text-xs">{isCollapsed ? '▼' : '▲'}</span>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${isCollapsed ? 'max-h-0' : 'max-h-[500px]'}`}>
        <ProductList products={products} onRemoveProduct={onRemoveProduct} />
        <TotalSection total={total} onAddProducts={onAddProducts} />
      </div>
    </div>
  );
};