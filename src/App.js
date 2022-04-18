import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./styles/common.css";
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Header, null),
        React.createElement(Section, null),
        React.createElement(Footer, null)));
}
export default App;
