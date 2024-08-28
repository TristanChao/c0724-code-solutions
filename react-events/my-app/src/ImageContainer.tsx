import './ImageContainer.css';

type Props = {
  onImageClick: () => void;
  src: string;
};

export function ImageContainer({ onImageClick, src }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={onImageClick}
          className="image-fill"
          src={src}
          alt="space-image"
        />
      </div>
    </div>
  );
}
