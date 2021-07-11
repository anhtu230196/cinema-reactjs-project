import React from "react";
import "./style.scss";
import ScrollToTop from "../ScrollToTop";

function LoadingPage() {
  return (
    <div class='container-loader'>
      <ScrollToTop />
      <div class='spinner'>
        <div class='spinner-item'></div>
        <div class='spinner-item'></div>
        <div class='spinner-item'></div>
        <div class='spinner-item'></div>
      </div>
    </div>
  );
}

export default LoadingPage;
