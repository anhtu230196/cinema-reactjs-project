import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { memo } from "react";
import ScrollToTop from "../components/ScrollToTop";

export const cumRap = document.getElementById("cumrap");
export const ungDung = document.getElementById("ungdung");

export const handleGoToView = (view) => {
  console.log(view);
  if (view) {
    view.scrollIntoView({ behavior: "smooth" });
  }
};
function HomeLayout({ children, hideDangNhap, fullOptionsHeader }) {
  return (
    <div
      style={{
        backgroundColor: "#2b2b31",
        // backgroundColor: "#212529",
        // backgroundImage: "linear-gradient(180deg, #00000000 0%, #2c3e50 74%)",
        minHeight: "100%",
        color: "white",
      }}>
      <ScrollToTop />
      <Header
        hideDangNhap={hideDangNhap}
        fullOptionsHeader={fullOptionsHeader}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default memo(HomeLayout);
