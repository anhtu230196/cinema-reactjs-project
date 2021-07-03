import React from "react";

function DoiMatKhau() {
  return (
    <form className='user-info__content'>
      <h1 className='title'>Thông Tin Tài Khoản</h1>
      <div className='info__content'>
        <div className='info-item '>
          <label>Mật Khẩu</label>
          <input type='password' />
        </div>

        <div className='info-item'>
          <label>Mật Khẩu Mới</label>
          <input type='password' />
        </div>

        <div className='info-item'>
          <label>Xác Nhận Mật Khẩu Mới</label>
          <input type='password' />
        </div>
      </div>
      <div className='button-capNhap'>
        <button className='button-primary button-full'>Cập Nhập</button>
      </div>
    </form>
  );
}

export default DoiMatKhau;
