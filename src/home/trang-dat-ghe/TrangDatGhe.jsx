import React, { useState, useEffect, memo } from "react";
import "./TrangDatGhe.scss";
import HomeLayout from "../HomeLayout";
import DanhSachGhe from "./danh-sach-ghe/DanhSachGhe";
import ShowCompo from "./show-combo/ShowCombo";
import { Redirect } from "react-router-dom";
import rapDemo from "../../img/rap-demo.jpg";
import comboIcon from "../../img/comboIcon.png";

function TrangDatGhe() {
  const [showCombo, setShowCombo] = useState(false);
  const [coundown, setCoundown] = useState(120);

  useEffect(() => {
    const interver = setTimeout(() => {
      setCoundown((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearTimeout(interver);
    };
  }, [coundown]);

  // Về Trang Chủ Khi Hết Thời Gian Đặt Vé
  if (coundown <= 0) {
    // return <Redirect to='/' exact />;
  }

  // Format CountDown String
  const getCountDownString = () => {
    const minutes = Math.floor(coundown / 60);
    const seconds = coundown % 60;
    return seconds < 10 ? `0${minutes}:0${seconds}` : `0${minutes}:${seconds}`;
  };

  return (
    <HomeLayout>
      <div className='container datVe-container pb-5'>
        <div className='row'>
          {/* Cột Ghế */}
          <div className='col-12 col-sm-6 col-lg-7 danhSachGhe'>
            <div className='screen mx-auto my-2'>
              <p className='small text-center'>Screen</p>
            </div>

            <DanhSachGhe />

            <div className='d-flex mx-auto justify-content-center ghe-review pt-5'>
              <div className='chuaDat  d-flex flex-column mx-3'>
                <div className='ghe-chuaDat mx-auto'></div>
                <p className='text-center'>Ghế Chưa Đặt</p>
              </div>
              <div className='chuaDat  d-flex flex-column mx-3'>
                <div className='ghe-dangDat mx-auto'></div>
                <p className='text-center'>Ghế Đang Đặt</p>
              </div>
              <div className='chuaDat  d-flex flex-column mx-3'>
                <div className='ghe-daDat mx-auto'></div>
                <p className='text-center'>Ghế Đã Đặt</p>
              </div>
            </div>
          </div>
          {/* End Cột Ghế */}

          {/* Cột Thông Tin Đặt Vé */}
          <div className='col-12 col-sm-6 col-lg-5'>
            <div className='ve__info-phim'>
              <img
                src='http://movie0706.cybersoft.edu.vn/hinhanh/inside-out_gp05.jpg'
                alt=''
              />
              <div className='ve-info'>
                <p className='info-title'>Hon Ba Da Thit</p>
                <p className='small'>dia95 chi3 nay2 no ne ba con </p>
                <div className='d-flex'>
                  <p className='ngayGio'>
                    22:00 <span> - 01/02/2021</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='ve__info-rap'>
              <img src={rapDemo} alt='' />
              <div className='veRap-info'>
                <p className='info-title'>BDH Star cineplex - thao3 dien962</p>
                <p className='small'>L5-Megamall, 159 XL Hà Nội, Q.2</p>
                <div className='ghe-dang-dat d-xl-flex  d-sm-block'>
                  Rạp 1 - Ghế Đang Đặt: &nbsp;
                  <div className='gheDat'>
                    <p className='tenGhe'>02</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='ve__giaVe'>
              <div className='row d-md-block d-flex d-lg-flex'>
                <div className='col-lg-7 col-md-12 giaVe-bap'>
                  <div className='row giaVe_combo'>
                    <div className='col-12 d-flex bap-nuoc'>
                      <p className='giaVe__left'>Bắp Nước:</p>
                      <p className='giaVe__right'>0 VND</p>
                    </div>
                    <div className='col-12 d-flex bap-nuoc'>
                      <p className='giaVe__left'>Vé:</p>
                      <p className='giaVe__right'>0 VND</p>
                    </div>
                    <div className='col-12 d-flex tongTien'>
                      <p className='giaVe__left'>Tổng Tiền</p>
                      <p className='giaVe__right'>0 VND</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5 col-md-12 giaVe__time ml-md-auto d-flex d-md-flex d-lg-block giaVe__time'>
                  <p>Thời Gian Giữ Ghế: </p>
                  <p className='countdown'>{getCountDownString()}</p>
                </div>
              </div>
            </div>
            <div className='button_datVe'>
              <button className='button-primary button-full disabled' disabled>
                Đặt Vé
              </button>
            </div>
          </div>
          {/* End Cột Thông Tin Đặt Vé */}
        </div>
        <img
          src={comboIcon}
          alt=''
          className={`btn-combo ${showCombo && "show-combo"}`}
          onClick={() => setShowCombo(!showCombo)}
        />
        <ShowCompo showCombo={showCombo} setShowCombo={setShowCombo} />
      </div>
    </HomeLayout>
  );
}

export default TrangDatGhe;
