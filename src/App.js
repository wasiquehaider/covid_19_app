import React from "react";
import "./App.css";
import Stats from "./components/Stats";
import CountrySelector from "./components/CountrySelector";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "#008fff", padding: "2rem" }}
    >
      <h1 style={{ color: "#ffffff", textAlign: "center" }}>Global Cases</h1>
      <Stats url={"https://covid19.mathdro.id/api"} />
      <CountrySelector />
    </Container>
  );
}

export default App;
