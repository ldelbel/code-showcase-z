import { UserArtifact } from '@/types';
import { lang } from '@/utils/lang';

interface DetailsProps {
  userArtifact: UserArtifact;
}

type SupportedLanguages = 'en' | 'pt-br';

const sectionTranslations: Record<string, Record<SupportedLanguages, string>> = {
  voiceOfTheSoul: {
    en: 'The Voice of the Soul',
    'pt-br': 'A Voz da Alma',
  },
  giftsYouBear: {
    en: 'The Gifts You Bear',
    'pt-br': 'Os Dons que Você Carrega',
  },
  shadowsYouFace: {
    en: 'The Shadows You Face',
    'pt-br': 'As Sombras que Você Enfrenta',
  },
  rhythmOfYourDays: {
    en: 'The Rhythm of Your Days',
    'pt-br': 'O Ritmo dos Seus Dias',
  },
  tiesThatBind: {
    en: 'Ties That Bind',
    'pt-br': 'Os Laços que Unem',
  },
  lightWithin: {
    en: 'The Light Within',
    'pt-br': 'A Luz Interior',
  },
};

const formatSectionTitle = (section: string): string => {
  const translation =
    sectionTranslations[section]?.[lang as SupportedLanguages] || section;

  if (translation !== section) {
    return translation;
  }

  const words = section.split(/(?=[A-Z])/).join(' ');
  return words
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const Details = ({ userArtifact }: DetailsProps) => {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div
        className="flex flex-col gap-6 px-4 py-4 overflow-y-auto flex-1 min-h-0 text-slate-200"
        style={{
          backgroundColor: '#D9D9D91A',
          scrollbarWidth: 'thin',
          scrollbarColor: '#E6BE69 #171717',
          boxShadow: 'inset 0px -4px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        {userArtifact.archetypeData?.content.map((section, index) => (
          <div key={index} className="flex flex-col gap-6">
            <h3 className="bg-golden-gradient text-transparent bg-clip-text font-bold text-xl text-center drop-shadow-tight">
              {formatSectionTitle(section.section)}
            </h3>
            <div className="flex flex-col gap-7">
              <p className="text-left text-base">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;