import React from "react";
import { Container, LoadIndicator } from "./styles";


export function Loading() {
  return (
    <Container style={{backgroundColor: '#202024'}}>
      <LoadIndicator />
    </Container>
  );
}
