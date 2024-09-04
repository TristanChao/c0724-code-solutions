import { useEffect, useState } from 'react';
import { ArrowButton } from './ArrowButton';
import { NavSection } from './NavSection';
import { RotatingImage } from './RotatingImage';

type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};
export function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  console.log(index);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [index, images.length]);

  return (
    <div style={{ width: '600px' }}>
      <div className="container">
        <ArrowButton
          type="back"
          onArrowClick={() =>
            setIndex((index - 1 + images.length) % images.length)
          }
        />
        <RotatingImage image={images[index]} />
        <ArrowButton
          type="next"
          onArrowClick={() => setIndex((index + 1) % images.length)}
        />
      </div>
      <NavSection
        currentIndex={index}
        number={images.length}
        onNavClick={setIndex}
      />
    </div>
  );
}
