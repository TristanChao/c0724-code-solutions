import { FaSearch } from 'react-icons/fa';

type Props = {
  input: string;
  onInputChange: (value: string) => void;
};

export function SearchBar({ input, onInputChange }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaSearch style={{ marginRight: '5px' }} />
      <input
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        style={{ padding: '5px 10px', width: '400px' }}
      />
    </div>
  );
}
