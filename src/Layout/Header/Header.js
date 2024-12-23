import React from "react";
import ReactDOM from "react-dom";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMid from "./HeaderMid/HeaderMid";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

function Header() {
  return (
    <>
      <HeaderTop />
      <hr className="m-0 p-0"></hr>
      <HeaderMid />
      <hr className="m-0 p-0"></hr>
      <HeaderBottom />
    </>
  );
}
export default Header;
