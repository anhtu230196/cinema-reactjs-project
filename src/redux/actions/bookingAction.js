import swal from "sweetalert";
import { api } from "../../instance.axios";
import { LAYDANHSACHPHONGVESUCCESS } from "./typeActions";

export const layDanhSachPhongVe = (maLichChieu) => async (dispatch) => {
  const res = await api.get(
    `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
  );
  dispatch({
    type: LAYDANHSACHPHONGVESUCCESS,
    payload: {
      danhSachGhe: res.data.danhSachGhe,
      thongTinPhim: res.data.thongTinPhim,
    },
  });
};

export const datVeAction = (objectDatVe, history) => async (dispatch) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let token;
    if (userInfo) {
      token = userInfo.accessToken;
    }
    const res = await api.post("/QuanLyDatVe/DatVe", objectDatVe, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res) {
      swal({
        title: "Đặt vé Thành Công!",
        text: "Tiếp tục Đặt Vé?",
        icon: "success",
        buttons: ["Hủy", "Đồng ý"],
        dangerMode: true,
      }).then((res) => {
        if (res) {
          window.location.reload();
        } else {
          history.push("/");
        }
      });
    }
  } catch (error) {
    swal({
      title: "Đặt vé thất bại!",
      text: "Vui lòng đăng nhập lại để tiếp tục đặt vé!",
      icon: "failed",
      buttons: ["Hủy", "Đồng ý"],
      dangerMode: true,
    }).then((res) => {
      if (!res) {
        history.push("/");
      }
    });
  }
};
