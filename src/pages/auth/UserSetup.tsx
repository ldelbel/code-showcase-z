import { useFetchConcepts, useGenerateAstrologyData } from '@/api/hooks';

import { useUserStore } from '@/store/useStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockConcepts } from '../mock';
import Registration from '../Signup/steps/Step5/components/Registration';

const UserSetup = () => {
  const navigate = useNavigate();
  const { mutate: generateAstrology } = useGenerateAstrologyData();
  const { refetch: refetchConcepts } = useFetchConcepts();
  const { setConcepts, setUserArtifacts } = useUserStore();

  console.log('Entered UserSetup Page');

  useEffect(() => {
    const setupUser = async () => {
      try {
        const conceptsResult = await refetchConcepts();
        if (conceptsResult.data) {
          console.log('✅ Concepts fetched and set:', conceptsResult.data);
          setConcepts(conceptsResult.data);
        } else {
          console.log('⚠️ No concepts data returned', conceptsResult);
          setConcepts(mockConcepts);
        }

        generateAstrology(undefined, {
          onSuccess: () => {
            console.log('✅ Astrology data generated successfully');
            navigate('/main');
          },
          onError: (error) => {
            console.error('Astrology generation failed:', error);
            alert(`Error: ${(error as Error).message}`);
          },
        });
      } catch (err) {
        console.error('Setup failed:', err);
        setConcepts(mockConcepts);
        setUserArtifacts([]);
        alert('Setup failed, using mock data');
        navigate('/main');
      }
    };

    setupUser();
  }, [
    refetchConcepts,

    setConcepts,
    setUserArtifacts,
    generateAstrology,
    navigate,
  ]);

  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <Registration />
    </div>
  );
};

export default UserSetup;
