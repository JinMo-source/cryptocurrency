import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

import "./styles/common.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
