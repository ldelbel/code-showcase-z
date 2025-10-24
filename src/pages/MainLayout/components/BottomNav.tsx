import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CrossIcon } from "./icons/CrossIcon";
import FriendsIcon from "./icons/FriendsIcon";
import HoroscopeIcon from "./icons/HoroscopeIcon";
import SquaresIcon from "./icons/SquaresIcons";
import UserIcon from "./icons/UserIcon";
import "./index.css";

type IconType = "squares" | "horoscope" | "friends" | "user" | "payment" | null;

const BottomNav = () => {
  const [selectedIcon, setSelectedIcon] = useState<IconType>('squares');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/main') {
      setSelectedIcon('squares');
    } else if (path === '/main/horoscope') {
      setSelectedIcon('horoscope');
    } else if (path === '/main/payment') {
      setSelectedIcon('payment');
    } else if (path === '/main/friends') {
      setSelectedIcon('friends');
    } else if (path === '/main/profile') {
      setSelectedIcon('user');
    }
  }, [location]);

  const handleIconClick = (icon: IconType) => {
    if (selectedIcon !== icon) {
      setSelectedIcon(icon);
    }
  };

  return (
    <nav className="fixed bottom-0 w-full flex flex-col items-center justify-center bottom-nav z-[1]">
      <div className="bg-golden-gradient w-full h-[2px]" style={{
        boxShadow: "0px 2px 2px 0px #00000080"
      }} />
      <div className="flex items-center justify-center h-[53px]">
        <NavLink to="/main" className="" onClick={() => handleIconClick("squares")}>
          <SquaresIcon isSelected={selectedIcon === "squares"} />
        </NavLink>
        <NavLink to="/main/horoscope" className="" onClick={() => handleIconClick("horoscope")}>
          <HoroscopeIcon isSelected={selectedIcon === "horoscope"} />
        </NavLink>
        <NavLink to="/main/payment" className="">
          <div className="-mt-6 mx-1.5 p-[2px] border border-transparent bg-golden-gradient rounded-full w-[76px] h-[76px] flex items-center justify-center relative"
            style={{ boxShadow: "0px 4px 4px 1px #000000BF" }}
            onClick={() => handleIconClick("payment")}
          >
            <div className="bg-white rounded-full w-full h-full">
              <div className={`w-[72px] h-[72px] rounded-full absolute top-[1px] left-[1px] ${selectedIcon === "payment" ? 'animate-spin-slow' : ''} bg-[url('/zodicLogo.png')] bg-contain bg-no-repeat`} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CrossIcon
                  width={32}
                  height={32}
                  color={selectedIcon === "payment" ? "gradient" : "#55472A"}
                />
              </div>
            </div>

          </div>
        </NavLink>
        <NavLink to="/main/friends" className="" onClick={() => handleIconClick("friends")}>
          <FriendsIcon isSelected={selectedIcon === "friends"} />
        </NavLink>
        <NavLink to="/main/profile" className="" onClick={() => handleIconClick("user")}>
          <UserIcon isSelected={selectedIcon === "user"} />
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
