import CalendarIcon from "../../pages/MainLayout/pages/Dashboard/content/Home/icons/CalendarIcon";
import ClockIcon from "../../pages/MainLayout/pages/Dashboard/content/Home/icons/ClockIcon";
import GpsLocationIcon from "../../pages/MainLayout/pages/Dashboard/content/Home/icons/GpsLocationIcon";
import './index.css';

interface InfoBoxProps {
  location: string;
  date: string;
  time: string;
  fontSize?: string;
}

const InfoBox = ({ location, date, time, fontSize = '1rem' }: InfoBoxProps) => {
  return (
    <div className="flex flex-2 flex-col justify-center gap-3">
      <div className="flex gap-1">
        <GpsLocationIcon size={14} />
        <span className="icons-text" style={{ fontSize }}>{location}</span>
      </div>
      <div className="flex gap-1">
        <CalendarIcon size={14} />
        <span className="icons-text" style={{ fontSize }}>{date}</span>
      </div>
      <div className="flex gap-1">
        <ClockIcon size={14} />
        <span className="icons-text" style={{ fontSize }}>{time}</span>
      </div>
    </div>
  );
};

export default InfoBox;
