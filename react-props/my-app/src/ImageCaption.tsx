type Props = {
  textContent: string;
};

export function ImageCaption({ textContent }: Props) {
  return (
    <div>
      <h3>{textContent}</h3>
    </div>
  );
}
