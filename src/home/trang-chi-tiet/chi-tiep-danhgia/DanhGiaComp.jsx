import React, { useState } from "react";
import firebaseM from "../../../firebase/firebase.utils";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.scss";
import ModalDanhGia from "./modal-danhgia/ModalDanhGia";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
moment.updateLocale("en", {
  relativeTime: {
    future: "trong %s",
    past: "%s trước",
    s: "vài giây ",
    ss: "%d giây",
    m: "1 phút ",
    mm: "%d phút",
    h: "1 tiếng",
    hh: "%d giờ",
    d: "1 ngày",
    dd: "%d ngày",
    w: "1 tuần",
    ww: "%d tuần",
    M: "1 tháng",
    MM: "%d tháng",
    y: "1 năm",
    yy: "%d năm",
  },
});

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    border: "1px solid #ff55a5",
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
}));

function DanhGiaComp() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { taiKhoan, avatar } = useSelector(
    (state) => state.userReducer.userInfo
  );
  const { biDanh } = useSelector((state) => state.movieReducer.movieDetail);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const ref = firebaseM.firestore().collection(biDanh);

  useEffect(() => {
    setLoading(true);
    ref.orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => items.push(doc.data()));
      setComments(items);
      setLoading(false);
    });
  }, []);

  const submitComment = (event) => {
    const objRatingSub = {
      taiKhoan,
      avatar: avatar ? avatar : "",
      createdAt: firebaseM.firestore.FieldValue.serverTimestamp(),
      ...event,
    };
    ref
      .doc()
      .set(objRatingSub)
      .catch((err) => console.log(err));

    setOpen(false);
  };

  if (loading) {
    return <CircularProgress style={{ margin: "0 auto", display: "block" }} />;
  }

  const handleOpenDanhGia = () => {
    if (!taiKhoan) {
      return swal("Vui lòng đăng nhập để đánh giá!");
    }
    setOpen(true);
  };

  return (
    <div className='container chiTiet_danhGia'>
      <div className='danhGia_header'>
        <div className='danhGia-header__content' onClick={handleOpenDanhGia}>
          <Avatar className={classes.small} src={avatar} />
          <p>Bạn nghĩ phim thế nào...</p>
          <div className='star ml-auto'>
            {[...Array(5).keys()].map((key) => (
              <i key={key} className='fas fa-star'></i>
            ))}
          </div>
        </div>
      </div>
      <div className='danhGia_body'>
        {/* Vòng lặp comments */}
        {comments.length ? (
          comments.map((comment, index) => (
            <div className='body__content' key={index}>
              <div className='body__title'>
                <p>{comment.taiKhoan}</p>
                <div className='ml-auto body__star'>
                  {[...Array(comment.ratings).keys()].map((key) => (
                    <i key={key} className='fas fa-star'></i>
                  ))}
                </div>
              </div>
              <div className='danhGia-body__content'>
                <Avatar className={classes.small} src={comment.avatar} />
                <p>{comment.comments}</p>
              </div>
              <div className='danhGia-body__footer'>
                <p>{moment(comment.createdAt?.toDate()).fromNow()}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>Chưa Có Bình luận...</p>
        )}
      </div>
      <ModalDanhGia
        open={open}
        setOpen={setOpen}
        submitComment={submitComment}
      />
    </div>
  );
}

export default DanhGiaComp;
