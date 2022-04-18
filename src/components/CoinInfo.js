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

var ChartContainer = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  display: flex;\n  padding: 4px 10px;\n  margin-bottom: 5px;\n  z-index: 999;\n  background: #fff;\n  box-shadow: 2px 2px 4px #dee1e7;\n  cursor: pointer;\n",
      ],
      [
        "\n  width: 100%;\n  display: flex;\n  padding: 4px 10px;\n  margin-bottom: 5px;\n  z-index: 999;\n  background: #fff;\n  box-shadow: 2px 2px 4px #dee1e7;\n  cursor: pointer;\n",
      ]
    ))
);
var ImageBox = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ["\n  width: 3vw;\n  display: flex;\n  align-item: center;\n"],
      ["\n  width: 3vw;\n  display: flex;\n  align-item: center;\n"]
    ))
);
var CoinTextBox = styled.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  display: flex;\n  align-item: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 5vw;\n",
      ],
      [
        "\n  display: flex;\n  align-item: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 5vw;\n",
      ]
    ))
);
var CoinText = styled.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  padding: 0.3vw 0;\n  font-size: 14px;\n  text-align: center;\n",
      ],
      [
        "\n  width: 100%;\n  padding: 0.3vw 0;\n  font-size: 14px;\n  text-align: center;\n",
      ]
    ))
);
var CoinPriceInfo = styled.div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  display: inline-flex;\n  align-item: center;\n  justify-content: center;\n",
      ],
      [
        "\n  width: 100%;\n  display: inline-flex;\n  align-item: center;\n  justify-content: center;\n",
      ]
    ))
);
var CoinPrice = styled.div(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        "\n  width: 50%;\n  padding: 1vw 0;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n",
      ],
      [
        "\n  width: 50%;\n  padding: 1vw 0;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n",
      ]
    ))
);
export var CoinInfo = function (_a) {
  var name = _a.name,
    id = _a.id,
    symbol = _a.symbol,
    priceUsd = _a.priceUsd,
    percent = _a.percent;
  if (id == localStorage.getItem("grape")) {
    if (
      priceUsd != localStorage.getItem("priceUsd") &&
      percent != localStorage.getItem("percent")
    ) {
      localStorage.setItem("priceUsd", priceUsd);
      localStorage.setItem("percent", percent);
    }
  }
  var image = "https://assets.coincap.io/assets/icons/".concat(
    symbol.toLowerCase(),
    "@2x.png"
  );
  var percentColor = Number(percent) > 0 ? "up" : "down";
  return React.createElement(
    ChartContainer,
    {
      id: name,
      key: name,
      onClick: function () {
        localStorage.setItem("grape", id);
        localStorage.setItem("priceUsd", priceUsd);
        localStorage.setItem("percent", percent);
        localStorage.setItem("imgSrc", image);
      },
    },
    React.createElement(
      ImageBox,
      { className: name },
      React.createElement("img", {
        className: name,
        src: image,
        alt: name,
        onError: function (event) {
          return (event.target.src =
            "https://assets.coincap.io/assets/icons/btc@2x.png");
        },
      })
    ),
    React.createElement(
      CoinTextBox,
      { className: name },
      React.createElement(
        CoinText,
        { className: name },
        React.createElement(
          "b",
          null,
          name.length > 16 ? "".concat(name.slice(0, 16), "...") : name
        )
      ),
      React.createElement(
        CoinText,
        { className: name },
        React.createElement("b", null, symbol)
      )
    ),
    React.createElement(
      CoinPriceInfo,
      { className: name },
      React.createElement(
        CoinPrice,
        { className: percentColor },
        "$",
        Number(Number(priceUsd).toFixed(2)).toLocaleString()
      ),
      React.createElement(
        CoinPrice,
        { className: percentColor },
        Number(percent).toFixed(2),
        "%"
      )
    )
  );
};
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6;
