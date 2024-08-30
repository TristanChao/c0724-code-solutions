type Props = {
  onNavClick: (toIndex: number) => void;
  count: number;
};

export function NavSection({ onNavClick, count }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button onClick={() => onNavClick(i)} key={i}>
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
}
