import React, { useEffect, useState } from "react";
import "./PhimComponent.scss";
import DanhSachPhim from "./danh-sach-phim/DanhSachPhim";
import { useDispatch, useSelector } from "react-redux";
import { getMovieRequest } from "../../../redux/actions/movieAction";

function PhimComponent() {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movieReducer);
  const [dangChieu, setDangChieu] = useState(true);

  useEffect(() => {
    dispatch(getMovieRequest());
  }, []);

  return (
    <div className='container '>
      <div className='pt-5'>
        <div className='text-center'>
          <h3
            className={`d-inline mr-4 px-3 ${dangChieu ? "active" : ""}`}
            onClick={() => setDangChieu(true)}>
            ĐANG CHIẾU
          </h3>
          <h3
            className={`d-inline mr-4 px-3 ${!dangChieu ? "active" : ""}`}
            onClick={() => setDangChieu(false)}>
            SẮP CHIẾU
          </h3>
        </div>

        <div className='dsPhim__content'>
          <div className='content_DC pt-3'>
            <DanhSachPhim movieList={movieList} statusDangChieu={dangChieu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhimComponent;
