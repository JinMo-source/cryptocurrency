import React from "react";
import styled from "styled-components";

const FooterMainCotainer = styled.footer`
  width: 100%;
  background: #fff;
  position: fixed;
  padding: 5px;
  text-align: center;
  bottom: 0;
  font-weight: bold;
  box-shadow: 2px 2px 4px #dee1e7;
`;
function Footer() {
  return (
    <FooterMainCotainer>ParkJinMo CRYPTOCURRENCY Portfolio</FooterMainCotainer>
  );
}

export default Footer;
