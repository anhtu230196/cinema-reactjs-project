import {
  GETINFOSHOWTIMEFROMCINEMA,
  LAYCUMRAP,
  LAYDANHSACHRAPVAPHIMLICHCHIEUMOBILE,
  LAYHETHONGRAP,
} from "../actions/typeActions";

const initialState = {
  heThongRap: [],
  cumRap: [],
  lichChieuVaCumRap: {},
  lichChieuVaCumRapMobile: [],
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAYHETHONGRAP:
      return { ...state, heThongRap: action.payload };
    case LAYCUMRAP:
      return { ...state, cumRap: action.payload };
    case GETINFOSHOWTIMEFROMCINEMA:
      return { ...state, lichChieuVaCumRap: action.payload };
    case LAYDANHSACHRAPVAPHIMLICHCHIEUMOBILE:
      return {
        ...state,
        lichChieuVaCumRapMobile: [
          ...state.lichChieuVaCumRapMobile,
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default cinemaReducer;
