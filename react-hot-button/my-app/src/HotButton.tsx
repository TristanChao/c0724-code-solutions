import './HotButton.css';

type Props = {
  heat: string;
  onButtonClick: () => void;
};

export function HotButton({ heat, onButtonClick }: Props) {
  return (
    <button className={'heat' + heat} onClick={onButtonClick}>
      Hot Button
    </button>
  );
}
