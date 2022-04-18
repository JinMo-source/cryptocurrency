import React from "react";
import HeaderInfo from "../components/HeaderInfo";
var nav = {
    logo: "cryptocurrency",
    nav: ["암호화폐", "거래소", "NFT", "관심목록", "상품"],
};
function Header() {
    return React.createElement(HeaderInfo, { logo: nav.logo, nav: nav.nav });
}
export default Header;
