import {
  CardMusic,
  MusicTitle,
  MusicSubtitle,
  ImageContainer,
  DescriptionContainer,
  AlbumImage,
} from "./styles";

export const Card = ({ img, title, artist, category, index }) => {
  return (
    <CardMusic>
      <ImageContainer>
        <AlbumImage src={img} alt={title} />
      </ImageContainer>
      <DescriptionContainer>
        <MusicTitle>
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </MusicTitle>
        <MusicSubtitle>{artist}</MusicSubtitle>
      </DescriptionContainer>
    </CardMusic>
  );
};
