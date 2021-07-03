import { api } from "../../instance.axios";
import {
  GETMOVIEDETAIL,
  GETMOVIEDETAILSUCCESS,
  GETMOVIELISTFAILED,
  GETMOVIELISTREQUEST,
  GETMOVIELISTSUCCESS,
} from "./typeActions";

export const getMovieRequest =
  (soTrang = 1, soPhanTu = 10) =>
  (dispatch) => {
    dispatch({ type: GETMOVIELISTREQUEST });
    api
      .get(
        `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}`
      )
      .then((res) => dispatch({ type: GETMOVIELISTSUCCESS, payload: res.data }))
      .catch(() => dispatch({ type: GETMOVIELISTFAILED }));
  };

export const getMovieDetail = (movieId) => (dispatch) => {
  dispatch({ type: GETMOVIEDETAIL });
  api
    .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    .then((res) =>
      dispatch({ type: GETMOVIEDETAILSUCCESS, payload: res.data })
    );
};
