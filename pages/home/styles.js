import styled from 'styled-components'

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
`

export const ImageLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Legend = styled.p`
    font-size: 21px;
    margin-bottom: 20px;
`;

export const MusicContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 5px;
    margin-top: 30px;
`;

export const ScrollViewContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  display: flex;
`;