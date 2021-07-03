import {
  CLEARERRORMESSAGE,
  DANGNHAPFAILED,
  DANGNHAPSUCCESS,
  LOGOUT,
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
    case LOGOUT:
      return { ...state, userInfo: {}, error: "" };
    default:
      return state;
  }
};

export default userReducer;
