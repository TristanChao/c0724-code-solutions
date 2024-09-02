import { useState } from 'react';
import { QuotesList } from './QuotesList.tsx';
import { SearchBar } from './SearchBar.tsx';

type Props = {
  quotes: string[];
};
export function SearchableList({ quotes }: Props) {
  const [searchInput, setSearchInput] = useState('');

  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <SearchBar input={searchInput} onInputChange={setSearchInput} />
      <QuotesList quotes={filteredQuotes} />
    </div>
  );
}
