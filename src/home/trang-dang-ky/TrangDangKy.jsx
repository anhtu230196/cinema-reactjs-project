import React from "react";
import HomeLayout from "../HomeLayout";
import "./TrangDangKy.scss";

function TrangDangKy() {
  return (
    <HomeLayout hideDangNhap={true}>
      <div
        className='dang-ky'
        style={{
          backgroundImage: `url("https://www.teahub.io/photos/full/350-3503557_ultraraw-avengers.jpg")`,
        }}>
        <div className='gradient'></div>
        <div className='dangky__content'>
          <div className='dangky__header mb-4'>
            <img src='assets/img/logo.png' alt='' />
          </div>
          <div className='dangky__body'>
            <form autoComplete='off'>
              <div className='row'>
                <div className='form-item'>
                  <input type='text' placeholder='Tên Tài Khoản' />
                </div>
                <div className='form-item'>
                  <input type='password' placeholder='Mật Khẩu' />
                </div>
                <div className='form-item'>
                  <input type='text' placeholder='Họ Tên' />
                </div>
                <div className='form-item'>
                  <input type='text' placeholder='Email' />
                </div>
                <div className='form-item'>
                  <input type='text' placeholder='Tên Tài Khoản' />
                </div>
                <div className='form-item mt-3'>
                  <button className='button-primary button-full my-button'>
                    Đăng Ký
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default TrangDangKy;
