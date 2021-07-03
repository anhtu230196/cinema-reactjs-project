import moment from "moment";
import React, { useState, useEffect } from "react";
import { getColorCinema } from "../../../helpers";

import "./ChiTietRap.scss";

function ChiTietRap({ heThongRapChieu, hinhAnh, tenPhim }) {
  const [heThongActive, setHeThongActive] = useState("BHDStar");
  const [cumRapChieu, setCumRapChieu] = useState({});
  const [rapActiveIndex, setRapActiveIndex] = useState(0);
  const [listLichChieu, setListLichChieu] = useState([]);
  const [listNgayChieu, setListNgayChieu] = useState([]);

  useEffect(() => {
    // KHi đổi Hệ Thống, set Rạp active về vị trí ban đầu
    setRapActiveIndex(0);
    // cumRapShow: {cumRapChieu: [], logo: String}
    let cumRapShow = heThongRapChieu?.find(
      (heThong) => heThong.maHeThongRap === heThongActive
    );
    setCumRapChieu(cumRapShow);
  }, [heThongActive, heThongRapChieu]);

  // console.log(cumRapChieu?.cumRapChieu && cumRapChieu.cumRapChieu[0]);

  useEffect(() => {
    // cumRapChieu?.cumRapChieu[0]
    let lichChieuShow =
      cumRapChieu?.cumRapChieu && cumRapChieu.cumRapChieu[rapActiveIndex];
    setListLichChieu(lichChieuShow?.lichChieuPhim);
    console.log(lichChieuShow?.lichChieuPhim);
    const listNgay = [];
    // console.log(listNgay);
  }, [rapActiveIndex, cumRapChieu]);

  // console.log(listLichChieu);

  return (
    <div className='container-fluid'>
      {/* He Thong Rap Logo */}
      <div className='row rap__logo justify-content-center'>
        {/* Danh sách Hệ Thống */}
        {heThongRapChieu?.map((heThong, index) => (
          <div
            className={`rap-logo__item col-lg-2 col-md-4 col-4 p-lg-1 pt-md-4 pt-4 text-center ${
              heThong.maHeThongRap === heThongActive && "active"
            }`}
            onClick={() => setHeThongActive(heThong.maHeThongRap)}
            key={index}>
            <img src={heThong.logo} alt='' />
          </div>
        ))}
      </div>

      {/* Danh sach Rap va Lich Chieu */}
      <div className='row rap-lichChieu justify-content-center'>
        <div className='col-12 col-md-6 col-lg-4'>
          {/* Danh sách Rạp */}
          <ul className='lich-chieu__rap'>
            {cumRapChieu &&
              cumRapChieu.cumRapChieu?.map((rap, key) => (
                <li
                  key={key}
                  className={`lich-chieu__item py-2 ${
                    key === rapActiveIndex && "active"
                  }`}>
                  <div
                    className='d-flex'
                    onClick={() => setRapActiveIndex(key)}>
                    <img src={cumRapChieu?.logo} alt='' />
                    <div className='item__title ml-2'>
                      <span
                        className='tenRap'
                        style={getColorCinema(rap.tenCumRap)}>
                        {rap.tenCumRap.split("-")[0]}
                      </span>
                      <span className='tenCumRap'>
                        {" "}
                        - {rap.tenCumRap.split("-")[1]}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Lịch Chiếu */}
        <div className='col-12 col-md-6 col-lg-6 lich-chieu__phim'>
          <ul className='lichPhim'>
            <li className='lich-phim__item'>
              <div className='lich-phim__ngayXem d-flex'>
                {/* List Ngày */}
                {listLichChieu?.map((lichChieu, key) => (
                  <div
                    key={key}
                    className={`ngay-xem-item ${key === 0 && "active"}`}>
                    <span>
                      {/* {moment(lichChieu.ngayChieuGioChieu).format("DD/MM")} */}
                      {lichChieu.ngayChieuGioChieu}
                    </span>
                  </div>
                ))}
              </div>
              <div className='lich-phim__content d-flex'>
                <img src={hinhAnh} alt='' />
                <div className='lich-phim__title mx-3 mt-2'>
                  <span className='tenPhim mb-1'>{tenPhim}</span>
                  <p className='thoiGian'>120 Phút</p>
                </div>
              </div>
              {/* List Giờ */}
              <div className='gioXem'>
                {[...Array(7).keys()].map((key) => (
                  <button key={key} className='button-datVe'>
                    22:00
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChiTietRap;
