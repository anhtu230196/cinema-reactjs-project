import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/styles";
import { useStyles } from "./style.js";
import { Link } from "react-router-dom";
import { getUserLogin } from "../../redux/actions/userAction.js";
import { CLEARERRORMESSAGE } from "../../redux/actions/typeActions.js";

class ModalDangNhap extends Component {
  state = {
    open: false,
    info: {
      taiKhoan: "",
      matKhau: "",
    },
  };

  handleOpen = () => {
    this.setState((state) => ({ ...state, open: true }));
  };

  handleClose = () => {
    this.setState((state) => ({
      ...state,
      open: false,
      info: {}, // Clear value inputs when close the modal
    }));
    this.props.dispatch({ type: CLEARERRORMESSAGE }); // Remove Error Message when close the modal
  };

  handleDangNhap = (e) => {
    e.preventDefault();
    this.props.dispatch(getUserLogin(this.state.info));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      info: { ...state.info, [name]: value },
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={this.state.open}>
            <div className={classes.paper}>
              <img src='assets/img/logo.png' alt='' width='40%' />
              <div className={classes.dangNhapBody}>
                <form onSubmit={this.handleDangNhap}>
                  {this.props.errorMessage}
                  <div className={classes.formItem}>
                    <input
                      type='text'
                      placeholder='Tên Đăng Nhập'
                      name='taiKhoan'
                      value={this.state.info.taiKhoan}
                      className={classes.inputCustom}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className={classes.formItem}>
                    <input
                      type='text'
                      placeholder='Mật Khẩu'
                      name='matKhau'
                      value={this.state.info.matKhau}
                      className={classes.inputCustom}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div
                    className={classes.formItem}
                    style={{ width: "30%", margin: "0 auto" }}>
                    <button
                      className='button-primary button-full'
                      style={{ border: "1px solid #fff" }}>
                      Đăng Nhập
                    </button>
                  </div>
                </form>
                <p className='mt-2'>
                  Bạn chưa có tài khoản?
                  <Link
                    to='/dangky'
                    style={{ textDecoration: "none" }}
                    className='text-primary'
                    onClick={() => {
                      this.handleClose();
                    }}>
                    {" "}
                    Đăng Ký
                  </Link>
                </p>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default withStyles(useStyles)(ModalDangNhap);
