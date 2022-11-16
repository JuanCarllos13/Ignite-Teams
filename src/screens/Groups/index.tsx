import React, { useState } from "react";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";

import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState([]);

  return (
    <Container>
      <Header />
      <Highlight subTitle="Jogue com a sua turma" title="Turmas" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Lista Vazia" />}
      />


      <Button
      title="Adicionar"
      />
    </Container>
  );
}
