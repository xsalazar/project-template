import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Body() {
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
