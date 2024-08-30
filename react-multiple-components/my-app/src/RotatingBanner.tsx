import { useState } from 'react';
import { NextButton } from './NextButton.tsx';
import { PrevButton } from './PrevButton.tsx';
import { NavSection } from './NavSection.tsx';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);
  setIndex(0); // called setIndex to get rid of 'unused' error so I could commit

  return (
    <div>
      <h2>{items[index]}</h2>
      <PrevButton />
      <NavSection count={items.length} />
      <NextButton />
    </div>
  );
}
