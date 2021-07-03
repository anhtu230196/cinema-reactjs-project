import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import movieReducer from "./reducers/movieReducer";
import cinemaReducer from "./reducers/cinemaReducer";

const rootReducer = combineReducers({
  userReducer,
  movieReducer,
  cinemaReducer,
});

export default rootReducer;
