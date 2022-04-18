import React from "react";
import { CoinInfo } from "./CoinInfo";
import axios from "axios";
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

var ChartContainer = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ["\n  width: 100%;\n"],
      ["\n  width: 100%;\n"]
    ))
);
var ChartInputBox = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  &:before {\n    font-size: 20px;\n    position: absolute;\n    right: 10px;\n    content: "\u260C";\n    transform: rotate(90deg);\n  }\n  width: 100%;\n  height: 100%;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  background-color: #fafafa;\n  position: relative;\n  padding: 0 10px;\n  margin-top: 10px;\n',
      ],
      [
        '\n  &:before {\n    font-size: 20px;\n    position: absolute;\n    right: 10px;\n    content: "\u260C";\n    transform: rotate(90deg);\n  }\n  width: 100%;\n  height: 100%;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  background-color: #fafafa;\n  position: relative;\n  padding: 0 10px;\n  margin-top: 10px;\n',
      ]
    ))
);
var ChartInput = styled.input(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  padding: 5px 3px;\n  border-radius: 6px;\n  border: 0;\n  outline: none;\n",
      ],
      [
        "\n  width: 100%;\n  padding: 5px 3px;\n  border-radius: 6px;\n  border: 0;\n  outline: none;\n",
      ]
    ))
);
var ChartCate = styled.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  width:100%:\n  height:3px;\n  display:flex;\n  padding:10px 0;\n  align-item: center;\n  justify-content: center;\n  box-shadow: 2px 2px 4px #dee1e7;\n  text-align:center;\n",
      ],
      [
        "\n  width:100%:\n  height:3px;\n  display:flex;\n  padding:10px 0;\n  align-item: center;\n  justify-content: center;\n  box-shadow: 2px 2px 4px #dee1e7;\n  text-align:center;\n",
      ]
    ))
);
var ChartBox = styled.div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ["\n  width: ", ";\n"],
      ["\n  width: ", ";\n"]
    )),
  function (props) {
    return props.aa;
  }
);
function Coinchart() {
  var _this = this;
  var _a = useState([]),
    coins = _a[0],
    setCoins = _a[1];
  var _b = useState(""),
    coinName = _b[0],
    setCoinName = _b[1];
  var coinSearch = function (e) {
    e.preventDefault();
    setCoinName(e.target[0].value);
  };
  var response = null;
  useEffect(
    function () {
      var coinListURL = "https://api.coincap.io/v2/assets";
      var coinAPI = new Promise(function (resolve, reject) {
        return __awaiter(_this, void 0, void 0, function () {
          var ex_1, json;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [
                  4 /*yield*/,
                  axios.get(coinListURL, {
                    params: {
                      limit: 100,
                      search: coinName,
                    },
                  }),
                ];
              case 1:
                response = _a.sent();
                return [3 /*break*/, 3];
              case 2:
                ex_1 = _a.sent();
                response = null;
                // error
                console.log(ex_1);
                reject(ex_1);
                return [3 /*break*/, 3];
              case 3:
                if (response) {
                  json = response.data;
                  // console.log(json.data);
                  setCoins(json.data);
                  resolve(json);
                }
                return [2 /*return*/];
            }
          });
        });
      });
    },
    [coinSearch]
  );
  return React.createElement(
    ChartContainer,
    null,
    React.createElement(
      ChartInputBox,
      null,
      React.createElement(
        "form",
        { onSubmit: coinSearch },
        React.createElement(ChartInput, {
          type: "text",
          placeholder: "\uCF54\uC778 \uAC80\uC0C9",
        })
      )
    ),
    React.createElement(
      ChartCate,
      null,
      React.createElement(ChartBox, { aa: "25%" }, "\uCF54\uC778\uBA85"),
      React.createElement(ChartBox, { aa: "50%" }, "\uAC00\uACA9"),
      React.createElement(ChartBox, { aa: "25%" }, "\uB4F1\uB77D\uB960\u001F")
    ),
    coins.map(function (coins) {
      return React.createElement(CoinInfo, {
        name: coins.name,
        id: coins.id,
        symbol: coins.symbol,
        priceUsd: coins.priceUsd,
        percent: coins.changePercent24Hr,
      });
    })
  );
}
export default Coinchart;
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5;
