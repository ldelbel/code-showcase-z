import { lang } from '@/utils/lang';

const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tags = {
    overview: {
      'en-us': 'OVERVIEW',
      'pt-br': 'GERAL',
    },
    content: {
      'en-us': 'CONTENT',
      'pt-br': 'LEITURA',
    },
    share: {
      'en-us': 'SHARE',
      'pt-br': 'COMPARTILHAR',
    },
  };

  return (
    <div className="flex gap-2">
      <div
        onClick={() => setActiveTab('overview')}
        className="w-[100px] h-[28px] bg-golden-gradient rounded-md flex justify-center items-center relative cursor-pointer"
        style={{ boxShadow: '0px 4px 4px 0px #000000' }}
      >
        {activeTab === 'overview' ? (
          <div
            className="w-[94px] h-[26px] bg-customBrown absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-sm"
            style={{
              boxShadow: `
                    inset 0px 4px 4px rgba(0, 0, 0, 0.5),
                    inset 0px -4px 10px rgba(0, 0, 0, 0.25)
                  `,
            }}
          >
            <span
              className="font-bold bg-golden-gradient bg-clip-text text-transparent "
              style={{
                textShadow: '0px 2px 2px rgba(0, 0, 0, 0.5)',
                fontFamily: 'Rajdhani',
              }}
            >
              {tags['overview'][lang]}
            </span>
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <span className="carved-text font-bold">
              {tags['overview'][lang]}
            </span>
          </div>
        )}
      </div>
      <div
        onClick={() => setActiveTab('details')}
        className="w-[100px] h-[28px] bg-golden-gradient rounded-md flex justify-center items-center relative cursor-pointer"
        style={{ boxShadow: '0px 4px 4px 0px #000000' }}
      >
        {activeTab === 'details' ? (
          <div
            className="w-[94px] h-[26px] bg-customBrown absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-sm"
            style={{
              boxShadow: `
                    inset 0px 4px 4px rgba(0, 0, 0, 0.5),
                    inset 0px -4px 10px rgba(0, 0, 0, 0.25)
                  `,
            }}
          >
            <span
              className="font-bold bg-golden-gradient bg-clip-text text-transparent"
              style={{
                textShadow: '0px 2px 2px rgba(0, 0, 0, 0.3)',
                fontFamily: 'Rajdhani',
              }}
            >
              {tags['content'][lang]}
            </span>
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <span className="carved-text font-bold">
              {tags['content'][lang]}
            </span>
          </div>
        )}
      </div>
      <div
        onClick={() => setActiveTab('share')}
        className="w-[100px] h-[28px] bg-golden-gradient rounded-md flex justify-center items-center relative cursor-pointer"
        style={{ boxShadow: '0px 4px 4px 0px #000000' }}
      >
        {activeTab === 'share' ? (
          <div
            className="w-[94px] h-[26px] bg-customBrown absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-sm"
            style={{
              boxShadow: `
                    inset 0px 4px 4px rgba(0, 0, 0, 0.5),
                    inset 0px -4px 10px rgba(0, 0, 0, 0.25)
                  `,
            }}
          >
            <span
              className={`${
                lang == 'pt-br' ? 'text-sm' : ''
              } font-bold bg-golden-gradient bg-clip-text text-transparent`}
              style={{
                textShadow: '0px 2px 2px rgba(0, 0, 0, 0.5)',
                fontFamily: 'Rajdhani',
              }}
            >
              {tags['share'][lang]}
            </span>
          </div>
        ) : (
          <div
            className={`${
              lang == 'pt-br' ? 'text-sm' : ''
            } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center`}
          >
            <span className="carved-text font-bold">{tags['share'][lang]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
