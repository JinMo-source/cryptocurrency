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

var HeaderContainer = styled.header(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  min-height: 50px;\n  background: #fff;\n  box-shadow: 2px 2px 4px #dee1e7;\n  box-sizing: border-box;\n",
      ],
      [
        "\n  width: 100%;\n  min-height: 50px;\n  background: #fff;\n  box-shadow: 2px 2px 4px #dee1e7;\n  box-sizing: border-box;\n",
      ]
    ))
);
var MainContainer = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  width: 1680px;\n  display: flex;\n  padding: 10px 0;\n  box-sizing: border-box;\n  margin: 0 auto;\n",
      ],
      [
        "\n  width: 1680px;\n  display: flex;\n  padding: 10px 0;\n  box-sizing: border-box;\n  margin: 0 auto;\n",
      ]
    ))
);
var Logo = styled.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  width: 10vw;\n  padding: 8px 10px;\n  font-size: 15px;\n  color: blue;\n  font-weight: bold;\n  box-sizing: border-box;\n",
      ],
      [
        "\n  width: 10vw;\n  padding: 8px 10px;\n  font-size: 15px;\n  color: blue;\n  font-weight: bold;\n  box-sizing: border-box;\n",
      ]
    ))
);
var Navigation = styled.nav(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  width: 40vw;\n  display: inline-flex;\n  text-align: center;\n  flex: none;\n",
      ],
      [
        "\n  width: 40vw;\n  display: inline-flex;\n  text-align: center;\n  flex: none;\n",
      ]
    ))
);
var Navi = styled.div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        "\n  box-sizing: border-box;\n  padding: 8px 0;\n  width: 6vw;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n",
      ],
      [
        "\n  box-sizing: border-box;\n  padding: 8px 0;\n  width: 6vw;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n",
      ]
    ))
);
var HeaderInfo = function (_a) {
  var logo = _a.logo,
    nav = _a.nav;
  return React.createElement(
    HeaderContainer,
    null,
    React.createElement(
      MainContainer,
      null,
      React.createElement(Logo, null, logo),
      React.createElement(
        Navigation,
        null,
        nav.map(function (name, id) {
          return React.createElement(
            Navi,
            { id: "navigation-".concat(id), key: "navigation-".concat(name) },
            name
          );
        })
      )
    )
  );
};
export default HeaderInfo;
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5;
