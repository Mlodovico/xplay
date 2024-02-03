import React, { useEffect, useState } from "react";
import {Container, Legend, MusicContainer} from "./styles"
import axios from 'axios';
import Image from 'next/image'

import Logo from "../../public/xplay_logo.svg"
import { SelectorBar } from "../../components/SelectorBar";


export default function Home() {
    const [typeSelector, setTypeSelector] = useState('music')

    useEffect(() => {
        getMusics
    }, [])

    const getMusics = async () => {
        const response = await axios.get('api/get')

        console.log(response)
    }

    return (
        <Container>

            <Legend>Boa tarde, Gabriel!</Legend>

            <SelectorBar />

            <MusicContainer>

            </MusicContainer>

            <Legend>Feitos para voce</Legend>
        </Container>
    )
}
