import { useState } from 'react';
import { NextButton } from './NextButton.tsx';
import { PrevButton } from './PrevButton.tsx';
import { NavSection } from './NavSection.tsx';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);

  function handleChangeIndex(toIndex: number) {
    setIndex(toIndex);
  }

  function toPrevIndex() {
    if (index - 1 < 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function toNextIndex() {
    setIndex((index + 1) % items.length);
  }

  return (
    <div>
      <h2>{items[index]}</h2>
      <PrevButton onPrevClick={toPrevIndex} />
      <NavSection onNavClick={handleChangeIndex} count={items.length} />
      <NextButton onNextClick={toNextIndex} />
    </div>
  );
}
