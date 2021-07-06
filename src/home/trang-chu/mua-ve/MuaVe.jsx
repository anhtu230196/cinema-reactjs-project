import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../../redux/actions/movieAction";
import "./MuaVe.scss";

function MuaVe() {
  const { movieList, movieDetail } = useSelector((state) => state.movieReducer);
  const wrapperRef = useRef();
  const initialDropDown = {
    showPhim: false,
    showRap: false,
    showNgay: false,
    showGio: false,
  };
  // state hiển thị trên giao diện
  const [tenPhim, setTenPhim] = useState("");

  // State đổ data
  const [cumRapVaLichChieu, setCumRapVaLichChieu] = useState([]);
  const [danhSachRap, setDanhSachRap] = useState([]);
  const [lichChieuPhim, setLichChieuPhim] = useState([]);

  useEffect(() => {
    if (movieDetail.heThongRapChieu) {
      let dsCumRapChieu = movieDetail.heThongRapChieu;
      let cumRap = [];
      for (let i = 0; i < dsCumRapChieu.length; i++) {
        cumRap.push(...dsCumRapChieu[i].cumRapChieu);
        // console.log(...dsCumRapChieu[i].cumRapChieu);
      }
      // console.log(cumRap)
      setDanhSachRap(cumRap.map((item) => item.maCumRap));
      setLichChieuPhim(cumRap.map((item) => item.lichChieuPhim));
      setCumRapVaLichChieu(cumRap);
    }
  }, [movieDetail]);

  console.log(danhSachRap);
  console.log(lichChieuPhim);

  useEffect(() => {
    // console.log(cumRapVaLichChieu);
  }, [cumRapVaLichChieu]);

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
    setTenPhim(tenPhim);
    dispatch(getMovieDetail(maPhim));
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
          <span>Rạp</span>
        </div>
        {/* Dropdown List Rạp */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showRap && "show"
          }`}>
          <li>
            <a className='dropdown-item'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              beatae temporibus, unde optio recusandae tempora assumenda
              mollitia, quaerat culpa esse ea. Dolorem animi at soluta, quod
              accusamus velit modi repellat.
            </a>
          </li>
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
          <span>Ngày Xem</span>
        </div>
        {/* Dropdown Ngày */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showNgay && "show"
          }`}>
          <li>
            <a className='dropdown-item'>2</a>
          </li>
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
          <span>Suất Chiếu</span>
        </div>
        {/* Dropdown Suất Chiếu */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showGio && "show"
          }`}>
          <li>
            <a className='dropdown-item'>2</a>
          </li>
        </ul>
      </div>

      {/* Button */}
      <div className='drop-button w-item-drop'>
        <div className='text-center'>Mua Vé</div>
      </div>
    </div>
  );
}

export default MuaVe;
