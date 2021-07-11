import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
const StyledRating = withStyles({
  iconFilled: {
    color: "#ff55a5",
  },
  iconHover: {
    color: "#ff55a5",
  },
})(Rating);

const labels = {
  1: "Tệ :(",
  2: "Tạm Ổn..",
  3: "Cũng Được...",
  4: "Hay!",
  5: "Rất Hay!",
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    padding: "40px 32px 30px",
    maxWidth: "80%",
    width: "1000px",
    textAlign: "center",
    color: "#000",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0",
    },
    "&:focus-visible": {
      outline: "none !important",
    },
  },
  textField: {
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
    ".Mui-focused": {
      outline: "none",
      border: "none",
    },
  },
  button: {
    float: "right",
    marginTop: 10,
  },
}));

function ModalDanhGia({ open, setOpen, submitComment }) {
  const classes = useStyles();
  const [ratings, setRatings] = useState(null);
  const [hover, setHover] = useState(null);
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({
    message: "",
    error: false,
  });

  //   console.log(user, slugMovie);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ratings) {
      return setErrors({
        ...errors,
        error: true,
        message: "*Bạn chưa đánh giá",
      });
    }
    if (!comments.trim()) {
      return setErrors({
        ...errors,
        error: true,
        message: "*Bạn chưa bình luận",
      });
    }
    submitComment({ ratings, comments });
  };
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <div className={classes.paper}>
          <Box
            style={{
              height: 60,
              display: "inline-block",
            }}>
            <StyledRating
              size='large'
              value={ratings}
              onChange={(event, newValue) => {
                setRatings(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            <Box ml={2}>{labels[hover !== -1 ? hover : ratings]}</Box>
          </Box>
          <form
            autoComplete='off'
            style={{ padding: 20 }}
            onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              fullWidth
              placeholder='Cảm Nghĩ của Bạn về Phim...'
              variant='outlined'
              value={comments}
              onChange={(e) => {
                setComments(e.target.value);
                setErrors({ ...errors, error: false, message: "" });
              }}
              helperText={errors.message}
              color='secondary'
              error={errors.error}
            />
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={handleSubmit}>
              ĐĂNG
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}

export default ModalDanhGia;
