import { bindActionCreators } from "redux";
import { api } from "../../instance.axios";
import {
  GETINFOSHOWTIMEFROMCINEMA,
  LAYCUMRAP,
  LAYDANHSACHRAPVAPHIMLICHCHIEUMOBILE,
  LAYHETHONGRAP,
} from "./typeActions";

export const layHeThongRap = () => (dispatch) => {
  api
    .get("/QuanLyRap/LayThongTinHeThongRap")
    .then((res) => dispatch({ type: LAYHETHONGRAP, payload: res.data }));
};

export const layCumRap = (heThongRap) => (dispatch) => {
  api
    .get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${heThongRap}`)
    .then((res) => {
      dispatch({ type: LAYCUMRAP, payload: res.data });
    });
};

export const layThongTinLichChieuTheoHeThong = (maHeThongRap) => (dispatch) => {
  api
    .get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`
    )
    .then((res) =>
      dispatch({ type: GETINFOSHOWTIMEFROMCINEMA, payload: res.data[0] })
    );
};

// Mobile
export const layTatCaThongTinLichChieuTheoHeThong =
  (listMaHeThong) => async (dispatch) => {
    const res = await api.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${listMaHeThong}&maNhom=GP05`
    );
    dispatch({
      type: LAYDANHSACHRAPVAPHIMLICHCHIEUMOBILE,
      payload: res.data[0],
    });
  };
