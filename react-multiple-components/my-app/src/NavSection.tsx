import './NavSection.css';

type Props = {
  currentIndex: number;
  onNavClick: (toIndex: number) => void;
  count: number;
};

export function NavSection({ currentIndex, onNavClick, count }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        className={i === currentIndex ? 'selected' : ''}
        onClick={() => onNavClick(i)}
        key={i}>
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
}
