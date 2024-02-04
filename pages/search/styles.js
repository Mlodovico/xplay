import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 30px;
  width: 85%;
  background-color: transparent;
  border: none;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00000033;
  border: none;
  border-radius: 18px;
  padding: 3px 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`
export const Scrollview = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
