import React from "react";
import "./DanhSachGhe.scss";
import GheItem from "./GheItem/GheItem";
function DanhSachGhe() {
  return (
    <div className='d-flex flex-wrap justify-content-center pt-5'>
      {[...Array(80).keys()].map((key) => (
        <div className='p-1' key={key}>
          <GheItem soGhe={key + 1} gheDaDat={false} />
        </div>
      ))}
    </div>
  );
}

export default DanhSachGhe;
