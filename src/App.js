import { AddCircle } from "@mui/icons-material";
import {
  Button,
  Container,
  Typography,
  ButtonGroup,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { React } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#12EDFF",
    },
    secondary: {
      main: "#ff1744",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button
          variant="contained"
          endIcon={<AddCircle />}
          color="secondary"
          disableElevation
        >
          Add
        </Button>
        <Button
          variant="outlined"
          startIcon={<AddCircle />}
          color="secondary"
          style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
        >
          New button
        </Button>
        <ButtonGroup color="secondary">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </ButtonGroup>

        <hr />
        <br />

        <Typography variant="body2" color="textSecondary">
          Material boilerplate &reg; Ryan
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
