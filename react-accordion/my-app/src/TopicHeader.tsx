type Props = {
  id: number;
  currentDisplayId: number | undefined;
  title: string;
  onHeaderClick: (id: number | undefined) => void;
};
export function TopicHeader({
  id,
  currentDisplayId,
  title,
  onHeaderClick,
}: Props) {
  return (
    <div
      onClick={() => onHeaderClick(currentDisplayId === id ? undefined : id)}
      className="header">
      {title}
    </div>
  );
}
