import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./HeThongRap.scss";
import DanhSachRap from "./lich-chieu-rap/DanhSachRap";
import { layHeThongRap } from "../../../redux/actions/cinemaAction";
import { useDispatch, useSelector } from "react-redux";

function HeThongRap({}) {
  const [currentWindowWidth, setCurrentWindowWidth] = useState(undefined);
  const dispatch = useDispatch();
  const { heThongRap } = useSelector((state) => state.cinemaReducer);

  const [heThongActive, setHeThongActive] = useState("BHDStar");

  useEffect(() => {
    setCurrentWindowWidth(window.innerWidth);
    if (window.innerWidth <= 450) {
      setHeThongActive("");
    } else {
      setHeThongActive("BHDStar");
    }
  }, [window.innerWidth]);

  useEffect(() => {
    dispatch(layHeThongRap());
  }, []);

  const handleChangeHeThongRap = (maHeThong) => {
    // Trên giao diện mobile, khi click vào hệ thống đang active thì tắt active
    if (currentWindowWidth <= 450 && heThongActive === maHeThong) {
      setHeThongActive("");
    } else {
      setHeThongActive(maHeThong);
    }
  };

  return (
    <div className='cover'>
      <div className='container pt-4 mx-auto'>
        <div className='rap__title'>
          <h3 className='active'>CỤM RẠP</h3>
        </div>
        <div className='rap__content'>
          <div className='rap__logo row'>
            {/* Vòng lặp các hệ thống rạp */}
            {heThongRap.map((heThong) => (
              <div
                key={heThong.maHeThongRap}
                className={`col-md-2 col-sm-4 rap__item ${
                  heThong.maHeThongRap === heThongActive ? "active" : ""
                }`}>
                <div className='bg-item'>
                  <div
                    className='img-logo'
                    onClick={() =>
                      handleChangeHeThongRap(heThong.maHeThongRap)
                    }>
                    <img src={heThong.logo} alt='hethongrap' />
                    <p>{heThong.tenHeThongRap}</p>
                    <i>
                      <ArrowDropDownIcon />
                    </i>
                  </div>

                  {/* Dropdown cho mobile */}
                  {currentWindowWidth <= 450 && (
                    <div
                      className={`collapse rap__lich-chieu-item ${
                        heThong.maHeThongRap === heThongActive && "show"
                      }`}>
                      <DanhSachRap
                        heThongRap={heThong.maHeThongRap}
                        heThongActive={heThongActive}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Kết thúc vòng lặp hệ thống rạp */}
          </div>

          {/* Dropdown cho destop và table */}
          {currentWindowWidth > 450 && (
            <div className='rap__lich-chieu'>
              <DanhSachRap heThongActive={heThongActive} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeThongRap;
