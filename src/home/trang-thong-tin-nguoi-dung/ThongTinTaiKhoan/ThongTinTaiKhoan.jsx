import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserAction } from "../../../redux/actions/userAction";

function ThongTinTaiKhoan({ userInfo }) {
  const [userChange, setUserChange] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setUserChange({
      hoTen: userInfo.hoTen,
      soDt: userInfo.soDT,
    });
  }, [userInfo]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserChange({ ...userChange, [name]: value });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const userToChange = { ...userInfo, ...userChange };
    // console.log(userToChange);
    dispatch(updateUserAction(userToChange));
  };
  return (
    <form className='user-info__content' onSubmit={handleUpdateUser}>
      <h1 className='title'>Thông Tin Tài Khoản</h1>
      <div className='info__content'>
        <div className='info-item disabled'>
          <label>Tài Khoản</label>
          <input type='text' disabled value={userInfo.taiKhoan} />
        </div>
        <div className='info-item disabled'>
          <label>Mật Khẩu</label>
          <input type='password' disabled value={userInfo.matKhau} />
        </div>

        <div className='info-item disabled'>
          <label>Email</label>
          <input type='text' disabled value={userInfo.email} />
        </div>
        <div className='info-item'>
          <label>Họ Tên</label>
          <input
            type='text'
            value={userChange.hoTen}
            onChange={handleChangeInput}
            name='hoTen'
          />
        </div>
        <div className='info-item'>
          <label>Số Điện Thoại</label>
          <input
            type='text'
            value={userChange.soDt}
            onChange={handleChangeInput}
            name='soDt'
          />
        </div>
      </div>
      <div className='button-capNhap'>
        <button className='button-primary button-full'>Cập Nhập</button>
      </div>
    </form>
  );
}

export default ThongTinTaiKhoan;
