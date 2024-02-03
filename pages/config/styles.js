import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 80px;
  top: 0;
`;

export const ImageLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Title = styled.p`
  font-size: 21px;
`;

export const ConfigContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 5px;
  background: #001b374a 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 6px;
  opacity: 1;
`;
