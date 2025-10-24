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

  useEffect(() => {
    if (responseStatus === 201) {
      setAdjustedEndValue(100);

      setAdjustedSpeed(150);
    } else if (responseStatus === 202) {
      setAdjustedEndValue(99);
      setAdjustedSpeed(400);
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

  const radius = 72.5;
  const circumference = 2 * Math.PI * radius;
  const dashArray = `${(progressValue / 100) * circumference} ${circumference}`;

  return (
    <div className={`${className} relative p-3`}>
      <div
        className={`w-[170px] h-[170px] rounded-full bg-[url('/zodic-logo.png')] bg-contain bg-no-repeat relative z-10`}
      >
        <div
          className={`rounded-full border-b-transparent border-l-transparent border-t-transparent bar-spin border-oldgolddark absolute top-[27px] right-[27.2px] `}
          style={{ width: size * 5, height: size * 5, borderWidth: border }}
        />
      </div>
      {responseStatus !== undefined && (
        <div
          ref={percentageDivRef}
          className={`percentage-load ${isComplete ? 'shine-effect' : ''}`}
          style={{ zIndex: 5 }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="-25 -25 240 240"
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
              cx="95"
              cy="95"
              r={radius}
              fill="none"
              stroke="#FFEC94"
              strokeWidth="19"
              strokeDasharray={dashArray}
              transform="rotate(-90 95 95)"
              style={{
                transition: 'stroke-dasharray 0.3s ease',
                filter: 'url(#glow)',
              }}
            />
          </svg>
          <p className="relative z-10">{Math.round(progressValue)}%</p>
        </div>
      )}
    </div>
  );
};

export default ProgressLoad;
