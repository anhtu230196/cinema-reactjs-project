import React, { useState, useEffect } from "react";

import "./TrangChiTiet.scss";
import YoutubeModal from "../../components/modal-youtube/ModalYoutube";
import "./TrangChiTiet.scss";
import HomeLayout from "../HomeLayout";
import ChiTietRap from "./chi-tiet-rap/ChiTietRap";
import ChiTietInfo from "./chi-tiet-info/ChiTietInfo";
import { useParams } from "react-router-dom";
import backgroundImage from "../../img/bg-detail.png";
import iconPlay from "../../img/icon-play.png";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../redux/actions/movieAction";
import { getTrailerId } from "../../helpers/index";
import moment from "moment";

function TrangChiTiet() {
  const [currentWidth, setCurrentWidth] = useState(undefined);
  const { maPhim } = useParams();
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movieReducer);

  const [showContent, setShowContent] = useState(0); // show page lịch chiếu, thông tin, đánh giá
  const [trailerId, setTrailerId] = useState("");
  const [heThongActiveDefault, setHeThongActive] = useState("");

  useEffect(() => {
    if (movieDetail.maPhim) {
      setHeThongActive(movieDetail.heThongRapChieu[0].maHeThongRap);
    }
  }, [movieDetail]);

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    dispatch(getMovieDetail(maPhim));
  }, [maPhim]);
  return (
    <HomeLayout>
      <div className='detail'>
        <div className='detail-header'>
          <div className='styleGradient'></div>
          <img src={backgroundImage} className='img-header' alt='' />
          {currentWidth <= 767 && (
            <>
              <div
                className='img-header-sm'
                style={{
                  backgroundImage: `url(${movieDetail.hinhAnh})`,
                }}>
                <div
                  className='play-icon'
                  onClick={() =>
                    setTrailerId(getTrailerId(movieDetail.trailer))
                  }>
                  <img src={iconPlay} alt='' />
                </div>
              </div>
              <div className='header-title'>
                <p className='khoiChieu'>
                  {moment(movieDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
                </p>
                <div className='detail-header__title my-lg-2 d-flex'>
                  <p>{movieDetail.tenPhim}</p>
                </div>
                <p>120 Phút</p>
              </div>
              <div className='break-line mt-3'></div>
            </>
          )}

          {currentWidth > 767 && (
            <div className='detail-header__content d-flex'>
              <div className='detail-header-info'>
                <div className='header-detail-img'>
                  <div className='img-phim'>
                    <img src={movieDetail.hinhAnh} alt='' />
                  </div>
                  <div className='img-border'>
                    <img src='assets/img/border.png' alt='' />
                  </div>
                  <div
                    className='play-icon'
                    onClick={() =>
                      setTrailerId(getTrailerId(movieDetail.trailer))
                    }>
                    <img src={iconPlay} alt='' />
                  </div>
                </div>

                <div className='header-title'>
                  <p>
                    {moment(movieDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
                  </p>
                  <div className='detail-header__title d-flex'>
                    <p>{movieDetail.tenPhim}</p>
                  </div>
                  <p className='duration'>120 Phút</p>
                  <div className='header-title__button mt-3'>
                    <button className='button-primary button-big'>
                      Mua Vé
                    </button>
                  </div>
                </div>
              </div>
              <div className='header-circleStar ml-auto'>
                <div className='circlePercent text-center'>
                  {/* Star Active*/}
                  {movieDetail.danhGia ? (
                    <>
                      {[
                        ...Array(Math.round(movieDetail.danhGia / 2)).keys(),
                      ].map((key) => (
                        <i key={key} className='fas fa-star'></i>
                      ))}

                      {/* Star non active */}
                      {movieDetail.danhGia / 2 < 5 &&
                        [
                          ...Array(
                            5 - Math.round(movieDetail.danhGia / 2)
                          ).keys(),
                        ].map((key) => (
                          <i key={key} className='far fa-star'></i>
                        ))}

                      <p className='mt-2'>100 người đánh giá</p>
                    </>
                  ) : (
                    <p>Chưa có đánh giá</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div id='lichChieu' className='detail-footer mx-auto'>
          <div className='detail-footer-title text-center'>
            <h3
              className={`d-inline ${showContent === 0 ? "active" : ""}`}
              onClick={() => setShowContent(0)}>
              Lịch Chiếu
            </h3>
            <h3
              className={`d-inline ${showContent === 1 ? "active" : ""}`}
              onClick={() => setShowContent(1)}>
              Thông Tin
            </h3>
            <h3
              className={`d-inline ${showContent === 2 ? "active" : ""}`}
              onClick={() => setShowContent(2)}>
              Đánh Giá
            </h3>
          </div>
          <div className='detail-footer__content py-lg-5 py-md-3'>
            {/* <ChiTietInfo /> */}
            {movieDetail.tenPhim && showContent === 0 && (
              <ChiTietRap
                heThongRapChieu={movieDetail.heThongRapChieu}
                hinhAnh={movieDetail.hinhAnh}
                tenPhim={movieDetail.tenPhim}
                heThongActiveDefault={heThongActiveDefault}
              />
            )}
          </div>
        </div>

        {/* Trailer */}
        {trailerId && (
          <YoutubeModal trailerId={trailerId} setTrailerId={setTrailerId} />
        )}
      </div>
    </HomeLayout>
  );
}

export default TrangChiTiet;
