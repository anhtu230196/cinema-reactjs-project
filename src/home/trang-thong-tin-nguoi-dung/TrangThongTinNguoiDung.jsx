import React from "react";
import HomeLayout from "../HomeLayout";
import "./TrangThongTinNguoiDung.scss";
import ThongTinTaiKhoan from "./ThongTinTaiKhoan/ThongTinTaiKhoan";
import DoiMatKhau from "./DoiMatKhau/DoiMatKhau";
import LichSuDatVe from "./LichSuDatVe/LichSuDatVe";

function TrangThongTinNguoiDung() {
  return (
    <HomeLayout>
      <div className='user-info mx-auto'>
        <div className='row user-info--content'>
          <div className='col-12 col-sm-5 user-info-left'>
            <div className='user-avatar'>
              <div className='avatar'>
                <label htmlFor='fileInput'>
                  <img src='assets/img/default-user-image.png' alt='' />
                  <i className='fas fa-upload'></i>
                  <div className='bgc-label'></div>
                </label>
              </div>
              <div className='avatar-upload'>
                <input type='file' hidden />
              </div>
            </div>
            <div className='user-name'>
              <p>Hi! 12345</p>
            </div>
            <div className='user-info-method'>
              <p className='method-item active'>Thông Tin Tài Khoản</p>
              <p className='method-item'>Đổi Mật Khẩu</p>
              <p className='method-item'>Lịch Sử Đặt Vé</p>
            </div>
          </div>
          <div className='col-12 col-sm-7 user-info-right'>
            {/* <ThongTinTaiKhoan /> */}
            {/* <DoiMatKhau /> */}
            <LichSuDatVe />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default TrangThongTinNguoiDung;
