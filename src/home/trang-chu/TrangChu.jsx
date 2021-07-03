import React from "react";
import HomeLayout from "./../HomeLayout";
import Slider from "./slider/Slider";
import MuaVe from "./mua-ve/MuaVe";
import PhimComponent from "./phim/PhimComponent";
import UngDung from "./ung-dung/UngDung";
import HeThongRap from "./he-thong-rap/HeThongRap";

function TrangChu() {
  return (
    <HomeLayout>
      <div style={{ paddingTop: 80 }}>
        <Slider />
        <MuaVe />
        <PhimComponent />
        <div className='break-line'></div>
        <HeThongRap />
        <UngDung />
      </div>
    </HomeLayout>
  );
}

export default TrangChu;
