import React, { useState, useEffect, memo } from "react";
import "./TrangDatGhe.scss";
import HomeLayout from "../HomeLayout";
import DanhSachGhe from "./danh-sach-ghe/DanhSachGhe";
import ShowCompo from "./show-combo/ShowCombo";
import rapDemo from "../../img/rap-demo.jpg";
import comboIcon from "../../img/comboIcon.png";
import { useDispatch, useSelector } from "react-redux";
import {
  datVeAction,
  layDanhSachPhongVe,
} from "../../redux/actions/bookingAction";
import { formatCurrency } from "../../helpers";

function TrangDatGhe({ match: { params } }) {
  const [showCombo, setShowCombo] = useState(false);
  const [coundown, setCoundown] = useState(120);
  const [danhSachGheDat, setDanhSachGheDat] = useState([]);
  const { taiKhoan } = useSelector((state) => state.userReducer.userInfo);
  const [tienCombo, setTienCombo] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhongVe(params.maLichChieu));
  }, [params]);

  const { thongTinPhim, danhSachGhe } = useSelector(
    (state) => state.bookingReducer
  );
  // Hàm chạy thời gian
  // useEffect(() => {
  //   const interver = setTimeout(() => {
  //     setCoundown((prevTime) => prevTime - 1);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(interver);
  //   };
  // }, [coundown]);

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

  // Hàm callback nhận lại ghế(inc dangDat: boolean) từ component GheItem
  const setDanhSachGheDangDat = (ghe) => {
    const { dangDat, giaVe, maGhe, tenGhe } = ghe;
    if (dangDat) {
      setDanhSachGheDat([...danhSachGheDat, { tenGhe, maGhe, giaVe }]);
    } else {
      setDanhSachGheDat(
        danhSachGheDat.filter((gheChon) => gheChon.maGhe !== maGhe)
      );
    }
  };

  const handleDatVe = () => {
    const filterDanhSachGhe = danhSachGheDat.map((gheDat) => ({
      maGhe: gheDat.maGhe,
      giaVe: gheDat.giaVe,
    }));
    // Tạo object gửi lên server
    const objectDatVe = {
      maLichChieu: thongTinPhim.maLichChieu,
      danhSachVe: filterDanhSachGhe,
      taiKhoanNguoiDung: taiKhoan,
    };
    dispatch(datVeAction(objectDatVe));
  };

  const tienVe = () => {
    return danhSachGheDat.reduce((tienVe, gheDat) => tienVe + gheDat.giaVe, 0);
  };

  const tongTienVeVaCombo = () => {
    return tienVe() + tienCombo;
  };

  return (
    <HomeLayout>
      {danhSachGhe ? (
        <div className='container datVe-container pb-5'>
          <div className='row'>
            {/* Cột Ghế */}
            <div className='col-12 col-sm-6 col-lg-7 danhSachGhe'>
              <div className='screen mx-auto my-2'>
                <p className='small text-center'>Screen</p>
              </div>

              <DanhSachGhe
                danhSachGhe={danhSachGhe}
                setDanhSachGheDangDat={setDanhSachGheDangDat}
              />

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
                <img src={thongTinPhim.hinhAnh} alt='' />
                <div className='ve-info'>
                  <p className='info-title'>{thongTinPhim.tenPhim}</p>
                  <div className='d-flex'>
                    <p className='ngayGio'>
                      {thongTinPhim.gioChieu}{" "}
                      <span> - {thongTinPhim.ngayChieu}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='ve__info-rap'>
                <img src={rapDemo} alt='' />
                <div className='veRap-info'>
                  <p className='info-title'>{thongTinPhim.tenCumRap}</p>
                  <p className='small'>{thongTinPhim.diaChi}</p>
                  <div className='ghe-dang-dat d-xl-flex  d-sm-block'>
                    Rạp 1 - Ghế Đang Đặt: &nbsp;
                    <div className='gheDat'>
                      {danhSachGheDat
                        .sort((a, b) => a.maGhe - b.maGhe)
                        .map((gheDangChon) => (
                          <p className='tenGhe'>{gheDangChon.tenGhe}</p>
                        ))}
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
                        <p className='giaVe__right'>
                          {formatCurrency(tienCombo)}
                        </p>
                      </div>
                      <div className='col-12 d-flex bap-nuoc'>
                        <p className='giaVe__left'>Vé:</p>
                        <p className='giaVe__right'>
                          {formatCurrency(tienVe())}
                        </p>
                      </div>
                      <div className='col-12 d-flex tongTien'>
                        <p className='giaVe__left'>Tổng Tiền</p>
                        <p className='giaVe__right'>
                          {formatCurrency(tongTienVeVaCombo())}
                        </p>
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
                <button
                  className={`button-primary button-full ${
                    !danhSachGheDat.length && "disabled"
                  }`}
                  disabled={!danhSachGheDat.length}
                  onClick={handleDatVe}>
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
          <ShowCompo
            showCombo={showCombo}
            setShowCombo={setShowCombo}
            tongTienCombo={setTienCombo}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </HomeLayout>
  );
}

export default TrangDatGhe;
