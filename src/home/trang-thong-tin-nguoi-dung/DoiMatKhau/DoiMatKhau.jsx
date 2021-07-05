import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useDispatch } from "react-redux";
import { updateUserAction } from "../../../redux/actions/userAction";

function DoiMatKhau({ userInfo }) {
  const [showPass, setShowPass] = useState({
    currentPass: false,
    newPass: false,
    confirmPass: false,
  });
  const [state, setState] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.currentPass !== userInfo.matKhau) {
      return alert("Mật khẩu cũ ko đúng");
    }
    if (state.newPass !== state.confirmPass) {
      return alert("Xác nhận mật khẩu không đúng");
    }
    const userChange = {
      ...userInfo,
      soDt: userInfo.soDT,
      matKhau: state.newPass,
    };
    dispatch(updateUserAction(userChange));
  };
  return (
    <form className='user-info__content' onSubmit={handleSubmit}>
      <h1 className='title'>Thông Tin Tài Khoản</h1>
      <div className='info__content'>
        <div className='info-item '>
          <label>Mật Khẩu</label>
          <input
            type={`${showPass.currentPass ? "text" : "password"}`}
            onChange={handleChangeInput}
            name='currentPass'
          />
          <VisibilityIcon
            className={`${showPass.currentPass && "show"}`}
            onClick={() =>
              setShowPass({ ...showPass, currentPass: !showPass.currentPass })
            }
          />
        </div>

        <div className='info-item'>
          <label>Mật Khẩu Mới</label>
          <input
            type={`${showPass.newPass ? "text" : "password"}`}
            onChange={handleChangeInput}
            name='newPass'
          />
          <VisibilityIcon
            className={`${showPass.newPass && "show"}`}
            onClick={() =>
              setShowPass({ ...showPass, newPass: !showPass.newPass })
            }
          />
        </div>

        <div className='info-item'>
          <label>Xác Nhận Mật Khẩu Mới</label>
          <input
            type={`${showPass.confirmPass ? "text" : "password"}`}
            onChange={handleChangeInput}
            name='confirmPass'
          />
          <VisibilityIcon
            className={`${showPass.confirmPass && "show"}`}
            onClick={() =>
              setShowPass({ ...showPass, confirmPass: !showPass.confirmPass })
            }
          />
        </div>
      </div>
      <div className='button-capNhap'>
        <button className='button-primary button-full'>Cập Nhập</button>
      </div>
    </form>
  );
}

export default DoiMatKhau;
