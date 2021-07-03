import { DANGNHAPFAILED, DANGNHAPSUCCESS, LOGOUT } from "./typeActions";
import { api } from "../../instance.axios";

export const getUserLogin = (userInfo) => (dispatch) => {
  return api
    .post("/QuanLyNguoiDung/DangNhap", userInfo)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      localStorage.setItem("userInfo", JSON.stringify(res.data));
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
