import React, { useState, useCallback } from "react";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";

import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { GroupsGetAll } from "@storage/group/groupsGetAll";
import { LoadIndicator } from "@components/Loading/styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigate = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await GroupsGetAll();

      setGroups(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigate.navigate("Players", { group });
  }

  function handleNewGroup() {
    navigate.navigate("NewGroup");
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight subTitle="Jogue com a sua turma" title="Turmas" />

      {isLoading ? (
        <LoadIndicator />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <ListEmpty message="Lista Vazia" />}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
