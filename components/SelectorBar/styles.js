import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border-radius: 18px;
  background-color: #00000033;
  max-width: fit-content;
`;

export const Button = styled.button`
  height: 100%;
  color: #fff;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 18px;

  ${(props) =>
    props.selected &&
    `
    background-color: #00000099;
    `}
`;
