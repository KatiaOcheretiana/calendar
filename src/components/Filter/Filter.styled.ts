import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const TitleInput = styled.input`
  padding: 4px 14px;
  font-size: 0.85rem;
  width: 200px;
  border: #464648;
  color: #464648;
  outline: unset;
  background-color: transparent;
  border-bottom: 1px solid #464648;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  background-color: #5da9e9;
  color: white;
  padding: 4px 10px;

  border-radius: 6px;
  border-color: transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #003f91;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #db222b9d;

  &:hover {
    background-color: #c32530;
  }
`;
