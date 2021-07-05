import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import moment from "moment";

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

function LichSuDatVe({ danhSachDatVe }) {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (e, currentPage) => {
    setCurrentPage(currentPage);
  };
  const itemsPerPage = 5;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const pageNumber = Math.ceil(danhSachDatVe.length / itemsPerPage);

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
            {danhSachDatVe.slice(firstIndex, lastIndex).map((thongtin) => (
              <tr key={thongtin.maVe}>
                <td>{thongtin.tenPhim}</td>
                <td>{moment(thongtin.ngayDat).format("HH:mm ~ DD/MM/YYYY")}</td>
                <td>
                  {thongtin.danhSachGhe.map((ghe) => (
                    <span className='px-1'>{ghe.tenGhe}</span>
                  ))}{" "}
                </td>
                <td>{thongtin.maVe}</td>
                <td>{thongtin.giaVe}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={classes.root}>
          <Pagination
            onChange={handlePageChange}
            count={pageNumber}
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
