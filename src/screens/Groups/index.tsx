import React, { useState } from "react";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";

import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigation();

  function handleNewGroup() {
    navigate.navigate("NewGroup");
  }

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

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
