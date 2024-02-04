import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Container, Button } from "./styles";

import Home from "../../public/home_icon.svg";
import Config from "../../public/config_icon.svg";
import Search from "../../public/search_icon.svg";
import Library from "../../public/library_icon.svg";

export const MenuBar = () => {
  return (
    <Container>
      <Button>
        <Link href="/home">
          <Image src={Home} />
        </Link>
      </Button>
      <Button>
        <Link href="/search">
          <Image src={Search} />
        </Link>
      </Button>
      <Button>
        <Link href="/library">
          <Image src={Library} />
        </Link>
      </Button>
      <Button>
        <Link href="/config">
          <Image src={Config} />
        </Link>
      </Button>
    </Container>
  );
};
