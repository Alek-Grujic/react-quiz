import { useState } from "react";
import heroImg from "./assets/hero.png";
import Header from "./Header.jsx";
import Main from "./MainSec.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
