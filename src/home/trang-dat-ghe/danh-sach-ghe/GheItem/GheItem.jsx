import React, { useState } from "react";
import "./GheItem.scss";
function GheItem({ ghe, setDanhSachGheDangDat }) {
  const [datGheStatus, setDatGheStatus] = useState(false);
  let dangDat = datGheStatus;
  const handleChangeGheStatus = () => {
    dangDat = !dangDat;
    setDatGheStatus(dangDat);
    ghe.dangDat = dangDat;
    setDanhSachGheDangDat(ghe);
  };

  return (
    <>
      {ghe.daDat ? (
        <div className='ghe-selected'></div>
      ) : (
        <div
          className={`ghe ${datGheStatus && "dangDat"}`}
          onClick={handleChangeGheStatus}>
          <p>{ghe.tenGhe}</p>
        </div>
      )}
    </>
  );
}

export default GheItem;
