import Button from "@/shared/Button";
import { lang } from "@/utils/lang";

interface UnrevealedArtifactProps {
  artifactName: string;
  onReveal: () => void;
}

const UnrevealedArtifact = ({
  onReveal,
}: UnrevealedArtifactProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Button
        variant="medium"
        text={lang === 'pt-br' ? 'REVELAR' : 'REVEAL'}
        base="golden"
        onClick={onReveal}
      />
    </div>
  );
};

export default UnrevealedArtifact;
