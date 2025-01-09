import moment from "moment";

import { CellWrapper, RowInCell } from "../../containers/StyledComponents";

function CalendarHeader() {
  return (
    <>
      {" "}
      {[...Array(7)].map((_, i) => (
        <CellWrapper $isHeader key={i}>
          <RowInCell $justifyContent="flex-end" $pr={1}>
            {moment()
              .day(i + 1)
              .format("ddd")}
          </RowInCell>
        </CellWrapper>
      ))}
    </>
  );
}

export { CalendarHeader };
