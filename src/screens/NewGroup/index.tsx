import React, { useState } from "react";
import { Container, Content, Icon } from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigate = useNavigation();

  function handleNew() {
    navigate.navigate("Players", { group });
  }

  return (
    <Container>
      <Header />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
          disabled={!group}
        />
      </Content>
    </Container>
  );
}
