import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  disabled?: boolean
};

export function Button({ title, type = "PRIMARY", disabled, ...rest}: Props) {
  return (
    <Container {...rest} type={type} disabled={disabled}>
      <Title>{title}</Title>
    </Container>
  );
}
