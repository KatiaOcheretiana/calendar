import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(236, 237, 237);
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

export const MonthButton = styled(Button)`
  padding: 5px;
  background-color: rgba(192, 189, 189, 0.47);
`;
