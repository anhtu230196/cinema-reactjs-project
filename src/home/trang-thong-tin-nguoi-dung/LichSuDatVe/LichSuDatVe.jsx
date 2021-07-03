import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      textAlign: "center",
    },
    "& ul": {
      display: "flex",
      justifyContent: "center",
      color: "white",
      "& button": {
        color: "#c3c3c3",
        border: "1px solid #c3c3c3",
      },
      "& .MuiPaginationItem-root": {
        color: "#c3c3c3",
      },
    },
  },
  paginate: {
    color: "white",
  },
}));

function LichSuDatVe() {
  const classes = useStyles();
  return (
    <div>
      <h1 className='title'>Lịch Sử Đặt Vé</h1>
      <div className='lichSuVe-content'>
        <table className='table table-light table-striped'>
          <thead>
            <tr>
              <th>Phim</th>
              <th>Thời Gian Đặt</th>
              <th>Số Ghế</th>
              <th>Mã Vé</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {/* Vòng lặp thông tin */}
            <tr>
              <td>Tên Phim</td>
              <td>00:52 ~ (23-06)</td>
              <td>160 199 </td>
              <td>585555</td>
              <td>80000</td>
            </tr>
            <tr>
              <td>Tên Phim</td>
              <td>00:52 ~ (23-06)</td>
              <td>160 199</td>
              <td>585555</td>
              <td>80000</td>
            </tr>
            <tr>
              <td>Tên Phim</td>
              <td>00:52 ~ (23-06)</td>
              <td>160 199</td>
              <td>585555</td>
              <td>80000</td>
            </tr>
            <tr>
              <td>Tên Phim</td>
              <td>00:52 ~ (23-06)</td>
              <td>160 199</td>
              <td>585555</td>
              <td>80000</td>
            </tr>
            <tr>
              <td>Tên Phim</td>
              <td>00:52 ~ (23-06)</td>
              <td>160 199</td>
              <td>585555</td>
              <td>80000</td>
            </tr>
          </tbody>
        </table>
        <div className={classes.root}>
          <Pagination
            count={4}
            variant='outlined'
            shape='rounded'
            color='primary'
          />
        </div>
      </div>
    </div>
  );
}

export default LichSuDatVe;
