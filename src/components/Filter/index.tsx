import { useState } from "react";

import { useCalendarContext } from "../../CalendarContext";
import {
  Button,
  ButtonsWrapper,
  CancelButton,
  Form,
  TitleInput,
} from "./Filter.styled";

const Filter = () => {
  const { filterTasks, clearFilter } = useCalendarContext();

  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = (event: React.FormEvent) => {
    event.preventDefault();
    filterTasks(searchText);
  };

  const handleClearClick = () => {
    setSearchText("");
    clearFilter();
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
