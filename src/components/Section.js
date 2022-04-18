import React from "react";
import CoinDetail from "../components/CoinDetail";
import Coinchart from "./Coinchart";
import styled from "styled-components";

var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };

var SectionStyled = styled.section(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  position: fixed;\n  top: 55px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n",
      ],
      [
        "\n  width: 100%;\n  position: fixed;\n  top: 55px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n",
      ]
    ))
);
var MainContainer = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  width: 1680px;\n  display: flex;\n  padding: 10px 0;\n  margin: 0 auto;\n  position: fixed;\n  top: 55px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n",
      ],
      [
        "\n  width: 1680px;\n  display: flex;\n  padding: 10px 0;\n  margin: 0 auto;\n  position: fixed;\n  top: 55px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n",
      ]
    ))
);
var ChartContanier = styled.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  width: 25%;\n  position: fixed;\n  top: 55px;\n  bottom: 41px;\n  left: 0;\n  right: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n",
      ],
      [
        "\n  width: 25%;\n  position: fixed;\n  top: 55px;\n  bottom: 41px;\n  left: 0;\n  right: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n",
      ]
    ))
);
var InfoContainer = styled.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  width: 75%;\n  position: fixed;\n  top: 55px;\n  bottom: 0;\n  right: 0;\n  overflow-y: scroll;\n",
      ],
      [
        "\n  width: 75%;\n  position: fixed;\n  top: 55px;\n  bottom: 0;\n  right: 0;\n  overflow-y: scroll;\n",
      ]
    ))
);
function Section() {
  return React.createElement(
    SectionStyled,
    null,
    React.createElement(
      MainContainer,
      null,
      React.createElement(
        ChartContanier,
        null,
        React.createElement(Coinchart, null)
      ),
      React.createElement(
        InfoContainer,
        null,
        React.createElement(CoinDetail, null)
      )
    )
  );
}
export default Section;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
