import { FeaturesData } from '@/pages/MainLayout/pages/Dashboard/content/types';
import { FeaturesKVData } from '@zodic/shared/types';

const addIdToFeatures = (features: FeaturesKVData): FeaturesData => {
  return Object.fromEntries(
    Object.entries(features).map(([key, value]) => [key, { id: key, ...value }])
  ) as FeaturesData;
};

export { addIdToFeatures };
