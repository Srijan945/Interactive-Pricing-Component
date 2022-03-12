import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div className="appContainer">
      <div className="app">
        <Heading />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
