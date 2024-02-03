import {
  Card,
  MusicTitle,
  MusicSubtitle,
  ImageContainer,
  DescriptionContainer,
} from "./styles";

import Image from "next/image";

export const PodCastCard = ({ img, title, artist, category, index }) => {
  return (
    <Card>
      <ImageContainer>
        {/* <Image src={img} alt={title} /> */}
      </ImageContainer>
      <DescriptionContainer>
        <MusicTitle>{title}</MusicTitle>
      </DescriptionContainer>
    </Card>
  );
};
