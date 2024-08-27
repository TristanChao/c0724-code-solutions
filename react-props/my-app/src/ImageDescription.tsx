type Props = {
  textContent: string;
};

export function ImageDescription({ textContent }: Props) {
  return (
    <div>
      <p>{textContent}</p>
    </div>
  );
}
