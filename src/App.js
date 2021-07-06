import { BrowserRouter, Switch, Route } from "react-router-dom";
import TrangChu from "./home/trang-chu/TrangChu";
import TrangChiTiet from "./home/trang-chi-tiet/TrangChiTiet";
import TrangDatGhe from "./home/trang-dat-ghe/TrangDatGhe";
import TrangDangKy from "./home/trang-dang-ky/TrangDangKy";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TrangThongTinNguoiDung from "./home/trang-thong-tin-nguoi-dung/TrangThongTinNguoiDung";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initAvatar, loginSuccess } from "./redux/actions/userAction";
import PrivateRoute from "./HOCs/PrivateRoute";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ff55a5",
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
      console.log(JSON.parse(avatar));
      if (avatar) {
        dispatch(initAvatar(JSON.parse(avatar).img));
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={TrangChu} />
          <Route path='/chitiet/:maPhim' component={TrangChiTiet} />
          <PrivateRoute path='/datve/:maLichChieu' component={TrangDatGhe} />
          <Route path='/dangky' component={TrangDangKy} />
          <Route path='/thongtin' component={TrangThongTinNguoiDung} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
