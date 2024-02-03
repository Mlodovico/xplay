import {useState} from "react";

import {Container, Title, ConfigContainer} from "./styles"

export default function Config() {
    const [config, setConfig] = useState({})

    return (
        <Container>

            <Title>Configurações</Title>

            <ConfigContainer>
                <span>Auto play</span>
            </ConfigContainer>

        </Container>
    )
}