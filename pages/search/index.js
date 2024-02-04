import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import { Container, SearchInput, SearchInputContainer, Button, Scrollview } from "./styles";

import SearchInpuIcon from "../../public/search_input_icon.svg";
import CloseIcon from "../../public/close_icon.svg";
import { Card } from "../../components/Card";

export default function Search() {
  const [search, setSearch] = useState("");
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  const handleSearch = async (search) => {
    try {
      const response = await axios.get("api/getMusics");

      if (response) {
        const filtered = response.data.filter((music) => {
          return music.title.toLowerCase().includes(search.toLowerCase());
        });
        setMusics(filtered);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SearchInputContainer>
        <Image src={SearchInpuIcon} />
        <SearchInput
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => setSearch("")}>
          <Image src={CloseIcon} />
        </Button>
      </SearchInputContainer>
      <Scrollview>
        {musics.map((music) => (
            <Card key={music.id} img={music.img} title={music.title} artist={music.artist} />
        ))}
      </Scrollview>
    </Container>
  );
}
