import React from "react";
import { useHistory } from "react-router-dom";
import { getTrailerId } from "../../../../helpers";
import "./PhimItem.scss";

function PhimItem({ movie, setTrailer }) {
  const history = useHistory();
  const handleSetTrailer = () => {
    setTrailer(getTrailerId(movie.trailer));
  };
  return (
    <div className='item-phim mx-auto p-3'>
      <div className='item-phim-wrap'>
        <div className='item-phim__content'>
          <div className='item-phim__img'>
            <img
              src={`${movie.hinhAnh}`}
              alt=''
              className='item-phim__thumbnail'
            />
          </div>
          <div className='item-phim__bomtan bom-tan'>
            <img src='assets/img/item-phim-bomtan.png' alt='' />
          </div>
          <div className='item-phim__rate'>
            <p>{movie.danhGia / 2}</p>
            <div className='item-danhGia'>
              <div className='d-flex mx-auto danhGia'>
                {/* Số lượng sao */}
                {[...Array(movie.danhGia / 2).keys()].map((key) => (
                  <img key={key} src='assets/img/star-icon.png' alt='' />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='item-phim__info py-2'>
          <div className='item-phim__title'>
            {/* <span className='item-phim__maPhim'>Cyber</span> */}
            <span>{movie.tenPhim.toUpperCase()}</span>
          </div>
          <p>120 Phút</p>
        </div>
        <div className='item-phim__hover'>
          <div
            className='hover__bg'
            onClick={() => history.push(`/chitiet/${movie.maPhim}`)}></div>
          <img
            src='assets/img/icon-play.png'
            alt=''
            onClick={handleSetTrailer}
          />
          <div className='hover__button'>
            <button className='w-100 button-primary'>
              <span>Mua Vé</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhimItem;
