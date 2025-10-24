import './index.css';

const Minititle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center my-3">
      <h2 className="title text-base font-bold font-rajdhani">{title}</h2>
      <div className="w-64 h-[1px] bg-golden-gradient"></div>
    </div>
  );
};

export default Minititle;
