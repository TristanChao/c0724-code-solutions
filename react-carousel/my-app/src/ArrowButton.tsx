import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Props = {
  type: 'back' | 'next';
  onArrowClick: () => void;
};
export function ArrowButton({ type, onArrowClick }: Props) {
  return (
    <button className="arrow-button" onClick={onArrowClick}>
      {type === 'back' ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );
}
