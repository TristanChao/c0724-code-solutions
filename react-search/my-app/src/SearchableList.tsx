import { useState } from 'react';
import { QuotesList } from './QuotesList.tsx';
import { SearchBar } from './SearchBar.tsx';

type Props = {
  quotes: string[];
};
export function SearchableList({ quotes }: Props) {
  const [searchInput, setSearchInput] = useState('');

  const filteredQuotes: string[] = [];
  quotes.forEach((quote) => {
    if (quote.toLowerCase().includes(searchInput.toLowerCase())) {
      filteredQuotes.push(quote);
    }
  });

  return (
    <div>
      <SearchBar input={searchInput} onInputChange={setSearchInput} />
      {filteredQuotes.length ? (
        <QuotesList quotes={filteredQuotes} />
      ) : (
        <p>No items match the filter.</p>
      )}
    </div>
  );
}
