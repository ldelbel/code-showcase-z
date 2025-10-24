import GradientText from '@/shared/GradientText';
import { useUserStore } from '@/store/useStore';
import formatDate from '@/utils/formaDate';
import { lang } from '@/utils/lang';
import React from 'react';
import InfoBox from '../../../../../../../shared/InfoBox';
import './index.css';
import UserIcon from '/userIcon.png';

const translations = {
  'pt-br': {
    welcomeFemale: 'Bem-vinda de volta,',
    welcomeMale: 'Bem-vindo de volta,',
    welcomeNonBinary: 'Bem-vinde de volta,',
  },
  'en-us': {
    welcomeFemale: 'Welcome back,',
    welcomeMale: 'Welcome back,',
    welcomeNonBinary: 'Welcome back,',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const UserInfo: React.FC = () => {
  const { userProfile } = useUserStore();

  if (!userProfile) {
    return;
  }

  const {
    birthLocation,
    day,
    min,
    year,
    hour,
    month,
    name,
    gender,
    profileImage,
  } = userProfile;

  const getWelcomeMessage = () => {
    if (lang === 'pt-br') {
      switch (gender) {
        case 'female':
          return t.welcomeFemale;
        case 'male':
          return t.welcomeMale;
        case 'non-binary':
          return t.welcomeNonBinary;
        default:
          return t.welcomeMale;
      }
    }
    return t.welcomeMale;
  };

  const welcomeDisplay = getWelcomeMessage();

  return (
    <div className="flex flex-col justify-center items-center w-[85vw]">
      <div className="flex w-full user-info-container">
        {profileImage ? (
          <div className="w-[74px] h-[74px] bg-golden-gradient rounded-full p-[2px] shadow-black-white flex items-center justify-center">
            <div
              className="w-full h-full rounded-full"
              style={{
                backgroundImage: `url(${profileImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        ) : (
          <div
            className="w-[74px] h-[74px]"
            style={{
              backgroundImage: `url(${UserIcon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <div className="flex flex-col justify-center ml-2">
          <span className="welcome-text -mb-[3px]">{welcomeDisplay}</span>
          <div className="ml-3">
            <GradientText
              text={`${name.split(' ')[0]}!`}
              fontWeight={700}
              fontSize={'28px'}
              lineHeight="33.89px"
            />
          </div>
        </div>
      </div>
      <div className="bg-golden-gradient w-full h-[1px] mt-2" />
      <div className="flex items-center w-full relative px-2 py-3">
        <InfoBox
          location={birthLocation}
          date={formatDate(day, month, year, lang)}
          time={`${hour}h${min}`}
          fontSize="12px"
        />
        {/* <div className="absolute top-3 right-3">
          <ArrowIcon width={54} height={53} className="drop-shadow-custom" />
        </div> */}
      </div>
    </div>
  );
};

export default UserInfo;
