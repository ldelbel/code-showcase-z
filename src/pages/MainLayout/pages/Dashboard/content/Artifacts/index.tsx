import React, { useState } from 'react';
import TabsContainer from '../../components/TabsContainer';
import TabsNavigation from '../../components/TabsNavigation';
import ArtifactsIntroContent from './tabContent/ArtifactsIntroContent';
import MyArtifactsContent from './tabContent/MyArtifactsContent';

const Artifacts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className={`w-full`}>
      <TabsContainer>
        <TabsNavigation
          tabs={['intro', 'my_artifacts']}
            activeTab={activeTab}
            onChangeTab={setActiveTab}
          />
        </TabsContainer>
      {activeTab === 'intro' && <ArtifactsIntroContent onChangeTab={setActiveTab} />}
      {activeTab === 'my_artifacts' && <MyArtifactsContent />}
    </div>
  );
};

export default Artifacts;