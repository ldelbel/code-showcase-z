import './index.css';

const Title = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="title mb-[4px]">{title}</h1>
      <div className="w-64 h-[1px] bg-golden-gradient"></div>
      {subtitle && <h2 className="subtitle-n">{subtitle}</h2>}
    </div>
  )
  
};

export default Title;
