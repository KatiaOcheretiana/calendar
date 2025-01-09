import { useState } from "react";

import {
  Button,
  ButtonsWrapper,
  CancelButton,
  Form,
  TitleInput,
} from "./Filter.styled";

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
    <Form onSubmit={handleSearchClick}>
      <TitleInput
        type="text"
        name="search"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search tasks"
      />
      <ButtonsWrapper>
        <Button type="submit">Search</Button>
        <CancelButton type="button" onClick={handleClearClick}>
          Clear
        </CancelButton>
      </ButtonsWrapper>
    </Form>
  );
};

export { Filter };
