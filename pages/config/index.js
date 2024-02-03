import { useState } from "react";
import {Switch} from "@nextui-org/switch";

import { Container, Title, ConfigContainer, Card } from "./styles";

export default function Config() {
  const [config, setConfig] = useState({});

  return (
    <Container>
      <Title>Configurações</Title>

      <ConfigContainer>
        <Card>
          <span>Auto play</span>
          <Switch defaultSelected size="sm" />
        </Card>
        <Card>
          <span>Mix Audio Types</span>
          <Switch defaultSelected size="sm" />
        </Card>
        <Card>
          <span>Enable Week Discovery</span>
          <Switch defaultSelected size="sm"/>
        </Card>
        <Card>
          <span>Enable Auto DJ</span>
          <Switch defaultSelected size="sm" />
        </Card>
        <Card>
          <span>Enable 3D Audio</span>
          <Switch defaultSelected size="sm" />
        </Card>
        <Card>
          <span>Enable Auto Sync</span>
          <Switch defaultSelected size="sm" />
        </Card>
      </ConfigContainer>
    </Container>
  );
}
