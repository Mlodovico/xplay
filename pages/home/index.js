import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Legend, MusicContainer, ScrollViewContainer } from "./styles";

import { SelectorBar } from "../../components/SelectorBar";
import { PodCastCard } from "../../components/PodCastCard";
import { Card } from "../../components/Card";

export default function Home() {
  const [typeSelector, setTypeSelector] = useState("music");
  const [musics, setMusics] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    getMusics();
    getPodcasts()
  }, []);

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


  const getPodcasts = async () => {
    try {
      const response = await axios.get("api/getPodcasts");

      if (response) {
        setPodcasts(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Legend>Boa tarde, Gabriel!</Legend>

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

      <Legend>Feitos para voce!</Legend>

          <ScrollViewContainer>
            {podcasts.length !== 0 ? (
              podcasts.map((podcast, index) => (
                <PodCastCard title={podcast.title} img={podcast.img} />
              ))
            ) : (
              <Legend>Carregando...</Legend>
            )}
          </ScrollViewContainer>
    </Container>
  );
}
