import { useState } from "react";

interface FilterProps {
  onSearch: (text: string) => void;
  onClearFilter: () => void;
}

const Filter = ({ onSearch, onClearFilter }: FilterProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchText);
  };

  const handleClearClick = () => {
    setSearchText("");
    onClearFilter();
  };

  return (
    <form onSubmit={handleSearchClick}>
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search tasks"
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClearClick}>
        Clear
      </button>
    </form>
  );
};

export { Filter };
