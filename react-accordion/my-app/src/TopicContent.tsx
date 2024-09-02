type Props = {
  isDisplayed: boolean;
  content: string;
};
export function TopicContent({ isDisplayed, content }: Props) {
  return isDisplayed ? <div>{content}</div> : undefined;
}
