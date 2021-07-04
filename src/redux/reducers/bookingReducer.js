import { LAYDANHSACHPHONGVESUCCESS } from "../actions/typeActions";

const initialState = {
  danhSachGhe: [],
  thongTinPhim: {},
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAYDANHSACHPHONGVESUCCESS:
      return {
        ...state,
        danhSachGhe: action.payload.danhSachGhe,
        thongTinPhim: action.payload.thongTinPhim,
      };
    default:
      return state;
  }
};

export default bookingReducer;
