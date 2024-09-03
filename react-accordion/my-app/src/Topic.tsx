type Props = {
  id: number;
  title: string;
  content: string;
  isDisplayed: boolean;
  onHeaderClick: (id: number | undefined) => void;
};
export function Topic({
  id,
  title,
  onHeaderClick,
  isDisplayed,
  content,
}: Props) {
  return (
    <>
      <div
        onClick={() => onHeaderClick(isDisplayed ? undefined : id)}
        className="header">
        {title}
      </div>
      {isDisplayed && <div>{content}</div>}
    </>
  );
}
