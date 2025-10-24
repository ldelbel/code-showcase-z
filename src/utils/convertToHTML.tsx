interface ParagraphContent {
  type: 'p';
  content: string;
}

interface BulletPointContent {
  type: 'bullet-point';
  title?: string;
  content: string;
}

type Section = Array<ParagraphContent | BulletPointContent>;

export interface AstroReport {
  [key: string]: Section;
}

const convertToHtml = (report: AstroReport): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      {Object.entries(report).map(([sectionTitle, content], index) => (
        <div key={index} className="mb-6">
          <h2 className="font-bold text-oldgolddark text-xl pb-3">
            {sectionTitle
              .split(/(?=[A-Z])/)
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(' ')
              .trim()}
          </h2>
          {content.map(
            (
              item: ParagraphContent | BulletPointContent,
              itemIndex: number
            ) => {
              if (item.type === 'p') {
                return (
                  <p
                    key={itemIndex}
                    className="mb-6 text-whitesmoke text-base font-normal leading-6"
                  >
                    {item.content}
                  </p>
                );
              } else if (item.type === 'bullet-point') {
                return (
                  <div key={itemIndex} className="flex w-full items-start mb-4">
                    <span className="text-oldgolddark font-black text-base mr-2 flex-shrink-0">
                      •
                    </span>
                    <div className="flex flex-col w-full">
                      {item.title ? (
                        <span className="text-oldgolddark font-black text-base inline-block">
                          {item.title}
                          <span className="text-whitesmoke font-normal text-base leading-6 ml-3">
                            {item.content}
                          </span>
                        </span>
                      ) : (
                        <span className="text-oldgolddark font-black text-base inline-block">
                          <span className="text-whitesmoke font-normal text-base leading-6 ml-3">
                            {item.content}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            }
          )}
        </div>
      ))}
    </div>
  );
};

export default convertToHtml;
