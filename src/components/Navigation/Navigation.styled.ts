import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 5px 10px;
`;

export const MonthAndYear = styled.div`
  display: flex;
  gap: 10px;

  font-weight: 700;
  font-size: 22px;
`;

export const ControlButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(192, 189, 189, 0.47);
  border-radius: 4px;
  border-color: transparent;

  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    background-color: #7aa5d2;
  }
`;

interface MonthButtonPropsType {
  $isPressed?: boolean;
}

export const MonthButton = styled(Button)<MonthButtonPropsType>`
  padding: 5px;
  background-color: ${(props) =>
    props.$isPressed ? "rgb(92, 129, 169)" : "rgba(192, 189, 189, 0.47)"};
`;

export const MonthAndDayButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
