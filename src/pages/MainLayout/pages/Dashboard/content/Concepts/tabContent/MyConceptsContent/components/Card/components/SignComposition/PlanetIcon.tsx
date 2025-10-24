import { placementIcons } from '@/shared/Icons/maps';
import { PlacementSlug } from '@zodic/shared/types/scopes/legacy';

interface PlanetIconProps {
  planet: PlacementSlug;
  size?: number;
}

const PlanetIcon = ({ planet, size = 16 }: PlanetIconProps) => {
  const Icon = placementIcons[planet];
  return <Icon size={size} />;
};

export default PlanetIcon;
