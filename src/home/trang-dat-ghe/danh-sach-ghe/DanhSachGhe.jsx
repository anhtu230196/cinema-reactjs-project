import React, { memo } from "react";
import "./DanhSachGhe.scss";
import GheItem from "./GheItem/GheItem";
function DanhSachGhe({ danhSachGhe, setDanhSachGheDangDat }) {
  return (
    <div className='d-flex flex-wrap justify-content-center pt-5'>
      {danhSachGhe.map((ghe) => (
        <div className='p-1' key={ghe.maGhe}>
          <GheItem ghe={ghe} setDanhSachGheDangDat={setDanhSachGheDangDat} />
        </div>
      ))}
    </div>
  );
}

export default memo(DanhSachGhe);
