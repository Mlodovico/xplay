import React from "react";

import {
  Card,
  MusicTitle,
  ImageContainer,
  DescriptionContainer,
  PodCastImage,
} from "./styles";

import Image from "next/image";

export const PodCastCard = ({ img, title }) => {
  return (
    <Card>
      <ImageContainer>
        <PodCastImage src={img} alt={title} />
      </ImageContainer>
      <DescriptionContainer>
        <MusicTitle>{title}</MusicTitle>
      </DescriptionContainer>
    </Card>
  );
};
