import React from "react";
import { useState } from "react";
import "./MuaVe.scss";

function MuaVe() {
  const initialDropDown = {
    showPhim: false,
    showRap: false,
    showNgay: false,
    showGio: false,
  };
  const [showDropDrow, setShowDropDown] = useState(initialDropDown);

  return (
    <div className='dropDown-muaVe d-md-none d-lg-flex mx-auto'>
      {/* Dropdown Phim */}
      <div
        className='dropdown dropDown--item dropdown--selectPhim'
        onClick={() =>
          setShowDropDown((prev) => ({
            ...initialDropDown,
            showPhim: !prev.showPhim,
          }))
        }>
        <div
          className='dropdown-select'
          style={{ backgroundImage: `url(assets/img/dropdown-icon.png)` }}>
          <span>Phim</span>
        </div>
        {/* Dropdown List Phim */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showPhim && "show"
          }`}>
          <li>
            <a className='dropdown-item'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil
              atque sunt.
            </a>
          </li>
          <li>
            <a className='dropdown-item'>Lorem ipsum dolor sit amet conse</a>
          </li>
          <li>
            <a className='dropdown-item'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              beatae temporibus
            </a>
          </li>
        </ul>
      </div>

      {/* Dropdown Rạp */}
      <div
        className='dropdown dropDown--item w-item-drop'
        onClick={() =>
          setShowDropDown((prev) => ({
            ...initialDropDown,
            showRap: !prev.showRap,
          }))
        }>
        <div
          className='dropdown-select'
          style={{ backgroundImage: `url(assets/img/dropdown-icon.png)` }}>
          <span>Rạp</span>
        </div>
        {/* Dropdown List Rạp */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showRap && "show"
          }`}>
          <li>
            <a className='dropdown-item'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              beatae temporibus, unde optio recusandae tempora assumenda
              mollitia, quaerat culpa esse ea. Dolorem animi at soluta, quod
              accusamus velit modi repellat.
            </a>
          </li>
        </ul>
      </div>

      {/* Ngày xem */}
      <div
        className='dropdown dropDown--item w-item-drop'
        onClick={() =>
          setShowDropDown({
            ...initialDropDown,
            showNgay: !showDropDrow.showNgay,
          })
        }>
        <div
          className='dropdown-select'
          style={{ backgroundImage: `url(assets/img/dropdown-icon.png)` }}>
          <span>Ngày Xem</span>
        </div>
        {/* Dropdown Ngày */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showNgay && "show"
          }`}>
          <li>
            <a className='dropdown-item'>2</a>
          </li>
        </ul>
      </div>

      {/* Suất chiếu */}
      <div
        className='dropdown dropDown--item w-item-drop'
        onClick={() =>
          setShowDropDown({
            ...initialDropDown,
            showGio: !showDropDrow.showGio,
          })
        }>
        <div
          className='dropdown-select'
          style={{ backgroundImage: `url(assets/img/dropdown-icon.png)` }}>
          <span>Suất Chiếu</span>
        </div>
        {/* Dropdown Suất Chiếu */}
        <ul
          className={`dropdown-menu dropdown-menu--config ${
            showDropDrow.showGio && "show"
          }`}>
          <li>
            <a className='dropdown-item'>2</a>
          </li>
        </ul>
      </div>

      {/* Button */}
      <div className='drop-button w-item-drop'>
        <div className='text-center'>Mua Vé</div>
      </div>
    </div>
  );
}

export default MuaVe;
