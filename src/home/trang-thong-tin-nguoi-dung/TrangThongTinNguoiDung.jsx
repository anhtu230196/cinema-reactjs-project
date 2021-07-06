import React, { useState, useEffect } from "react";
import DefaultAvatar from "../../img/default-user-image.png";
import HomeLayout from "../HomeLayout";
import "./TrangThongTinNguoiDung.scss";
import ThongTinTaiKhoan from "./ThongTinTaiKhoan/ThongTinTaiKhoan";
import DoiMatKhau from "./DoiMatKhau/DoiMatKhau";
import LichSuDatVe from "./LichSuDatVe/LichSuDatVe";
import { useDispatch, useSelector } from "react-redux";
import {
  layThongTinNguoiDung,
  changeAvatar,
} from "../../redux/actions/userAction";

function TrangThongTinNguoiDung() {
  const [compActive, setCompActive] = useState(0); //0=info \ 1=password \ 2=history
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (userInfo.taiKhoan) {
      dispatch(layThongTinNguoiDung(userInfo.taiKhoan));
    }
  }, [userInfo.taiKhoan]);

  const handleChangeImage = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setAvatar(e.target.result);
        dispatch(changeAvatar(e.target.result, userInfo.taiKhoan));
      };
    }
  };
  return (
    <HomeLayout>
      <div className='user-info mx-auto'>
        <div className='row user-info--content'>
          <div className='col-12 col-sm-5 user-info-left'>
            <div className='user-avatar'>
              <div className='avatar'>
                <label htmlFor='fileInput'>
                  <img src={userInfo.avatar || DefaultAvatar} alt='' />
                  {/* <img src={`${avatar}`} alt='' /> */}
                  <i className='fas fa-upload'></i>
                  <div className='bgc-label'></div>
                </label>
              </div>
              <div className='avatar-upload'>
                <input
                  id='fileInput'
                  type='file'
                  hidden
                  onChange={handleChangeImage}
                />
              </div>
            </div>
            <div className='user-name'>
              <p>Hi! 12345</p>
            </div>
            <div className='user-info-method'>
              <p
                className={`method-item ${compActive === 0 && "active"}`}
                onClick={() => setCompActive(0)}>
                Thông Tin Tài Khoản
              </p>
              <p
                className={`method-item ${compActive === 1 && "active"}`}
                onClick={() => setCompActive(1)}>
                Đổi Mật Khẩu
              </p>
              <p
                className={`method-item ${compActive === 2 && "active"}`}
                onClick={() => setCompActive(2)}>
                Lịch Sử Đặt Vé
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-7 user-info-right'>
            {compActive === 0 && <ThongTinTaiKhoan userInfo={userInfo} />}
            {compActive === 1 && <DoiMatKhau userInfo={userInfo} />}
            {compActive === 2 && (
              <LichSuDatVe danhSachDatVe={userInfo.thongTinDatVe} />
            )}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default TrangThongTinNguoiDung;
