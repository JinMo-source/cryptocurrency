import React from "react";
import Coingrapes from "./Coingrapes";
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
var GrapeCotainer = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  position: fixed;\n  top: 50px;\n  left: 25%;\n  right: 0;\n  bottom: 0;\n",
      ],
      [
        "\n  position: fixed;\n  top: 50px;\n  left: 25%;\n  right: 0;\n  bottom: 0;\n",
      ]
    ))
);
function CoinDetail() {
  return React.createElement(
    GrapeCotainer,
    null,
    React.createElement(Coingrapes, null)
  );
}
export default CoinDetail;
var templateObject_1;
