import {
  ADDAVATAR,
  DANGNHAPFAILED,
  DANGNHAPSUCCESS,
  LAYTHONGTINDATVE,
  LOGOUT,
  UPDATEUSERINFO,
} from "./typeActions";
import { api } from "../../instance.axios";

export const getUserLogin = (userInfo) => (dispatch) => {
  return api
    .post("/QuanLyNguoiDung/DangNhap", userInfo)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      const avatar = localStorage.getItem(res.data.taiKhoan);
      if (avatar) {
        dispatch(initAvatar(JSON.parse(avatar).img));
      }
    })
    .catch((err) =>
      dispatch({ type: DANGNHAPFAILED, payload: err.response.data })
    );
};

export const logoutAction = () => {
  localStorage.removeItem("userInfo");
  return { type: LOGOUT };
};

export const loginSuccess = (userInfo) => {
  return {
    type: DANGNHAPSUCCESS,
    payload: userInfo,
  };
};

export const layThongTinNguoiDung = (taiKhoan) => (dispatch) => {
  return api
    .post("/QuanLyNguoiDung/ThongTinTaiKhoan", { taiKhoan })
    .then(
      (res) =>
        dispatch({
          type: LAYTHONGTINDATVE,
          payload: {
            thongTinDatVe: res.data.thongTinDatVe,
            matKhau: res.data.matKhau,
          },
        })
      // console.log(res.data)
    )
    .catch((error) => console.log(error));
};

export const updateUserAction = (user) => (dispatch) => {
  return api
    .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
    .then((res) => {
      const userInfoLocal = JSON.parse(localStorage.getItem("userInfo"));
      userInfoLocal.hoTen = res.data.hoTen;
      localStorage.setItem("userInfo", JSON.stringify(userInfoLocal));
      dispatch({
        type: UPDATEUSERINFO,
        payload: {
          matKhau: res.data.matKhau,
          soDT: res.data.soDT,
          hoTen: res.data.hoTen,
        },
      });
      alert("Cập Nhập Thành Công");
    })
    .catch((err) => console.log(err));
};

// Thay đổi avatar, lưu local, dispatch lên store
export const changeAvatar = (fileUrl, taiKhoan) => (dispatch) => {
  const imgUser = { taiKhoan: taiKhoan, img: fileUrl };
  // localStorage.setItem(taiKhoan, JSON.stringify(imgUser));
  dispatch(initAvatar(fileUrl));
};

export const initAvatar = (urlImg) => {
  return { type: ADDAVATAR, payload: urlImg };
};
