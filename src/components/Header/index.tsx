import React from "react";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import LogoImg from "@assets/logo.png";

import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigate = useNavigation();

  function handleGoBack() {
    navigate.navigate("Groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Container>
  );
}
