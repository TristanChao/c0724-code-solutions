type Props = {
  onCaptionClick: () => void;
  caption: string;
};

export function ImageCaption({ onCaptionClick, caption }: Props) {
  return (
    <div>
      <h3 onClick={onCaptionClick}>{caption}</h3>
    </div>
  );
}
