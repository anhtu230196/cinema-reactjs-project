import React, { useState, memo } from "react";
import "./Header.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpSharpIcon from "@material-ui/icons/ArrowDropUpSharp";
import { Avatar } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useRef } from "react";
import ModalDangNhap from "./../../home/modal-dang-nhap/ModalDangNhap.jsx";
import DatGheInfo from "../../home/trang-dat-ghe/dat-ghe-info/DatGheInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logoutAction } from "../../redux/actions/userAction";
import logo from "../../img/logo.png";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid gray",
    boxShadow: theme.shadows[5],
    padding: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

function Header({ hideDangNhap }) {
  const [hideMenu, setHideMenu] = useState(true); // toggle Menu Navs: true => ẩn menu
  const classes = useStyles();
  const modalDangNhap = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userInfo, error } = useSelector((state) => state.userReducer);

  const handleOpenModal = () => {
    modalDangNhap.current.handleOpen();
  };

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  useEffect(() => {
    if (userInfo) {
      modalDangNhap.current.handleClose(); //KHi đăng nhập thành công, có useInfo => đóng Modal Đắng nhập
    }
  }, [userInfo]);

  return (
    <header className='header'>
      <nav className='navbar navbar-expand-sm'>
        <Link to='/' className='navbar-brand'>
          <img src={logo} alt='' width='100px' />
        </Link>
        <div className='navbar-toggler navbar-toggler--config'>
          {hideMenu ? (
            <ArrowDropDownIcon
              fontSize='large'
              style={{ color: "white" }}
              onClick={() => setHideMenu(false)}
            />
          ) : (
            <ArrowDropUpSharpIcon
              fontSize='large'
              style={{ color: "white" }}
              onClick={() => setHideMenu(true)}
            />
          )}
        </div>
        <div className={`${hideMenu && "collapse"} navbar-collapse`}>
          <ul className='navbar-nav text-center mx-auto'>
            <li className='nav-item'>
              <a className='nav-link'>Cụm Rạp</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Tin Tức</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Ứng Dụng</a>
            </li>
          </ul>
        </div>
      </nav>
      <DatGheInfo />
      <ModalDangNhap
        ref={modalDangNhap}
        dispatch={dispatch}
        errorMessage={error}
      />

      {/* Ẩn nút đăng nhập với những page ko cần hiển thị (TrangDangKy) */}
      {hideDangNhap ? null : (
        <>
          <div className='navbar__right'>
            {userInfo.taiKhoan ? (
              <div className='helloUser d-flex'>
                <Avatar className={classes.small} src='' />

                <span className='UserName'>{userInfo.taiKhoan}</span>
                <div className='UserInfo'>
                  <div className='arrow-up'></div>
                  <div className='UserInfo__content'>
                    <div className='inFo'>
                      <span onClick={() => history.push("/thongtin")}>
                        Thông Tin Người Dùng
                      </span>
                    </div>
                    <div className='logOut'>
                      <span onClick={handleLogout}>Đăng Xuất</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button className='button-primary' onClick={handleOpenModal}>
                Đăng nhập
              </button>
            )}
          </div>
        </>
      )}
    </header>
  );
}

export default memo(Header);
