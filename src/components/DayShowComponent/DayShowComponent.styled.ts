import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 100px;
  padding: 0 100px;
  margin: 50px 0;
`;

export const TaskItemWrapper = styled.button`
  position: relative;
  left: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: unset;
  background: unset;
  color: black;
  cursor: pointer;
  margin: 0;
  padding: 2px 5px;
  text-align: left;
  background-color: white;
  border-radius: 6px;
  /* width: 99%; */

  font-size: 16px;

  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const ScaleWraper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4px;
`;

export const ScaleCellWrapper = styled.div`
  flex-grow: 1;
  position: relative;

  margin-left: 32px;

  border-bottom: 1px solid #464648;
`;

export const ScaleCellTimeWrapper = styled.div`
  position: absolute;
  left: -24px;
  top: -6px;
  font-size: 10px;
`;

export const SecondColumn = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;

  align-items: end;
`;

export const ScaleCellEventWrapper = styled.div`
  min-height: 22px;
  display: flex;
  gap: 12px;
`;

export const TaskFormWrapper = styled.div`
  background-color: white;
  padding: 20px 10px;
  border-radius: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const NoTaskMsg = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  background-color: #5da9e9;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  border-color: transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #003f91;
  }
`;
