import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TrangDangKy from "./home/trang-dang-ky/TrangDangKy";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initAvatar, loginSuccess } from "./redux/actions/userAction";
import PrivateRoute from "./HOCs/PrivateRoute";
import LoadingPage from "./components/loading-page/LoadingPage";
const TrangChu = lazy(() => import("./home/trang-chu/TrangChu"));
const TrangChiTiet = lazy(() => import("./home/trang-chi-tiet/TrangChiTiet"));
const TrangDatGhe = lazy(() => import("./home/trang-dat-ghe/TrangDatGhe"));
const TrangThongTinNguoiDung = lazy(() =>
  import("./home/trang-thong-tin-nguoi-dung/TrangThongTinNguoiDung")
);

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ff55a5",
    },
    secondary: {
      main: "#0000009e",
    },
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      dispatch(loginSuccess(userInfo));
      const avatar = localStorage.getItem(userInfo.taiKhoan);
      if (avatar) {
        dispatch(initAvatar(avatar));
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route path='/' exact component={TrangChu} />
            <Route path='/chitiet/:maPhim' component={TrangChiTiet} />
            <PrivateRoute path='/datve/:maLichChieu' component={TrangDatGhe} />
            <Route path='/dangky' component={TrangDangKy} />
            <Route path='/thongtin' component={TrangThongTinNguoiDung} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
