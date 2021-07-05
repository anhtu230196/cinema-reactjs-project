import {
  ADDAVATAR,
  CLEARERRORMESSAGE,
  DANGNHAPFAILED,
  DANGNHAPSUCCESS,
  LAYTHONGTINDATVE,
  LOGOUT,
  UPDATEUSERINFO,
} from "../actions/typeActions";

const initialState = {
  userInfo: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANGNHAPSUCCESS:
      return { ...state, userInfo: action.payload };
    case DANGNHAPFAILED:
      return { ...state, error: action.payload };
    case CLEARERRORMESSAGE:
      return { ...state, error: "" };
    case LAYTHONGTINDATVE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          thongTinDatVe: action.payload.thongTinDatVe,
          matKhau: action.payload.matKhau,
        },
      };
    case UPDATEUSERINFO:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          hoTen: action.payload.hoTen,
          soDT: action.payload.soDT,
          matKhau: action.payload.matKhau,
        },
      };
    case ADDAVATAR:
      return {
        ...state,
        userInfo: { ...state.userInfo, avatar: action.payload },
      };
    case LOGOUT:
      return { ...state, userInfo: {}, error: "" };

    default:
      return state;
  }
};

export default userReducer;
