import { AddCircle } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { React } from "react";
import { css } from "@emotion/react";
¡
function App() {
  const buttonStyle = css({
    backGround: "red",
  });

  return (
    <Container>
      <Button variant="contained" endIcon={<AddCircle />} style={buttonStyle}>
        Add
      </Button>

      <hr />
      <br />

      <Typography variant="h4" color="textSecondary">
        All my Todos
      </Typography>


    </Container>
  );
}

export default App;
