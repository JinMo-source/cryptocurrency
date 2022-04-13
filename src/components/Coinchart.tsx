import React from "react";
import { CoinInfo } from "./CoinInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
`;
const ChartInputBox = styled.div`
  &:before {
    font-size: 20px;
    position: absolute;
    right: 10px;
    content: "☌";
    transform: rotate(90deg);
  }
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: #fafafa;
  position: relative;
  padding: 0 10px;
  margin-top: 10px;
`;
const ChartInput = styled.input`
  width: 100%;
  padding: 5px 3px;
  border-radius: 6px;
  border: 0;
  outline: none;
`;
const ChartCate = styled.div`
  width:100%:
  height:3px;
  display:flex;
  padding:10px 0;
  align-item: center;
  justify-content: center;
  box-shadow: 2px 2px 4px #dee1e7;
  text-align:center;
`;
const ChartBox = styled.div<{ aa: string }>`
  width: ${(props) => props.aa};
`;
function Coinchart() {
  const [coins, setCoins] = useState([]);
  const [coinName, setCoinName] = useState("");

  const coinSearch = (e: any): any => {
    e.preventDefault();
    setCoinName(e.target[0].value);
  };
  let response = null;

  useEffect(() => {
    let coinListURL = `https://api.coincap.io/v2/assets`;
    let coinAPI = new Promise(async (resolve, reject) => {
      try {
        response = await axios.get(coinListURL, {
          params: {
            limit: 100,
            search: coinName,
          },
        });
      } catch (ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
      }
      if (response) {
        // success
        const json = response.data;
        // console.log(json.data);
        setCoins(json.data);
        resolve(json);
      }
    });
  }, [coinSearch]);
  return (
    <ChartContainer>
      <ChartInputBox>
        <form onSubmit={coinSearch}>
          <ChartInput type="text" placeholder="코인 검색"></ChartInput>
        </form>
      </ChartInputBox>
      <ChartCate>
        <ChartBox aa="25%">코인명</ChartBox>
        <ChartBox aa="50%">가격</ChartBox>
        <ChartBox aa="25%">등락률</ChartBox>
      </ChartCate>
      {coins.map((coins: any) => {
        return (
          <CoinInfo
            name={coins.name}
            id={coins.id}
            symbol={coins.symbol}
            priceUsd={coins.priceUsd}
            percent={coins.changePercent24Hr}
          />
        );
      })}
    </ChartContainer>
  );
}

export default Coinchart;
