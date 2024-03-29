import styled from "styled-components";

export const CardMusic = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  max-width: 300px;
  height: 50px;
  background-color: #001b374a;
  border-radius: 8px;
  margin: 5px;
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 5px;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MusicSubtitle = styled.p`
  font-size: 10px;
  margin: 0;
`;

export const MusicTitle = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const AlbumImage = styled.img`
  width: 48px;
  height: 48px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
