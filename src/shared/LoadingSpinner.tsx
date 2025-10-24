interface LoadingSpinnerProps {
  size?: number;
  border?: number;
  className?: string;
  borderColor?: string;
}

const LoadingSpinner = ({
  size = 20,
  border = 8,
  className = '',
  borderColor = 'border-oldgolddark',
}: LoadingSpinnerProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`rounded-full border-b-transparent border-l-transparent ${borderColor} animate-spin`}
        style={{ width: size * 5, height: size * 5, borderWidth: border }}
      />
    </div>
  );
};

export default LoadingSpinner;
