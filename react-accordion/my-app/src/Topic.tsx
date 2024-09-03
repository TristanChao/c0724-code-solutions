type Props = {
  id: number;
  currentDisplayId: number | undefined;
  title: string;
  content: string;
  isDisplayed: boolean;
  onHeaderClick: (id: number | undefined) => void;
};
export function Topic({
  id,
  currentDisplayId,
  title,
  onHeaderClick,
  isDisplayed,
  content,
}: Props) {
  return (
    <>
      <div
        onClick={() => onHeaderClick(currentDisplayId === id ? undefined : id)}
        className="header">
        {title}
      </div>
      {isDisplayed ? <div>{content}</div> : null}
    </>
  );
}
