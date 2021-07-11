import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import "./GioXem.scss";

function GioXem({ lichChieu }) {
  const history = useHistory();
  const ngayChieu = moment(lichChieu.ngayChieuGioChieu).format("DD/MM");
  const gioChieu = moment(lichChieu.ngayChieuGioChieu).format("hh:mm");
  const { userInfo } = useSelector((state) => state.userReducer);

  const handleDatVeTranfer = (maLichChieu) => {
    if (!userInfo.hoTen) {
      return swal(`Vui Lòng Đăng Nhập Để Tiếp Tục Đặt Vé`, {
        // className: "button-primary",
      });
    }
    history.push(`/datve/${maLichChieu}`);
  };

  return (
    <button
      className='suatChieu__content'
      onClick={() => handleDatVeTranfer(lichChieu.maLichChieu)}>
      <span>{gioChieu}</span>
      <span> ~ {ngayChieu}</span>
    </button>
  );
}

export default GioXem;
