import React, { useState } from "react";
import "./GheItem.scss";
function GheItem({ soGhe, gheDaDat }) {
  const [datGheStatus, setDatGheStatus] = useState(false);
  return (
    <>
      {gheDaDat ? (
        <div className='ghe-selected'></div>
      ) : (
        <div
          className={`ghe ${datGheStatus && "dangDat"}`}
          onClick={() => setDatGheStatus(!datGheStatus)}>
          <p>{soGhe < 10 ? "0" + soGhe : soGhe}</p>
        </div>
      )}
    </>
  );
}

export default GheItem;
