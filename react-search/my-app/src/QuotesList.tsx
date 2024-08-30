type Props = {
  quotes: string[];
};

export function QuotesList({ quotes }: Props) {
  const quoteListItems = [];
  for (let i = 0; i < quotes.length; i++) {
    quoteListItems.push(<li key={i}>{quotes[i]}</li>);
  }

  return <ul>{quoteListItems}</ul>;
}
