import { useState } from "react";

import { Container, Button } from "./styles";

export const SelectorBar = () => {
  const [typeSelector, setTypeSelector] = useState("music");

  return (
    <Container>
      <Button
        selected={typeSelector === "music"}
        onClick={() => setTypeSelector("music")}
      >
        Musicas
      </Button>
      <Button
        selected={typeSelector === "albums"}
        onClick={() => setTypeSelector("albums")}
      >
        Albuns
      </Button>
      <Button
        selected={typeSelector === "podcasts"}
        onClick={() => setTypeSelector("podcasts")}
      >
        Podcasts
      </Button>
      <Button
        selected={typeSelector === "artists"}
        onClick={() => setTypeSelector("artists")}
      >
        Artistas
      </Button>
    </Container>
  );
};
