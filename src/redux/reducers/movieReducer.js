import {
  GETMOVIEDETAILSUCCESS,
  GETMOVIELISTFAILED,
  GETMOVIELISTREQUEST,
  GETMOVIELISTSUCCESS,
} from "../actions/typeActions";

const initialState = {
  loading: false,
  movieList: [],
  movieDetail: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETMOVIELISTREQUEST:
      return { ...state, loading: true };
    case GETMOVIELISTSUCCESS:
      return { ...state, loading: false, movieList: action.payload.items };
    case GETMOVIELISTFAILED:
      return { ...state, loading: false };
    case GETMOVIEDETAILSUCCESS:
      return { ...state, movieDetail: action.payload };
    case "RESETMOVIEDETAIL":
      return { ...state, movieDetail: {} };
    default:
      return state;
  }
};

export default movieReducer;
