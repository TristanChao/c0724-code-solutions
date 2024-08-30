type Props = {
  index: string;
};

export function NavButton({ index }: Props) {
  return <button>{index}</button>;
}
