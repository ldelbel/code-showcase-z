import Button from '@/shared/Button';
import GradientText from '@/shared/GradientText';
import { PencilIcon } from '@/shared/Icons/PencilIcon';
import ProfileIcon from '@/shared/Icons/ProfileIcon';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import InfoBox from '../../../../shared/InfoBox';

const translations = {
  'pt-br': {
    gender: 'Gênero:',
    language: 'Idioma:',
    edit: 'EDITAR',
    location: 'Caraguatatuba, São Paulo, Brasil',
    date: '10 de Dezembro de 1990',
    time: '8h30',
    male: 'Masculino',
    portuguese: 'Português',
  },
  'en-us': {
    gender: 'Gender:',
    language: 'Language:',
    edit: 'EDIT',
    location: 'Caraguatatuba, São Paulo, Brazil',
    date: 'December 10, 1990',
    time: '8:30 AM',
    male: 'Male',
    portuguese: 'Portuguese',
  },
};

const portugueseMonths: { [key: number]: string } = {
  1: 'Janeiro',
  2: 'Fevereiro',
  3: 'Março',
  4: 'Abril',
  5: 'Maio',
  6: 'Junho',
  7: 'Julho',
  8: 'Agosto',
  9: 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro',
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const Profile = () => {
  const { userProfile } = useUserStore();

  const formatDateInPortuguese = () => {
    if (!userProfile?.day || !userProfile?.month || !userProfile?.year) {
      return t.date; 
    }

    const day = userProfile.day;
    const month = portugueseMonths[userProfile.month] || 'Mês Desconhecido';
    const year = userProfile.year;

    return `${day} de ${month} de ${year}`;
  };

  
  const formatTime = () => {
    if (!userProfile?.hour || !userProfile?.min) {
      return t.time; 
    }

    const hour = userProfile.hour;
    const min = userProfile.min.toString().padStart(2, '0');

    if (lang === 'pt-br') {
      return `${hour}h${min}`; 
    } else {
      const period = hour >= 12 ? 'PM' : 'AM';
      const adjustedHour = hour % 12 || 12; 
      return `${adjustedHour}:${min} ${period}`; 
    }
  };

  
  const getGenderText = () => {
    if (lang === 'pt-br') {
      return userProfile?.gender === 'male'
        ? 'Masculino'
        : userProfile?.gender === 'female'
        ? 'Feminino'
        : 'Não Especificado';
    }
    return userProfile?.gender === 'male'
      ? 'Male'
      : userProfile?.gender === 'female'
      ? 'Female'
      : 'Not Specified';
  };

  
  const getLanguageText = () => {
    if (lang === 'pt-br') {
      return userProfile?.language === 'pt-br'
        ? 'Português'
        : userProfile?.language === 'en-us'
        ? 'Inglês'
        : 'Desconhecido';
    }
    return userProfile?.language === 'pt-br'
      ? 'Portuguese'
      : userProfile?.language === 'en-us'
      ? 'English'
      : 'Unknown';
  };

  return (
    <div
      className="flex flex-col gap-6 justify-center items-center h-full pt-10"
      style={{
        background:
          'radial-gradient(174.71% 87.3% at 21.88% 8.6%, #252525 0%, #444444 100%)',
      }}
    >
      <div
        className="w-[129px] h-[129px] bg-golden-gradient min-h-[129px] max-h-[129px] p-[2px]"
        style={{ borderRadius: '30px' }}
      >
        {userProfile?.profileImage ? (
          <div
            className="w-full h-full"
            style={{
              borderRadius: '30px',
              backgroundImage: `url(${userProfile?.profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          <div
            className="w-full h-full flex justify-center items-end bg-customGray4"
            style={{ borderRadius: '30px' }}
          >
            <ProfileIcon />
          </div>
        )}
      </div>
      <GradientText
        text={userProfile?.name || 'Nome Desconhecido'}
        fontSize="28px"
      />
      <div className="bg-dark-gray-gradient w-full h-full flex flex-col gap-4 justify-center items-center shadow-inset-dark">
        <div className="bg-golden-gradient w-fit p-[1px] rounded-md mb-12">
          <div className="bg-DarkGray w-fit p-3 rounded-md">
            <InfoBox
              location={userProfile?.birthLocation || t.location}
              date={formatDateInPortuguese()}
              time={formatTime()}
              fontSize="16px"
            />
          </div>
        </div>

        <div className="h-8 flex gap-2 px-5 py-2 justify-center items-center shadow-black-white rounded-md">
          <GradientText text={t.gender} fontSize="16px" fontWeight={700} />
          <p className="text-whitesmoke text-base font-bold">
            {getGenderText()}
          </p>
        </div>
        <div className="h-8 flex gap-2 px-5 py-2 justify-center items-center shadow-black-white rounded-md">
          <GradientText text={t.language} fontSize="16px" fontWeight={700} />
          <p className="text-whitesmoke text-base font-bold">
            {getLanguageText()}
          </p>
        </div>
        <div className="mt-8 mb-20">
          <Button
            text={t.edit}
            base="golden"
            variant="main"
            icon={<PencilIcon size={24} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
