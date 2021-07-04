import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import movieReducer from "./reducers/movieReducer";
import cinemaReducer from "./reducers/cinemaReducer";
import bookingReducer from "./reducers/bookingReducer";

const rootReducer = combineReducers({
  userReducer,
  movieReducer,
  cinemaReducer,
  bookingReducer,
});

export default rootReducer;
