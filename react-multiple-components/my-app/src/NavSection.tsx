type Props = {
  count: number;
};

export function NavSection({ count }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<button>{i}</button>);
  }

  return <div>{buttons}</div>;
}
