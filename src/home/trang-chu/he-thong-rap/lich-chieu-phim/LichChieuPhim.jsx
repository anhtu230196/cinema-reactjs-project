import React, { useEffect, useState } from "react";
import "./LichChieuPhim.scss";
import GioXem from "../gio-xem/GioXem";

function LichChieuPhim({ danhSachPhim }) {
  const [showTimePhimIndex, setShowTimePhimIndex] = useState(null);

  const handleOpenShowTime = (index) => {
    setShowTimePhimIndex(index);
    if (showTimePhimIndex === index) {
      setShowTimePhimIndex(null);
    }
  };

  return (
    <>
      <ul className='lichPhim'>
        {danhSachPhim ? (
          <>
            {/* Vòng lặp Phims */}
            {danhSachPhim.map((phim, index) => (
              <li key={index} className='lich-phim__item'>
                <div
                  className='lich-phim__content d-flex'
                  onClick={() => handleOpenShowTime(index)}>
                  <img src={phim.hinhAnh} alt='' />
                  <div className='lich-phim__title mx-3 mt-2'>
                    <span className='tenPhim'>{phim.tenPhim}</span>
                    <br />
                    <span className='thoiLuong'>120 Phút</span>
                  </div>
                </div>
                <div
                  className={`collapse ${
                    window.innerWidth > 450 || showTimePhimIndex === index
                      ? "show"
                      : ""
                  }`}>
                  <div className='mt-3 d-flex'>
                    <div>
                      {phim.lstLichChieuTheoPhim
                        .slice(0, 10)
                        .map((lichChieu, key) => (
                          <GioXem key={key} lichChieu={lichChieu} />
                        ))}
                    </div>
                  </div>
                </div>

                <div className='lich-chieu__border my-3'></div>
              </li>
            ))}
          </>
        ) : (
          <p>Không Có Lịch Chiếu</p>
        )}
      </ul>
    </>
  );
}

export default LichChieuPhim;
