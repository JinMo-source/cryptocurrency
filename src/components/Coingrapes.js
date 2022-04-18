import React from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };

var GrapeMainContainer = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ["\n  width: 100%;\n"],
      ["\n  width: 100%;\n"]
    ))
);
var CoinInfoContainer = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  box-shadow: 2px 2px 4px #dee1e7;\n  padding: 5px 10px;\n  margin-top 11px;\n",
      ],
      [
        "\n  width: 100%;\n  box-shadow: 2px 2px 4px #dee1e7;\n  padding: 5px 10px;\n  margin-top 11px;\n",
      ]
    ))
);
var CoinTitle = styled.h2(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  background: #fff;\n  width: 100%;\n  padding: 10px 0 6px 20px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 2px 2px 4px #dee1e7;\n  position: relative;\n",
      ],
      [
        "\n  background: #fff;\n  width: 100%;\n  padding: 10px 0 6px 20px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 2px 2px 4px #dee1e7;\n  position: relative;\n",
      ]
    ))
);
var CoinPriceContainer = styled.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  padding: 4px 20px;\n  display: flex;\n  background: #fff;\n  margin-top: 5px;\n  box-shadow: 2px 2px 4px #dee1e7;\n",
      ],
      [
        "\n  width: 100%;\n  padding: 4px 20px;\n  display: flex;\n  background: #fff;\n  margin-top: 5px;\n  box-shadow: 2px 2px 4px #dee1e7;\n",
      ]
    ))
);
var CoinPriceInfoContainer = styled.div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        "\n  width: 50%;\n  align-item: center;\n  padding: 10px 0 10px 0;\n  display: flex;\n  align-item: center;\n  flex-direction: column;\n",
      ],
      [
        "\n  width: 50%;\n  align-item: center;\n  padding: 10px 0 10px 0;\n  display: flex;\n  align-item: center;\n  flex-direction: column;\n",
      ]
    ))
);
var CoinPrice = styled.div(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  font-size: 32px;\n  padding: 0 0 5px 0;\n  font-weight: bold;\n  box-sizing: border-box;\n",
      ],
      [
        "\n  width: 100%;\n  font-size: 32px;\n  padding: 0 0 5px 0;\n  font-weight: bold;\n  box-sizing: border-box;\n",
      ]
    ))
);
var CoinPercent = styled.div(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 5px;\n",
      ],
      [
        "\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 5px;\n",
      ]
    ))
);
var CoinPriceDayContaniner = styled.div(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        "\n  width: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-item: center;\n  flex-wrap: wrap;\n  padding: 10px 0;\n",
      ],
      [
        "\n  width: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-item: center;\n  flex-wrap: wrap;\n  padding: 10px 0;\n",
      ]
    ))
);
var CoinPriceDay = styled.div(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      [
        "\n  width: 50%;\n  padding-top: 10px;\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: bold;\n  border-bottom: 1px solid #e9ecf1;\n",
      ],
      [
        "\n  width: 50%;\n  padding-top: 10px;\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: bold;\n  border-bottom: 1px solid #e9ecf1;\n",
      ]
    ))
);
var Grape = styled.div(
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      ["\n  width: 100%;\n  height: 30vw;\n  padding: 0 10px;\n"],
      ["\n  width: 100%;\n  height: 30vw;\n  padding: 0 10px;\n"]
    ))
);
var GrapeContainer = styled.div(
  templateObject_11 ||
    (templateObject_11 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  height: 30vw;\n  box-shadow: 2px 2px 4px #dee1e7;\n  padding: 45px 20px 0 0;\n  background: #fff;\n  position: relative;\n",
      ],
      [
        "\n  width: 100%;\n  height: 30vw;\n  box-shadow: 2px 2px 4px #dee1e7;\n  padding: 45px 20px 0 0;\n  background: #fff;\n  position: relative;\n",
      ]
    ))
);
var TitleBox = styled.div(
  templateObject_12 ||
    (templateObject_12 = __makeTemplateObject(
      [
        "\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 6px;\n  display: inline-block;\n",
      ],
      [
        "\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 6px;\n  display: inline-block;\n",
      ]
    ))
);
var ImageBox = styled.img(
  templateObject_13 ||
    (templateObject_13 = __makeTemplateObject(
      [
        "\n  width: 35px;\n  font-size: 25px;\n  font-weight: bold;\n  margin-right: 5px;\n",
      ],
      [
        "\n  width: 35px;\n  font-size: 25px;\n  font-weight: bold;\n  margin-right: 5px;\n",
      ]
    ))
);
var Title = styled.div(
  templateObject_14 ||
    (templateObject_14 = __makeTemplateObject(
      ["\n  margin-left: 40px;\n"],
      ["\n  margin-left: 40px;\n"]
    ))
);
var TimeClickContainer = styled.div(
  templateObject_15 ||
    (templateObject_15 = __makeTemplateObject(
      [
        "\n  display: flex;\n  width: 150px;\n  padding: 10px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n",
      ],
      [
        "\n  display: flex;\n  width: 150px;\n  padding: 10px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n",
      ]
    ))
);
var TimeClickBox = styled.div(
  templateObject_16 ||
    (templateObject_16 = __makeTemplateObject(
      ["\n  margin: 10px;\n  font-size: 17px;\n  font-weight: bold;\n"],
      ["\n  margin: 10px;\n  font-size: 17px;\n  font-weight: bold;\n"]
    ))
);
var IntroContainer = styled.div(
  templateObject_17 ||
    (templateObject_17 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  height: 10vw;\n  margin-top: 10px;\n  padding: 0 10px;\n",
      ],
      [
        "\n  width: 100%;\n  height: 10vw;\n  margin-top: 10px;\n  padding: 0 10px;\n",
      ]
    ))
);
var IntroBox = styled.div(
  templateObject_18 ||
    (templateObject_18 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  height: 12vw;\n  padding: 0 10px;\n  box-shadow: 2px 2px 4px #dee1e7;\n  background: #fff;\n",
      ],
      [
        "\n  width: 100%;\n  height: 12vw;\n  padding: 0 10px;\n  box-shadow: 2px 2px 4px #dee1e7;\n  background: #fff;\n",
      ]
    ))
);
var IntroTitle = styled.h2(
  templateObject_19 ||
    (templateObject_19 = __makeTemplateObject(
      [
        "\n  padding: 10px 0;\n  font-size: 17px;\n  color: blue;\n  font-weight: bold;\n",
      ],
      [
        "\n  padding: 10px 0;\n  font-size: 17px;\n  color: blue;\n  font-weight: bold;\n",
      ]
    ))
);
var IntroText = styled.p(
  templateObject_20 ||
    (templateObject_20 = __makeTemplateObject(
      ["\n  font-size: 14px;\n  line-height: 30px;\n"],
      ["\n  font-size: 14px;\n  line-height: 30px;\n"]
    ))
);
var Coingrapes = function () {
  var _a = useState([]),
    detail = _a[0],
    setDetail = _a[1];
  var _b = useState(true),
    loading = _b[0],
    setLoading = _b[1];
  var _c = useState("d1"),
    grapeTime = _c[0],
    setGrapeTime = _c[1];
  var coinName =
    localStorage.getItem("grape") == null
      ? "bitcoin"
      : localStorage.getItem("grape");
  var coinPrice =
    Number(localStorage.getItem("priceUsd")) == 0
      ? 80000
      : Number(localStorage.getItem("priceUsd"));
  var timestemp = new Date().getTime();
  var coinPercent = Number(localStorage.getItem("percent"));
  var coinImage = localStorage.getItem("imgSrc");
  var percentColor = Number(coinPercent) > 0 ? "up" : "down";
  var timestempStart = timestemp - 1000000000;
  var timeCheck = function (e) {
    var time = e.target.innerText;
    switch (time) {
      case "D1":
        timestempStart = timestemp - 1000000000;
        break;
      case "H2":
        timestempStart = timestemp - 120000000;
        break;
      case "H1":
        timestempStart = timestemp - 36000000;
        break;
    }
    setGrapeTime(time);
  };
  useEffect(function () {
    var grapeURL = "https://api.coincap.io/v2/assets/".concat(
      coinName,
      "/history"
    );
    var coinData = new Promise(function (resolve, reject) {
      return __awaiter(void 0, void 0, void 0, function () {
        var response, ex_1, json;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              response = null;
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [
                4 /*yield*/,
                axios.get(grapeURL, {
                  params: {
                    interval: "".concat(grapeTime.toLowerCase()),
                    start: "".concat(timestempStart),
                    end: "".concat(timestemp),
                  },
                }),
              ];
            case 2:
              response = _a.sent();
              return [3 /*break*/, 4];
            case 3:
              ex_1 = _a.sent();
              response = null;
              // error
              console.log(ex_1);
              reject(ex_1);
              return [3 /*break*/, 4];
            case 4:
              if (response) {
                json = response.data;
                setLoading(false);
                // console.log(json.data);
                setDetail(json.data);
                resolve(json);
              }
              return [2 /*return*/];
          }
        });
      });
    });
  });
  var coinDay = detail.map(function (data) {
    var month = data.date.split("T")[0].split("-")[1];
    var day = data.date.split("T")[0].split("-")[2];
    var hour = data.date.split("T")[1].split(":");
    var currentXGrapes = "".concat(month, ".").concat(day);
    switch (grapeTime) {
      case "D1":
        currentXGrapes = "".concat(month, ".").concat(day);
        break;
      case "H2":
        currentXGrapes = "T".concat(hour[0], ":").concat(hour[1]);
        break;
      case "H1":
        currentXGrapes = "T".concat(hour[0], ":").concat(hour[1]);
        break;
    }
    return {
      x: currentXGrapes,
      // `${month}.${day}`,
      y: Number(data.priceUsd).toFixed(1),
    };
  });
  var data = [
    {
      id: "".concat(coinName),
      data: coinDay,
    },
  ];
  return React.createElement(
    GrapeMainContainer,
    null,
    loading
      ? React.createElement(
          "div",
          null,
          React.createElement("span", null, "Loading...")
        )
      : React.createElement(
          "div",
          null,
          React.createElement(
            CoinInfoContainer,
            null,
            React.createElement(
              CoinTitle,
              null,
              React.createElement(
                TitleBox,
                null,
                React.createElement(ImageBox, { src: coinImage })
              ),
              React.createElement(
                Title,
                null,
                coinName === null || coinName === void 0
                  ? void 0
                  : coinName.toUpperCase()
              )
            ),
            React.createElement(
              CoinPriceContainer,
              null,
              React.createElement(
                CoinPriceInfoContainer,
                null,
                React.createElement(
                  CoinPrice,
                  { className: percentColor },
                  Number(Number(coinPrice).toFixed(2)).toLocaleString(),
                  " USD"
                ),
                React.createElement(
                  CoinPercent,
                  { className: percentColor },
                  "\uC804\uC77C \uB300\uBE44 ",
                  coinPercent.toFixed(2),
                  "%"
                )
              ),
              React.createElement(
                CoinPriceDayContaniner,
                null,
                React.createElement(CoinPriceDay, null, "\uACE0\uAC00"),
                React.createElement(
                  CoinPriceDay,
                  null,
                  "\uAC70\uB798\uB7C9(24H)"
                ),
                React.createElement(CoinPriceDay, null, "\uC800\uAC00\u001E"),
                React.createElement(
                  CoinPriceDay,
                  null,
                  "\uAC70\uB798\uB300\uAE08(24H)"
                )
              )
            )
          ),
          React.createElement(
            Grape,
            null,
            React.createElement(
              GrapeContainer,
              null,
              React.createElement(
                TimeClickContainer,
                null,
                React.createElement(TimeClickBox, { onClick: timeCheck }, "D1"),
                React.createElement(TimeClickBox, { onClick: timeCheck }, "H2"),
                React.createElement(TimeClickBox, { onClick: timeCheck }, "H1")
              ),
              React.createElement(ResponsiveLine, {
                data: data,
                margin: { top: 20, right: 20, bottom: 60, left: 80 },
                enableSlices: "x",
                yScale: {
                  type: "linear",
                  stacked: true,
                  max: coinPrice == 0 ? 80000 : coinPrice * 2,
                },
                lineWidth: 3,
                curve: "linear",
                colors: ["#028ee6", "#774dd7"],
                enableGridX: false,
                pointSize: 12,
                pointColor: "white",
                pointBorderWidth: 2,
                pointBorderColor: { from: "serieColor" },
                layers: [
                  "grid",
                  "markers",
                  "areas",
                  "lines",
                  "slices",
                  "axes",
                  "points",
                  "legends",
                ],
                theme: {
                  crosshair: {
                    line: {
                      strokeWidth: 2,
                      stroke: "#774dd7",
                      strokeOpacity: 1,
                    },
                  },
                },
              })
            )
          ),
          React.createElement(
            IntroContainer,
            null,
            React.createElement(
              IntroBox,
              null,
              React.createElement(IntroTitle, null, "Intro."),
              React.createElement(
                IntroText,
                null,
                "Stack : React.js , typescript, styled-components ",
                React.createElement("br", null),
                "API: https://api.coincap.io/",
                React.createElement("br", null),
                "\uC81C\uC791 \uAE30\uAC04 : 2022.04.07 ~ 2022.04.13",
                React.createElement("br", null),
                "github : https://github.com/JinMo-source",
                React.createElement("br", null),
                "\uBAA9\uC801 : typescript \uC640 styled-components\uB97C \uCC98\uC74C \uC0AC\uC6A9\uD558\uC5EC \uAC00\uBCBC\uC6B4 cryptocurrency\uB97C \uC81C\uC791"
              )
            )
          )
        )
  );
};
export default Coingrapes;
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12,
  templateObject_13,
  templateObject_14,
  templateObject_15,
  templateObject_16,
  templateObject_17,
  templateObject_18,
  templateObject_19,
  templateObject_20;
