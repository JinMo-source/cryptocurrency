import React from "react";
import CoinDetail from "../components/CoinDetail";
import Coinchart from "./Coinchart";
import styled from "styled-components";

const SectionStyled = styled.section`
  width: 100%;
  position: fixed;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;
`;
const MainContainer = styled.div`
  width: 1680px;
  display: flex;
  padding: 10px 0;
  margin: 0 auto;
  position: fixed;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;
`;
const ChartContanier = styled.div`
  width: 25%;
  position: fixed;
  top: 55px;
  bottom: 41px;
  left: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const InfoContainer = styled.div`
  width: 75%;
  position: fixed;
  top: 55px;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
`;
function Section() {
  return (
    <SectionStyled>
      <MainContainer>
        <ChartContanier>
          <Coinchart />
        </ChartContanier>
        <InfoContainer>
          <CoinDetail />
        </InfoContainer>
      </MainContainer>
    </SectionStyled>
  );
}

export default Section;
