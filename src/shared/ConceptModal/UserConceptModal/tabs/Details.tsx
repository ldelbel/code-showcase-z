interface Section {
  type: string;
  title: string;
  content: string[];
}

interface DetailsProps {
  userConcept: {
    content: Section[];
  };
  isShortName?: boolean;
}

const splitContentIntoTwo = (content: string): [string, string] => {
  const sentences = content
    .split(/(?<=\.)\s+/)
    .filter((sentence) => sentence.trim() !== '');

  if (sentences.length < 2) {
    return [content.trim(), ''];
  }

  const midPoint = Math.ceil(sentences.length / 2);
  const firstHalf = sentences.slice(0, midPoint).join(' ').trim();
  const secondHalf = sentences.slice(midPoint).join(' ').trim();

  return [firstHalf, secondHalf];
};

const Details = ({ userConcept, isShortName }: DetailsProps) => {
  console.log('User Concept', userConcept);

  return (
    <div
      className={`text-slate-200 overflow-y-auto ${
        isShortName ? 'h-[65dvh]' : 'h-[60dvh]'
      } flex flex-col gap-6 px-4 py-4 relative ${
        isShortName
          ? 'md:h-[68dvh] tall:h-[72dvh]'
          : 'md:h-[65dvh] tall:h-[68dvh]'
      }`}
      style={{
        backgroundColor: '#D9D9D91A',
        scrollbarWidth: 'thin',
        scrollbarColor: '#E6BE69 #171717',
        boxShadow: 'inset 0px -4px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      {userConcept.content.map((section, index) => {
        const fullContent = section.content.join(' ');
        const [firstHalf, secondHalf] = splitContentIntoTwo(fullContent);

        return (
          <div key={index} className="flex flex-col gap-6">
            <h3 className="bg-golden-gradient text-transparent bg-clip-text font-bold text-xl text-center drop-shadow-tight">
              {section.title}
            </h3>
            <div className="flex flex-col gap-7">
              <p className="text-left text-base">{firstHalf}</p>
              {secondHalf && (
                <p className="text-left text-base">{secondHalf}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
