import { lang } from '@/utils/lang';
import Button from './Button';

type Props = {
  onClick: () => void;
};

const ReturnButton = ({ onClick }: Props) => {
  const text = lang === 'pt-br' ? 'VOLTAR' : 'RETURN';

  return (
    <Button
      variant="silver-medium"
      base="silver"
      onClick={onClick}
      text={text}
    />
  );
};

export default ReturnButton;
