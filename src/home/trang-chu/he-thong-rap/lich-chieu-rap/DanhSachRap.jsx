import React, { useEffect, useState } from "react";
import "./DanhSachRap.scss";
import LichChieuPhim from "../lich-chieu-phim/LichChieuPhim";
import { useDispatch, useSelector } from "react-redux";
import {
  layTatCaThongTinLichChieuTheoHeThong,
  layThongTinLichChieuTheoHeThong,
} from "../../../../redux/actions/cinemaAction";
import { getColorCinema } from "../../../../helpers";

function DanhSachRap({ heThongActive, heThongRap }) {
  const [currentWindowWidth, setCurrentWindowWidth] = useState(undefined);
  const [indexRapActive, setIndexRapActive] = useState(0); //active cụm rạp
  const [showLogo, setShowLogo] = useState(null);
  const [danhSachRap, setDanhSachRap] = useState([]);
  const { lstCumRap: danhSachRapTheoCum, logo } = useSelector(
    (state) => state.cinemaReducer.lichChieuVaCumRap
  );
  const danhSachRapMobile = useSelector(
    (state) =>
      state.cinemaReducer.lichChieuVaCumRapMobile.length > 0 &&
      state.cinemaReducer.lichChieuVaCumRapMobile.find(
        (item) => item?.maHeThongRap === heThongActive
      )
  );

  // Set lại danh sách rạp và logo (ipad, destop)
  useEffect(() => {
    setDanhSachRap(danhSachRapTheoCum);
    setShowLogo(logo);
  }, [danhSachRapTheoCum]);

  const dispatch = useDispatch();

  // Lấy tất cả thông tin lịch chiếu, rạp ở mobile
  useEffect(() => {
    dispatch(layTatCaThongTinLichChieuTheoHeThong(heThongRap));
  }, [heThongRap]);

  // Change Hệ Thống Rạp
  useEffect(() => {
    if (window.innerWidth < 450) {
      // Đóng các Rạp đang mở (mobile)
      setIndexRapActive(null);
      setDanhSachRap(danhSachRapMobile?.lstCumRap);
      setShowLogo(danhSachRapMobile?.logo);
    }
    // Active Cụm Rạp ĐẦU TIÊN khi render hoặc đổi hệ thống (ipad, destop)
    // Gọi api lấy thông tin theo maHeThong
    if (window.innerWidth > 450) {
      setIndexRapActive(0);
      dispatch(layThongTinLichChieuTheoHeThong(heThongActive));
    }
  }, [heThongActive]);

  // Xác định thiết bị
  useEffect(() => {
    setCurrentWindowWidth(window.innerWidth);
    // ipad, destop => set Rạp active ban đầu
    if (window.innerWidth > 450) {
      setIndexRapActive(0);
    }
  }, [window.innerWidth]);

  const handleChangeRapActive = (index) => {
    // Click vào Rạp đang active => unactive (iphone)
    if (currentWindowWidth < 450 && indexRapActive === index) {
      setIndexRapActive(null);
    } else {
      setIndexRapActive(index);
    }
  };
  return (
    <div className='row lich-chieu show'>
      <div className='col-lg-5 col-md-6 lich-chieu__content'>
        <ul className='lich-chieu__rap'>
          {/* Vòng lặp danh sách Rạp */}
          {danhSachRap &&
            danhSachRap?.map((rap, index) => (
              <li
                key={index}
                className={`lich-chieu__item py-2 border-bottom ${
                  index === indexRapActive && "active"
                }`}>
                <div
                  className='d-flex align-items-center'
                  onClick={() => handleChangeRapActive(index)}>
                  <img src={showLogo} alt='' />
                  <div className='item__title ml-2'>
                    <span
                      className='tenRap'
                      style={getColorCinema(rap.tenCumRap)}>
                      {rap.tenCumRap.split("-")[0]}
                    </span>
                    <span> - {rap.tenCumRap.split("-")[1]}</span>
                    <p className='dsRap-diaChi small my-0'>{rap.diaChi}</p>
                  </div>
                </div>
                {/* Giao diện mobile */}
                {currentWindowWidth <= 450 && (
                  <div
                    className={`lich-chieu__phim-item collapse ${
                      index === indexRapActive && "show"
                    }`}>
                    <LichChieuPhim danhSachPhim={rap.danhSachPhim} />
                  </div>
                )}
              </li>
            ))}
        </ul>
        <div className='line'></div>
      </div>

      {/* Giao diện table, destop */}
      {currentWindowWidth > 450 && (
        <div className='col-lg-7 col-md-6 lich-chieu__phim ml-2 pl-3'>
          <LichChieuPhim
            danhSachPhim={
              danhSachRap && danhSachRap[indexRapActive].danhSachPhim
            }
          />
        </div>
      )}
    </div>
  );
}

export default DanhSachRap;
