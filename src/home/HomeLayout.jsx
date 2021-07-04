import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { memo } from "react";
function HomeLayout({ children, hideDangNhap }) {
  return (
    <div
      style={{
        backgroundColor: "#2b2b31",
        // backgroundColor: "#212529",
        // backgroundImage: "linear-gradient(180deg, #00000000 0%, #2c3e50 74%)",
        minHeight: "100%",
        color: "white",
      }}>
      <Header hideDangNhap={hideDangNhap} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default memo(HomeLayout);
