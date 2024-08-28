type Props = {
  onButtonClick: () => void;
  label: string;
};

export function ButtonContainer({ onButtonClick, label }: Props) {
  return (
    <div onClick={onButtonClick}>
      <button>{label}</button>
    </div>
  );
}
