import { FC } from "react";

import "./styles.css";

interface SearchBarProps {
  searchKey: string;
  setSearchKey: (key: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchKey, setSearchKey }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  const handleClear = () => {
    setSearchKey("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={searchKey}
        onChange={handleChange}
        placeholder="Search..."
        className="input-field"
      />
      {searchKey && (
        <button className="clear-button" onClick={handleClear}>
          x
        </button>
      )}
    </div>
  );
};

export default SearchBar;
