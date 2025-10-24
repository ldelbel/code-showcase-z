import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import React from 'react';
import ArtifactsIcon from '../../icons/ArtifactsIcon';
import AstrologicalDataIcon from '../../icons/AstrologicalDataIcon';
import ConceptsIcon from '../../icons/ConceptsIcon';
import HomeIcon from '../../icons/HomeIcon';
import '../index.css';
import Button from './components/Button';

type Props = {
  active: string;
  setActive: (section: string) => void;
};

const Tabs = ({ active, setActive }: Props) => {
  const buttons = [
    { icon: HomeIcon, type: 'home', label: AstroLabels['home'][lang] },
    {
      icon: AstrologicalDataIcon,
      type: 'astro',
      label: AstroLabels['natal_chart'][lang],
    },
    {
      icon: ConceptsIcon,
      type: 'concepts',
      label: AstroLabels['concepts'][lang],
    },
    {
      icon: ArtifactsIcon,
      type: 'artifacts',
      label: AstroLabels['artifacts'][lang],
    },
  ] as const;

  return (
    <div className="sticky top-0 flex flex-col justify-between items-center shadow-md">
      <div className="flex justify-center items-center icons-container">
        <div className="flex justify-between items-center icons-row gap-1.5">
          {buttons.map((btn, index) => (
            <React.Fragment key={btn.type}>
              <Button
                active={active}
                setActive={setActive}
                icon={btn.icon}
                iconType={btn.type}
                label={btn.label}
              />
              {index < buttons.length - 1 && <span className="divisor" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
