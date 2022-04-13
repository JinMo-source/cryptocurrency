import React from "react";
import styled from "styled-components";

interface Navigation {
  logo: string;
  nav: string[];
}

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 50px;
  background: #fff;
  box-shadow: 2px 2px 4px #dee1e7;
  box-sizing: border-box;
`;

const MainContainer = styled.div`
  width: 1680px;
  display: flex;
  padding: 10px 0;
  box-sizing: border-box;
  margin: 0 auto;
`;
const Logo = styled.div`
  width: 10vw;
  padding: 8px 10px;
  font-size: 15px;
  color: blue;
  font-weight: bold;
  box-sizing: border-box;
`;
const Navigation = styled.nav`
  width: 40vw;
  display: inline-flex;
  text-align: center;
  flex: none;
`;
const Navi = styled.div`
  box-sizing: border-box;
  padding: 8px 0;
  width: 6vw;
  font-size: 14px;
  color: black;
  font-weight: bold;
`;
const HeaderInfo = ({ logo, nav }: Navigation) => {
  return (
    <HeaderContainer>
      <MainContainer>
        <Logo>{logo}</Logo>
        <Navigation>
          {nav.map((name, id) => {
            return (
              <Navi id={`navigation-${id}`} key={`navigation-${name}`}>
                {name}
              </Navi>
            );
          })}
        </Navigation>
      </MainContainer>
    </HeaderContainer>
  );
};
export default HeaderInfo;
