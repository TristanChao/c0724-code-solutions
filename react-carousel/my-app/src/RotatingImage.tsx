type Image = {
  src: string;
  alt: string;
};

type Props = {
  image: Image;
};
export function RotatingImage({ image }: Props) {
  return (
    <div>
      <img src={image.src} alt={image.alt} style={{ maxHeight: '400px' }} />
    </div>
  );
}
