import './ImageContainer.css';

type Props = {
  sourceUrl: string;
};

export function ImageContainer({ sourceUrl }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={sourceUrl} alt="space-image" />
      </div>
    </div>
  );
}
