import { CardMusic, MusicTitle, MusicSubtitle, ImageContainer, DescriptionContainer } from "./styles";

import Image from "next/image";

export const Card = ({ img, title, artist, category, index }) => {
  return (
    <CardMusic>
      <ImageContainer>{/* <Image src={img} /> */}</ImageContainer>
      <DescriptionContainer>
        <MusicTitle>{title}</MusicTitle>
        <MusicSubtitle>{artist}</MusicSubtitle>
      </DescriptionContainer>
    </CardMusic>
  );
};
