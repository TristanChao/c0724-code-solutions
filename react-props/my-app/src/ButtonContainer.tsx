type Props = {
  textContent: string;
};

export function ButtonContainer({ textContent }: Props) {
  return (
    <div>
      <button>{textContent}</button>
    </div>
  );
}
