import React, { useState } from "react";

import { Container, Title, ConfigContainer, Card } from "./styles";

import { ToggleSwitch } from "../../components/ToggleSwitch";

export default function Config() {
  const [config, setConfig] = useState({
    autoPlay: false,
    mixAudioTypes: false,
    enableWeekDiscovery: false,
    enableAutoDJ: false,
    enable3DAudio: false,
    enableAutoSync: false,
  });

  const handleCheck = (value) => {
    switch (value) {
      case "autoPlay":
        setConfig({ ...config, autoPlay: !config.autoPlay });
        break;
      case "mixAudioTypes":
        setConfig({ ...config, mixAudioTypes: !config.mixAudioTypes });
        break;
      case "enableWeekDiscovery":
        setConfig({
          ...config,
          enableWeekDiscovery: !config.enableWeekDiscovery,
        });
        break;
      case "enableAutoDJ":
        setConfig({ ...config, enableAutoDJ: !config.enableAutoDJ });
        break;
      case "enable3DAudio":
        setConfig({ ...config, enable3DAudio: !config.enable3DAudio });
        break;
      case "enableAutoSync":
        setConfig({ ...config, enableAutoSync: !config.enableAutoSync });
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Title>Configurações</Title>

      <ConfigContainer>
        <Card>
          <span>Auto play</span>
          <ToggleSwitch
            checked={config.autoPlay}
            onClick={() => handleCheck("autoPlay")}
            id={"autoPlay"}
          />
        </Card>
        <Card>
          <span>Mix Audio Types</span>
          <ToggleSwitch
            checked={config.mixAudioTypes}
            onClick={() => handleCheck("mixAudioTypes")}
            id={"mixAudioTypes"}
          />
        </Card>
        <Card>
          <span>Enable Week Discovery</span>
          <ToggleSwitch
            checked={config.enableWeekDiscovery}
            onClick={() => handleCheck("enableWeekDiscovery")}
            id={"enableWeekDiscovery"}
          />
        </Card>
        <Card>
          <span>Enable Auto DJ</span>
          <ToggleSwitch
            checked={config.enableAutoDJ}
            onClick={() => handleCheck("enableAutoDJ")}
            id={"enableAutoDJ"}
          />
        </Card>
        <Card>
          <span>Enable 3D Audio</span>
          <ToggleSwitch
            checked={config.enable3DAudio}
            onClick={() => handleCheck("enable3DAudio")}
            id={"enable3DAudio"}
          />
        </Card>
        <Card>
          <span>Enable Auto Sync</span>
          <ToggleSwitch
            checked={config.enableAutoSync}
            onClick={() => handleCheck("enableAutoSync")}
            id={"enableAutoSync"}
          />
        </Card>
      </ConfigContainer>
    </Container>
  );
}
