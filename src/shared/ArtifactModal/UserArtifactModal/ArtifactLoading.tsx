
interface ArtifactLoadingProps {
  fadeOut?: boolean;
}

const ArtifactLoading = ({ fadeOut }: ArtifactLoadingProps) => {


  return (
    <div className={`h-full text-center relative transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center justify-center h-full">
        
      </div>
    </div>
  );
};

export default ArtifactLoading;
