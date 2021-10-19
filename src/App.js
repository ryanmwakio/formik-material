import { AddCircle } from "@mui/icons-material";
import { Button, Container, Typography, ButtonGroup } from "@mui/material";
import { React } from "react";
import { css } from "@emotion/react";

function App() {
  const buttonStyle = css({
    backGround: "red",
  });

  const time = new Date();

  const now = time.getFullYear();
  console.log(now);

  return (
    <Container>
      <Button
        variant="contained"
        endIcon={<AddCircle />}
        style={buttonStyle}
        color="secondary"
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

      <Typography variant="h4" color="textSecondary">
        Boilerplate by Ryan
      </Typography>
    </Container>
  );
}

export default App;
