import Crown from '/crown-chalk.png';
import GenerateButton from '@/shared/GenerateButton';

interface WithoutCrownProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const WithoutCrown = ({ setIsModalOpen }: WithoutCrownProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[206px] h-[206px] bg-golden-gradient rounded-md relative">
        <div className="w-[200px] h-[200px] rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGray">
          <div className="w-[190px] h-[190px] rounded-md bg-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={Crown} alt="Crown" className="w-[190px] h-[190px]" />

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
              <GenerateButton handleClick={() => setIsModalOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-10">
        <p className="text-sm text-whitesmoke">
          Before proceeding, unveil your Crown
        </p>
      </div>
    </div>
  );
};

export default WithoutCrown;
