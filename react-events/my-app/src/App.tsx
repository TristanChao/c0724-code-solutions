import { useState } from 'react';
import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonLabel = 'Click for Next Image';

export function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % imageSrc.length);
  }

  return (
    <>
      <Header text={headerText} />
      <ImageContainer onImageClick={handleClick} src={imageSrc[index]} />
      <ImageCaption onCaptionClick={handleClick} caption={imageCap[index]} />
      <ImageDescription
        onDescriptionClick={handleClick}
        desc={imageDescrip[index]}
      />
      <ButtonContainer onButtonClick={handleClick} label={buttonLabel} />
    </>
  );
}
