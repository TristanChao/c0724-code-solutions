type Props = {
  textContent: string;
};

export function Header({ textContent }: Props) {
  return <h1>{textContent}</h1>;
}
