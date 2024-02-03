import React, { useEffect, useState } from "react";
import axios from "axios";

import { MusicContainer, Legend, Container } from "../home/styles";

import { SelectorBar } from "../../components/SelectorBar";
import { Card } from "../../components/Card";

export default function Library() {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    getMusics();
  }, [])

  const getMusics = async () => {
    try {
      const response = await axios.get("api/getMusics");

      if (response) {
        setMusics(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
        <Legend>Sua Biblioteca</Legend>
        
      <SelectorBar />

      <MusicContainer>
        {musics.length !== 0 ? (
          musics.map((music, index) => (
            <Card
              key={index}
              img={music.img}
              title={music.title}
              artist={music.artist}
              category={music.category}
            />
          ))
        ) : (
          <Legend>Carregando...</Legend>
        )}
      </MusicContainer>
    </Container>
  );
}
