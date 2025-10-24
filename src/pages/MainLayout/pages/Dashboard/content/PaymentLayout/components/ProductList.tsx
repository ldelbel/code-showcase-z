import Product from "./product";

interface ProductListProps {
  products: Array<{ name: string; price: number }>;
  onRemoveProduct: (index: number) => void;
}

export const ProductList = ({ products, onRemoveProduct }: ProductListProps) => {
  return (
    <div className="w-full h-[90px] bg-white px-2.5 py-2 flex flex-col gap-[2px] overflow-y-auto [box-shadow:0px_-4px_10px_0px_#00000040_inset,0px_4px_4px_0px_#00000080_inset]">
      {products.map((product, index) => (
        <Product 
          key={index}
          name={product.name}
          price={product.price}
          onRemove={() => onRemoveProduct(index)}
        />
      ))}
    </div>
  );
}; 