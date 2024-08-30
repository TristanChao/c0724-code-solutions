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
    setIndex((index - 1 + items.length) % items.length);
  }

  function toNextIndex() {
    setIndex((index + 1) % items.length);
  }

  return (
    <div>
      <h2>{items[index]}</h2>
      <PrevButton onPrevClick={toPrevIndex} />
      <NavSection
        currentIndex={index}
        onNavClick={handleChangeIndex}
        count={items.length}
      />
      <NextButton onNextClick={toNextIndex} />
    </div>
  );
}
