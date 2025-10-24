import LoadingSpinner from '@/shared/LoadingSpinner';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold text-center text-oldgoldlight">
        Generating archetypes...
      </p>
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
