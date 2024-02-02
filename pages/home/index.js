import React, { useEffect } from "react";
import {Container, Header, Title} from "./styles"
import axios from 'axios';
import Image from 'next/image'

import Logo from "../../public/xplay_logo.svg"
import { SelectorBar } from "../../components/SelectorBar";


export default function Home() {
    useEffect(() => {
        getMusics
    }, [])

    const getMusics = async () => {
        const response = await axios.get('api/get')

        console.log(response)
    }

    return (
        <Container>

            <Title>Boa tarde, Gabriel!</Title>

            <SelectorBar />
        </Container>
    )
}
