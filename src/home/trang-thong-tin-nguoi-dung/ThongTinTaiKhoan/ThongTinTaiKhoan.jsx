import React from "react";

function ThongTinTaiKhoan() {
  return (
    <form className='user-info__content'>
      <h1 className='title'>Thông Tin Tài Khoản</h1>
      <div className='info__content'>
        <div className='info-item disabled'>
          <label>Tài Khoản</label>
          <input type='text' disabled />
        </div>
        <div className='info-item disabled'>
          <label>Mật Khẩu</label>
          <input type='text' disabled />
        </div>

        <div className='info-item disabled'>
          <label>Email</label>
          <input type='text' disabled />
        </div>
        <div className='info-item'>
          <label>Họ Tên</label>
          <input type='text' />
        </div>
        <div className='info-item'>
          <label>Số Điện Thoại</label>
          <input type='text' />
        </div>
      </div>
      <div className='button-capNhap'>
        <button className='button-primary button-full'>Cập Nhập</button>
      </div>
    </form>
  );
}

export default ThongTinTaiKhoan;
