import React, { useState } from 'react';
import TabsContainer from '../../components/TabsContainer';
import TabsNavigation from '../../components/TabsNavigation';
import ConceptsIntroContent from './tabContent/ConceptsIntroContent';
import ConceptsOverviewContent from './tabContent/ConceptsOverviewContent';
import MyConceptsContent from './tabContent/MyConceptsContent';

const Concepts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className={`w-full`}>
      <TabsContainer>
        <TabsNavigation
          tabs={['intro', 'my_concepts', 'overview']}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
        />
      </TabsContainer>
      {activeTab === 'intro' && (
        <ConceptsIntroContent onChangeTab={setActiveTab} />
      )}
      {activeTab === 'my_concepts' && (
        <MyConceptsContent />
      )}
      {activeTab === 'overview' && <ConceptsOverviewContent />}
    </div>
  );
};

export default Concepts;
