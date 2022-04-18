import React from "react";
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

var FooterMainCotainer = styled.footer(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  background: #fff;\n  position: fixed;\n  padding: 5px;\n  text-align: center;\n  bottom: 0;\n  font-weight: bold;\n  box-shadow: 2px 2px 4px #dee1e7;\n",
      ],
      [
        "\n  width: 100%;\n  background: #fff;\n  position: fixed;\n  padding: 5px;\n  text-align: center;\n  bottom: 0;\n  font-weight: bold;\n  box-shadow: 2px 2px 4px #dee1e7;\n",
      ]
    ))
);
function Footer() {
  return React.createElement(
    FooterMainCotainer,
    null,
    "ParkJinMo CRYPTOCURRENCY Portfolio"
  );
}
export default Footer;
var templateObject_1;
