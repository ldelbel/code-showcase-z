import { useEffect, useRef, useState } from 'react';
import './index.css';

interface ProgressLoadProps {
  size?: number;
  border?: number;
  className?: string;
  endValue?: number;
  speed?: number;
  responseStatus?: number;
  onComplete?: () => void;
}

const ProgressLoad = ({
  size = 23,
  border = 4,
  className = '',
  endValue = 100,
  speed = 100,
  responseStatus,
  onComplete,
}: ProgressLoadProps) => {
  const [progressValue, setProgressValue] = useState(0);
  const [adjustedEndValue, setAdjustedEndValue] = useState(endValue);
  const [adjustedSpeed, setAdjustedSpeed] = useState(speed);
  const [isComplete, setIsComplete] = useState(false);
  const percentageDivRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<number | NodeJS.Timeout | null>(null);

  const containerSize = size * 7.4;
  const radius = (containerSize + 25) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashArray = `${(progressValue / 100) * circumference} ${circumference}`;
  const spinnerSize = size * 5 - (size < 16 ? 5 : size < 18 ? 7 : 9);
  const spinnerOffset = size * 1.4;

  useEffect(() => {
    if (responseStatus === 201) {
      setAdjustedEndValue(100);

      setAdjustedSpeed(100);
    } else if (responseStatus === 202) {
      setAdjustedEndValue(99);
      setAdjustedSpeed(600);
    }
    console.log('responseStatus', responseStatus);
  }, [responseStatus]);

  useEffect(() => {
    if (percentageDivRef.current && responseStatus !== undefined) {
      console.log('Percentage div is shown, starting progress interval');

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }

      progressIntervalRef.current = setInterval(() => {
        setProgressValue((prevValue) => {
          const increment = 1;
          const newValue = Math.min(prevValue + increment, adjustedEndValue);
          if (newValue >= adjustedEndValue) {
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
            }
            setIsComplete(true);
            if (onComplete) {
              onComplete();
            }
            return adjustedEndValue;
          }
          return newValue;
        });
      }, adjustedSpeed);

      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
      };
    }
  }, [
    percentageDivRef.current,
    responseStatus,
    adjustedEndValue,
    adjustedSpeed,
    onComplete,
  ]);

  return (
    <div
      className={`${className} relative`}
      style={{
        width: containerSize,
        height: containerSize,
        minWidth: containerSize,
        minHeight: containerSize,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full bg-[url('/zodic-logo.png')] bg-contain bg-no-repeat"
          style={{
            width: '90%',
            height: '90%',
          }}
        >
          <div
            className={`rounded-full border-b-transparent border-r-transparent border-t-transparent bar-spin border-oldgolddark absolute`}
            style={{
              width: spinnerSize,
              height: spinnerSize,
              borderWidth: border,
              top: spinnerOffset,
              right: spinnerOffset,
            }}
          />
        </div>
      </div>
      {responseStatus !== undefined && (
        <div
          ref={percentageDivRef}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex items-center justify-center ${
            isComplete ? 'shine-effect' : ''
          }`}
        >
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-full h-full"
            viewBox={`-25 -25 ${containerSize + 50} ${containerSize + 50}`}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx={containerSize / 2}
              cy={containerSize / 2}
              r={radius}
              fill="none"
              stroke="#FFEC94"
              strokeWidth={size * 1}
              strokeDasharray={dashArray}
              transform={`rotate(-90 ${containerSize / 2} ${
                containerSize / 2
              })`}
              style={{
                transition: 'stroke-dasharray 0.3s ease',
                filter: 'url(#glow)',
              }}
            />
          </svg>
          <p
            className="relative z-10 text-whitesmoke"
            style={{
              fontSize: `${size * 0.8}px`,
              lineHeight: 1,
            }}
          >
            {Math.round(progressValue)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressLoad;
