import moment from "moment";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getColorCinema } from "../../../helpers";

import "./ChiTietRap.scss";

function ChiTietRap({
  heThongRapChieu,
  hinhAnh,
  tenPhim,
  heThongActiveDefault,
}) {
  const [heThongActive, setHeThongActive] = useState("");
  const [cumRapChieu, setCumRapChieu] = useState([]);
  const [logoRap, setLogoRap] = useState("");
  const [rapActiveIndex, setRapActiveIndex] = useState(0);
  const [listNgayChieu, setListNgayChieu] = useState([]);
  const [ngayActiveIndex, setNgayActiveIndex] = useState(0);
  const [listLichChieu, setListLichChieu] = useState([]);
  const history = useHistory();

  // Khi component mở
  useEffect(() => {
    handleChangeHeThong();
  }, [heThongActiveDefault]);

  useEffect(() => {
    handleChangeRap();
  }, [cumRapChieu]);

  // Thay đổi Hệ Thống Rạp, maHeThong: CGV, Galaxy...
  const handleChangeHeThong = (maHeThong = heThongActiveDefault) => {
    // Active Hệ Thống đc chọn
    setHeThongActive(maHeThong);
    // Lọc Hệ Thống đc chọn trong list heThongRapChieu đc truyền vào
    const heThongChieu = heThongRapChieu.find(
      (heThong) => heThong.maHeThongRap === maHeThong
    );
    setLogoRap(heThongChieu?.logo);
    setCumRapChieu(heThongChieu?.cumRapChieu);
    // Mỗi lần thay đổi hệ thống => active lại rạp đầu tiên, set lại mảng ngày Chiếu
    handleChangeRap(0);
  };

  // Thay Đổi Rạp
  const handleChangeRap = (index = 0) => {
    setRapActiveIndex(index);
    // console.log(cumRapChieu);
    if (cumRapChieu?.length > 0) {
      // console.log(cumRapChieu[index]);
      // Rút gọn Array lại thành mảng ngayChieuGioChieu
      let danhSachNgayChieu = cumRapChieu[index].lichChieuPhim.map(
        (lichChieu) => lichChieu.ngayChieuGioChieu.split("T")[0]
      );
      // Xóa các ngày chiếu bị trùng
      const listUniqNgayChieu = danhSachNgayChieu
        .filter((ngay, pos) => danhSachNgayChieu.indexOf(ngay) === pos)
        .sort((a, b) => (a > b ? 1 : -1)); // a > b => đổi chỗ
      setListNgayChieu(listUniqNgayChieu);
      handleChangeNgayChieu(listUniqNgayChieu[0], 0, index);
    }
  };

  // Thay đổi Ngày Chiếu ---- ngay: 2020-09-23...
  const handleChangeNgayChieu = (
    ngay,
    ngayIndex,
    rapIndex = rapActiveIndex
  ) => {
    setNgayActiveIndex(ngayIndex);
    // console.log(cumRapChieu[rapActiveIndex].lichChieuPhim);
    // console.log("rapIndex: ", rapIndex);

    //  lấy lại toàn bộ form array lichChieuPhim
    const listLichChieuTheoNgay = cumRapChieu[rapIndex].lichChieuPhim.filter(
      (item) => item.ngayChieuGioChieu.split("T")[0] === ngay
    );
    setListLichChieu(listLichChieuTheoNgay);
  };

  // Click nút giờ, chạy hàm đặt vé
  const handleDatVe = (maLichChieu) => {
    history.push(`/datve/${maLichChieu}`);
  };

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
            onClick={() => handleChangeHeThong(heThong.maHeThongRap)}
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
            {cumRapChieu?.length &&
              cumRapChieu.map((rap, key) => (
                <li
                  key={key}
                  className={`lich-chieu__item py-2 ${
                    key === rapActiveIndex && "active"
                  }`}>
                  <div className='d-flex' onClick={() => handleChangeRap(key)}>
                    <img src={logoRap} alt='' />
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
                {listNgayChieu?.map((ngayChieu, key) => (
                  <div
                    key={key}
                    className={`ngay-xem-item ${
                      key === ngayActiveIndex && "active"
                    }`}>
                    <span onClick={() => handleChangeNgayChieu(ngayChieu, key)}>
                      {/* {moment(lichChieu.ngayChieuGioChieu).format("DD/MM")} */}
                      {moment(ngayChieu).format("DD/MM")}
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
                {listLichChieu.map((lichChieu, key) => (
                  <button
                    key={key}
                    className='button-datVe'
                    onClick={() => handleDatVe(lichChieu.maLichChieu)}>
                    {moment(lichChieu.ngayChieuGioChieu).format("HH:mm")}
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
