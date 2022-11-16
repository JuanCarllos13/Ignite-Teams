import React from "react";
import { Container, Icon, Title,  } from "./styles";
import {TouchableOpacityProps} from 'react-native'


type Props = TouchableOpacityProps & {
  title: string
}

export function GroupCard({title, ...reset}: Props) {
  return (
    <Container {...reset}>
      <Icon/>
      <Title>{title}</Title>

    </Container>
  )
}