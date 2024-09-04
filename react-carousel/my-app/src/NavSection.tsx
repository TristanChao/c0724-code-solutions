import { IoRadioButtonOff, IoRadioButtonOn } from 'react-icons/io5';

type Props = {
  currentIndex: number;
  number: number;
  onNavClick: (index: number) => void;
};
export function NavSection({ currentIndex, number, onNavClick }: Props) {
  const buttonArray: JSX.Element[] = [];

  const radioStyle = {
    width: '20px',
    height: '20px',
  };

  for (let i = 0; i < number; i++) {
    const button = (
      <button className="nav-button" key={i} onClick={() => onNavClick(i)}>
        {currentIndex === i ? (
          <IoRadioButtonOn style={radioStyle} />
        ) : (
          <IoRadioButtonOff style={radioStyle} />
        )}
      </button>
    );
    buttonArray.push(button);
  }

  return <div className="nav-container">{buttonArray}</div>;
}
