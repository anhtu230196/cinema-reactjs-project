import moment from "moment";
import React from "react";
import { useHistory } from "react-router-dom";
import "./GioXem.scss";

function GioXem({ lichChieu }) {
  const history = useHistory();
  const ngayChieu = moment(lichChieu.ngayChieuGioChieu).format("DD/MM");
  const gioChieu = moment(lichChieu.ngayChieuGioChieu).format("hh:mm");
  return (
    <button
      className='suatChieu__content'
      onClick={() => history.push(`/datve/${lichChieu.maLichChieu}`)}>
      <span>{gioChieu}</span>
      <span> ~ {ngayChieu}</span>
    </button>
  );
}

export default GioXem;
