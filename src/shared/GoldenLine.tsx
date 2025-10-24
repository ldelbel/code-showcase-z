const GradientLine: React.FC = (
) => {
  return (
    <div className="relative bg-golden-gradient h-[1px] shadow-custom-inset">
      <div className="absolute top-0 left-0 right-0 shadow-top-light h-[1px]"></div>
      <div className="absolute bottom-0 left-0 right-0 shadow-bottom-dark h-1"></div>
    </div>
  );
};

export default GradientLine;