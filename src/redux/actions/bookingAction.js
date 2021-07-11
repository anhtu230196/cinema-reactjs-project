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
    const res = await api.post("/QuanLyDatVe/DatVe", objectDatVe);
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
    console.log(error);
  }
};
