type Props = {
  btnType: string;
};

export function PrevNextButton({ btnType }: Props) {
  return <button>{btnType}</button>;
}
