type Props = {
  onDescriptionClick: () => void;
  desc: string;
};

export function ImageDescription({ onDescriptionClick, desc }: Props) {
  return (
    <div>
      <p onClick={onDescriptionClick}>{desc}</p>
    </div>
  );
}
