import { NavButton } from './NavButton.tsx';
import { PrevNextButton } from './PrevNextButton.tsx';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <div>
      <h2>{items[0]}</h2>
      <div>
        <PrevNextButton btnType="Prev" />
      </div>
      <NavButton index="0" />
      <NavButton index="1" />
      <NavButton index="2" />
      <NavButton index="3" />
      <NavButton index="4" />
      <NavButton index="5" />
      <div>
        <PrevNextButton btnType="Next" />
      </div>
    </div>
  );
}
