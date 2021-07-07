import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMovieDetail } from "../../../redux/actions/movieAction";
import "./MuaVe.scss";

function MuaVe() {
  const { movieList, movieDetail } = useSelector((state) => state.movieReducer);
  const wrapperRef = useRef();
  const history = useHistory();
  const initialDropDown = {
    showPhim: false,
    showRap: false,
    showNgay: false,
    showGio: false,
  };
  // state hiển thị trên giao diện
  const [tenPhim, setTenPhim] = useState("");
  const [tenRap, setTenRap] = useState("");
  const [ngayXem, setNgayXem] = useState(undefined);
  const [gioXem, setGioXem] = useState(undefined);
  const [maLichChieu, setMaLichChieu] = useState(undefined);

  // State đổ data
  const [danhSachRap, setDanhSachRap] = useState([]);
  const [lichChieuPhim, setLichChieuPhim] = useState([]);
  const [listNgay, setListNgay] = useState([]);
  const [listLichChieuTheoRap, setListLichChieuTheoRap] = useState([]); // Nhận lại các danh sách lịch chiếu theo rạp để filter giờ xem
  const [listGioXem, setListGioXem] = useState([]);

  useEffect(() => {
    if (movieDetail.heThongRapChieu) {
      let dsCumRapChieu = movieDetail.heThongRapChieu;
      let cumRap = [];
      for (let i = 0; i < dsCumRapChieu.length; i++) {
        cumRap.push(...dsCumRapChieu[i].cumRapChieu);
        // console.log(...dsCumRapChieu[i].cumRapChieu);
      }
      // console.log(cumRap);
      setDanhSachRap(
        cumRap.map((item) => ({
          maCumRap: item.maCumRap,
          tenCumRap: item.tenCumRap,
        }))
      );
      setLichChieuPhim(
        cumRap.map((item) => ({
          lichChieuPhim: item.lichChieuPhim,
          maCumRap: item.maCumRap,
        }))
      );
    }
  }, [movieDetail]);

  const [showDropDrow, setShowDropDown] = useState(initialDropDown);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  // Click outside and close all the dropdown
  const handleClickOutSide = (event) => {
    const { target } = event;
    if (!wrapperRef.current.contains(target)) {
      setShowDropDown(initialDropDown);
    }
  };

  // dispatch lấy thông tin dựa theo mã phim
  const handleSetPhim = (maPhim, tenPhim) => {
    setTenRap(""); // Đổi phim, set Lại Tên Rạp, ngày/giờ hiển thị
    setGioXem(undefined);
    setNgayXem(undefined);
    setMaLichChieu(null);
    setListGioXem([]);
    setListNgay([]);

    setTenPhim(tenPhim);
    dispatch(getMovieDetail(maPhim));
  };

  const handleChangeRap = (maCumRap, tenCumRap) => {
    setTenRap(tenCumRap);
    setNgayXem("");
    setGioXem("");
    setMaLichChieu(null);
    setListGioXem([]);
    setListNgay([]);
    const listLichChieuTheoRap = lichChieuPhim.find(
      (item) => item.maCumRap === maCumRap
    ).lichChieuPhim;
    setListLichChieuTheoRap(listLichChieuTheoRap);
    // Lọc ngày xem
    const listNgayXem = listLichChieuTheoRap.map(
      (item) => item.ngayChieuGioChieu.split("T")[0]
    );
    // console.log(listNgayXem);
    // Remove các ngày bị trùng và sort
    const listNgayRemoveDuplicate = listNgayXem
      .filter((ngay, pos) => listNgayXem.indexOf(ngay) === pos)
      .sort((a, b) => (a > b ? 1 : -1));
    setListNgay(listNgayRemoveDuplicate);
  };

  const handleChangeNgay = (ngay) => {
    // console.log(listLichChieuTheoRap);
    setGioXem(undefined);
    setNgayXem(ngay);
    setMaLichChieu(null);
    const gioChieuTheoNgay = listLichChieuTheoRap.filter(
      (item) => item.ngayChieuGioChieu.split("T")[0] === ngay
    );
    // console.log(gioChieuTheoNgay);
    setListGioXem(
      gioChieuTheoNgay.map((item) => ({
        gioXem: item.ngayChieuGioChieu,
        maLichChieu: item.maLichChieu,
      }))
    );
  };

  const handleChonGio = (gioXem, maLichChieu) => {
    setGioXem(gioXem);
    setMaLichChieu(maLichChieu);
  };

  const handleDatVe = () => {
    console.log(maLichChieu);
    history.push(`/datve/${maLichChieu}`);
  };

  return (
    <div
      className='dropDown-muaVe d-md-none d-lg-flex mx-auto'
      ref={wrapperRef}>
      {/* Dropdown Phim */}
      <div
        className='dropdown dropDown--item dropdown--selectPhim'
        onClick={() =>
          setShowDropDown((prev) => ({
            ...initialDropDown,
            showPhim: !prev.showPhim,
          }))
        }>
        <div
          className='dropdown-select'
          style={{ backgroundImage: `url(assets/img/dropdown-icon.png)` }}>
          <span>{tenPhim ? tenPhim : "Phim"}</span>
        </div>
        {/* Dropdown List Phim */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showPhim && "show"
          }`}>
          {movieList.map((movie) => (
            <li key={movie.maPhim}>
              <a
                className='dropdown-item'
                onClick={() => handleSetPhim(movie.maPhim, movie.tenPhim)}>
                {movie.tenPhim}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown Rạp */}
      <div
        className='dropdown dropDown--item w-item-drop'
        onClick={() =>
          setShowDropDown((prev) => ({
            ...initialDropDown,
            showRap: !prev.showRap,
          }))
        }>
        <div
          className='dropdown-select'
          style={{ backgroundImage: `url(assets/img/dropdown-icon.png)` }}>
          <span>{tenRap ? tenRap : "Rạp"}</span>
        </div>
        {/* Dropdown List Rạp */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showRap && "show"
          }`}>
          {danhSachRap.length ? (
            danhSachRap.map((rap) => (
              <li
                key={rap.maCumRap}
                onClick={() => handleChangeRap(rap.maCumRap, rap.tenCumRap)}>
                <a className='dropdown-item'>{rap.tenCumRap}</a>
              </li>
            ))
          ) : (
            <li>
              <a className='dropdown-item'>Vui lòng chọn Phim</a>
            </li>
          )}
        </ul>
      </div>

      {/* Ngày xem */}
      <div
        className='dropdown dropDown--item w-item-drop'
        onClick={() =>
          setShowDropDown({
            ...initialDropDown,
            showNgay: !showDropDrow.showNgay,
          })
        }>
        <div
          className='dropdown-select'
          style={{ backgroundImage: `url(assets/img/dropdown-icon.png)` }}>
          <span>
            {ngayXem ? moment(ngayXem).format("DD-MM-YYYY") : "Ngày Xem"}
          </span>
        </div>
        {/* Dropdown Ngày */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showNgay && "show"
          }`}>
          {!listNgay.length && (
            <li>
              <a className='dropdown-item'>Vui Lòng Chọn Rạp</a>
            </li>
          )}
          {listNgay.map((ngay, index) => (
            <li key={index} onClick={() => handleChangeNgay(ngay)}>
              <a className='dropdown-item'>
                {moment(ngay).format("DD-MM-YYYY")}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Suất chiếu */}
      <div
        className='dropdown dropDown--item w-item-drop'
        onClick={() =>
          setShowDropDown({
            ...initialDropDown,
            showGio: !showDropDrow.showGio,
          })
        }>
        <div
          className='dropdown-select'
          style={{ backgroundImage: `url(assets/img/dropdown-icon.png)` }}>
          <span>{gioXem ? moment(gioXem).format("HH:mm") : "Suất Chiếu"}</span>
        </div>
        {/* Dropdown Suất Chiếu */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showGio && "show"
          }`}>
          {!listGioXem.length && (
            <li>
              <a className='dropdown-item'>Vui Lòng Chọn Ngày</a>
            </li>
          )}
          {listGioXem.map((item) => (
            <li
              key={item.maLichChieu}
              onClick={() => handleChonGio(item.gioXem, item.maLichChieu)}>
              <a className='dropdown-item'>
                {moment(item.gioXem).format("HH:mm")}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className='drop-button w-item-drop'>
        <div className='text-center' onClick={handleDatVe}>
          Mua Vé
        </div>
      </div>
    </div>
  );
}

export default MuaVe;
