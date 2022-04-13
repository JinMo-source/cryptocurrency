import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Coin {
  name: string;
  id: string;
  symbol: string;
  priceUsd: string;
  percent: string;
}

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 4px 10px;
  margin-bottom: 5px;
  z-index: 999;
  background: #fff;
  box-shadow: 2px 2px 4px #dee1e7;
  cursor: pointer;
`;
const ImageBox = styled.div`
  width: 3vw;
  display: flex;
  align-item: center;
`;

const CoinTextBox = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  width: 5vw;
`;

const CoinText = styled.div`
  width: 100%;
  padding: 0.3vw 0;
  font-size: 14px;
  text-align: center;
`;
const CoinPriceInfo = styled.div`
  width: 100%;
  display: inline-flex;
  align-item: center;
  justify-content: center;
`;
const CoinPrice = styled.div`
  width: 50%;
  padding: 1vw 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const CoinInfo = ({ name, id, symbol, priceUsd, percent }: Coin) => {
  if (id == localStorage.getItem("grape")) {
    if (
      priceUsd != localStorage.getItem("priceUsd") &&
      percent != localStorage.getItem("percent")
    ) {
      localStorage.setItem("priceUsd", priceUsd);
      localStorage.setItem("percent", percent);
    }
  }
  const image = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
  const percentColor = Number(percent) > 0 ? "up" : "down";
  return (
    <ChartContainer
      id={name}
      key={name}
      onClick={() => {
        localStorage.setItem("grape", id);
        localStorage.setItem("priceUsd", priceUsd);
        localStorage.setItem("percent", percent);
        localStorage.setItem("imgSrc", image);
      }}
    >
      <ImageBox className={name}>
        <img
          className={name}
          src={image}
          alt={name}
          onError={(event) =>
            ((event.target as HTMLImageElement).src =
              "https://assets.coincap.io/assets/icons/btc@2x.png")
          }
        />
      </ImageBox>
      <CoinTextBox className={name}>
        <CoinText className={name}>
          <b>{name.length > 16 ? `${name.slice(0, 16)}...` : name}</b>
        </CoinText>
        <CoinText className={name}>
          <b>{symbol}</b>
        </CoinText>
      </CoinTextBox>
      <CoinPriceInfo className={name}>
        <CoinPrice className={percentColor}>
          ${Number(Number(priceUsd).toFixed(2)).toLocaleString()}
        </CoinPrice>
        <CoinPrice className={percentColor}>
          {Number(percent).toFixed(2)}%
        </CoinPrice>
      </CoinPriceInfo>
    </ChartContainer>
  );
};
