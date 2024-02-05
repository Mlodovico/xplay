import React, { useState } from "react";
import { Switch} from "@nextui-org/react";

import { Container, Title, ConfigContainer, Card } from "./styles";

export default function Config() {
  const [config, setConfig] = useState({});

  return (
    <Container>
      <Title>Configurações</Title>

      <ConfigContainer>
        <Card>
          <span>Auto play</span>
          <Switch hecked={false} size="sm" />
        </Card>
        <Card>
          <span>Mix Audio Types</span>
          <Switch checked={false} size="sm" />
        </Card>
        <Card>
          <span>Enable Week Discovery</span>
          <Switch checked={false} size="sm" />
        </Card>
        <Card>
          <span>Enable Auto DJ</span>
          <Switch checked={false} size="sm" />
        </Card>
        <Card>
          <span>Enable 3D Audio</span>
          <Switch checked={false} size="sm" />
        </Card>
        <Card>
          <span>Enable Auto Sync</span>
          <Switch checked={false} size="sm" />
        </Card>
      </ConfigContainer>
    </Container>
  );
}
