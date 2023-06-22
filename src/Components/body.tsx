import { Container, Typography } from "@mui/material";
import React from "react";

export default class Body extends React.Component {
  render() {
    return (
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "1",
        }}
      >
        <Typography variant="body1" align="center">
          👋 This is a basic Typescript React template!
        </Typography>
      </Container>
    );
  }
}
