import styled from "styled-components";

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

export const TitleInput = styled.input`
  padding: 4px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: #464648;
  color: #464648;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  background-color: #5da9e9;
  color: white;
  height: 40px;
  width: 100px;
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
