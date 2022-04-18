import React from "react";
import Coingrapes from "./Coingrapes";
import styled from "styled-components";

const GrapeCotainer = styled.div`
  position: fixed;
  top: 50px;
  left: 25%;
  right: 0;
  bottom: 0;
`;

function CoinDetail() {
  return <GrapeCotainer>{<Coingrapes />}</GrapeCotainer>;
}

export default CoinDetail;
