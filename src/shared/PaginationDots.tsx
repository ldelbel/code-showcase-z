interface PaginationDotsProps {
  total: number;
  currentPage: number;
  onPageChange: (direction: number) => void;
}

const PaginationDots = ({ total, currentPage, onPageChange }: PaginationDotsProps) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentPage ? 'bg-oldgoldlight w-4' : 'bg-customGray'
            }`}
          onClick={() => {
            const direction = index - currentPage;
            onPageChange(direction);
          }}
        />
      ))}
    </div>
  );
};

export default PaginationDots; 