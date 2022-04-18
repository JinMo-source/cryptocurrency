import React from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
import styled from "styled-components";

const GrapeMainContainer = styled.div`
  width: 100%;
`;
const CoinInfoContainer = styled.div`
  width: 100%;
  box-shadow: 2px 2px 4px #dee1e7;
  padding: 5px 10px;
  margin-top 11px;
`;

const CoinTitle = styled.h2`
  background: #fff;
  width: 100%;
  padding: 10px 0 6px 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 2px 2px 4px #dee1e7;
  position: relative;
`;
const CoinPriceContainer = styled.div`
  width: 100%;
  padding: 4px 20px;
  display: flex;
  background: #fff;
  margin-top: 5px;
  box-shadow: 2px 2px 4px #dee1e7;
`;

const CoinPriceInfoContainer = styled.div`
  width: 50%;
  align-item: center;
  padding: 10px 0 10px 0;
  display: flex;
  align-item: center;
  flex-direction: column;
`;

const CoinPrice = styled.div`
  width: 100%;
  font-size: 32px;
  padding: 0 0 5px 0;
  font-weight: bold;
  box-sizing: border-box;
`;
const CoinPercent = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
`;
const CoinPriceDayContaniner = styled.div`
  width: 50%;
  display: inline-flex;
  justify-content: center;
  align-item: center;
  flex-wrap: wrap;
  padding: 10px 0;
`;
const CoinPriceDay = styled.div`
  width: 50%;
  padding-top: 10px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #e9ecf1;
`;
const Grape = styled.div`
  width: 100%;
  height: 30vw;
  padding: 0 10px;
`;
const GrapeContainer = styled.div`
  width: 100%;
  height: 30vw;
  box-shadow: 2px 2px 4px #dee1e7;
  padding: 45px 20px 0 0;
  background: #fff;
  position: relative;
`;
const TitleBox = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 6px;
  display: inline-block;
`;
const ImageBox = styled.img`
  width: 35px;
  font-size: 25px;
  font-weight: bold;
  margin-right: 5px;
`;
const Title = styled.div`
  margin-left: 40px;
`;
const TimeClickContainer = styled.div`
  display: flex;
  width: 150px;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

const TimeClickBox = styled.div`
  margin: 10px;
  font-size: 17px;
  font-weight: bold;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 10vw;
  margin-top: 10px;
  padding: 0 10px;
`;
const IntroBox = styled.div`
  width: 100%;
  height: 12vw;
  padding: 0 10px;
  box-shadow: 2px 2px 4px #dee1e7;
  background: #fff;
`;
const IntroTitle = styled.h2`
  padding: 10px 0;
  font-size: 17px;
  color: blue;
  font-weight: bold;
`;
const IntroText = styled.p`
  font-size: 14px;
  line-height: 30px;
`;
const Coingrapes = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [grapeTime, setGrapeTime] = useState("d1");

  const coinName =
    localStorage.getItem("grape") == null
      ? "bitcoin"
      : localStorage.getItem("grape");

  const coinPrice =
    Number(localStorage.getItem("priceUsd")) == 0
      ? 80000
      : Number(localStorage.getItem("priceUsd"));

  const timestemp = new Date().getTime();
  const coinPercent = Number(localStorage.getItem("percent"));
  const coinImage: any = localStorage.getItem("imgSrc");
  const percentColor = Number(coinPercent) > 0 ? "up" : "down";
  let timestempStart = timestemp - 1000000000;

  const timeCheck = (e: any) => {
    let time = e.target.innerText;
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
  useEffect(() => {
    let grapeURL = `https://api.coincap.io/v2/assets/${coinName}/history`;
    let coinData = new Promise(async (resolve, reject) => {
      let response = null;
      try {
        response = await axios.get(grapeURL, {
          params: {
            interval: `${grapeTime.toLowerCase()}`,
            start: `${timestempStart}`,
            end: `${timestemp}`,
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
        setLoading(false);
        // console.log(json.data);
        setDetail(json.data);
        resolve(json);
      }
    });
  });

  let coinDay = detail.map((data: any): any => {
    let month = data.date.split("T")[0].split("-")[1];
    let day = data.date.split("T")[0].split("-")[2];
    let hour = data.date.split("T")[1].split(":");
    let currentXGrapes = `${month}.${day}`;
    switch (grapeTime) {
      case "D1":
        currentXGrapes = `${month}.${day}`;
        break;
      case "H2":
        currentXGrapes = `T${hour[0]}:${hour[1]}`;
        break;
      case "H1":
        currentXGrapes = `T${hour[0]}:${hour[1]}`;
        break;
    }
    return {
      x: currentXGrapes,
      // `${month}.${day}`,
      y: Number(data.priceUsd).toFixed(1),
    };
  });

  let data = [
    {
      id: `${coinName}`,
      data: coinDay,
    },
  ];

  return (
    <GrapeMainContainer>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <CoinInfoContainer>
            <CoinTitle>
              <TitleBox>
                <ImageBox src={coinImage}></ImageBox>
              </TitleBox>
              <Title>{coinName?.toUpperCase()}</Title>
            </CoinTitle>
            <CoinPriceContainer>
              <CoinPriceInfoContainer>
                <CoinPrice className={percentColor}>
                  {Number(Number(coinPrice).toFixed(2)).toLocaleString()} USD
                </CoinPrice>
                <CoinPercent className={percentColor}>
                  전일 대비 {coinPercent.toFixed(2)}%
                </CoinPercent>
              </CoinPriceInfoContainer>
              <CoinPriceDayContaniner>
                <CoinPriceDay>고가</CoinPriceDay>
                <CoinPriceDay>거래량(24H)</CoinPriceDay>
                <CoinPriceDay>저가</CoinPriceDay>
                <CoinPriceDay>거래대금(24H)</CoinPriceDay>
              </CoinPriceDayContaniner>
            </CoinPriceContainer>
          </CoinInfoContainer>
          <Grape>
            <GrapeContainer>
              <TimeClickContainer>
                <TimeClickBox onClick={timeCheck}>D1</TimeClickBox>
                <TimeClickBox onClick={timeCheck}>H2</TimeClickBox>
                <TimeClickBox onClick={timeCheck}>H1</TimeClickBox>
              </TimeClickContainer>
              <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
                enableSlices={"x"}
                yScale={{
                  type: "linear",
                  stacked: true,
                  max: coinPrice == 0 ? 80000 : coinPrice * 2,
                }}
                lineWidth={3}
                curve="linear"
                colors={["#028ee6", "#774dd7"]}
                enableGridX={false}
                pointSize={12}
                pointColor="white"
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                layers={[
                  "grid",
                  "markers",
                  "areas",
                  "lines",
                  "slices",
                  "axes",
                  "points",
                  "legends",
                ]}
                theme={{
                  crosshair: {
                    line: {
                      strokeWidth: 2,
                      stroke: "#774dd7",
                      strokeOpacity: 1,
                    },
                  },
                }}
              />
            </GrapeContainer>
          </Grape>
          <IntroContainer>
            <IntroBox>
              <IntroTitle>Intro.</IntroTitle>
              <IntroText>
                Stack : React.js , typescript, styled-components <br />
                API: https://api.coincap.io/
                <br />
                제작 기간 : 2022.04.07 ~ 2022.04.13
                <br />
                github : https://github.com/JinMo-source
                <br />
                목적 : typescript 와 styled-components를 처음 사용하여 가벼운
                cryptocurrency를 제작
              </IntroText>
            </IntroBox>
          </IntroContainer>
        </div>
      )}
    </GrapeMainContainer>
  );
};
export default Coingrapes;
