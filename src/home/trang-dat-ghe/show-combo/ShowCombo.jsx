import React, { useState } from "react";
import "./ShowCompo.scss";
import combo1 from "../../../img/combo1.png";
import combo2 from "../../../img/combo2.png";
import { formatCurrency } from "../../../helpers";

const initialMangCombo = [
  {
    id: "combo1",
    ten: "Bắp + Coca",
    soLuong: 0,
    img: combo1,
    gia: 75000,
    thanhTien: 0,
  },
  {
    id: "combo2",
    ten: "Bắp + 2 Coca",
    soLuong: 0,
    img: combo2,
    gia: 85000,
    thanhTien: 0,
  },
];

function ShowCompo({ showCombo, setShowCombo, tongTienCombo }) {
  const [mangCombo, setMangCombo] = useState(initialMangCombo);

  const handleChangeQuantity = (comboId, tangSl) => {
    let newMangCombo = mangCombo.map((combo) => {
      if (combo.id === comboId) {
        if (!tangSl && combo.soLuong <= 0) {
          return combo;
        }
        if (!tangSl) {
          return { ...combo, soLuong: combo.soLuong - 1 };
        } else {
          return { ...combo, soLuong: combo.soLuong + 1 };
        }
      } else {
        return combo;
      }
    });
    setMangCombo(newMangCombo);
  };

  const thanhTien = () => {
    const tienCombo = mangCombo.reduce(
      (tongTien, combo) => tongTien + combo.soLuong * combo.gia,
      0
    );
    tongTienCombo(tienCombo);
    return tienCombo;
  };

  return (
    <>
      <div
        className={`back-drop ${showCombo && "show-backDrop"}`}
        onClick={() => setShowCombo(false)}></div>
      <div className={`bg-combo ${showCombo && "show-combo"}`}>
        <table className='table'>
          <div className='col-12 combo-content'>
            <div className='button-close'>
              <i
                className='fas fa-times'
                onClick={() => setShowCombo(false)}></i>
            </div>
            <h1 className='combo-heading'>Combo</h1>
            {mangCombo.map((combo) => (
              <div
                className='d-flex combo-body align-items-center py-2'
                key={combo.id}>
                <div className='combo-img col-3'>
                  <img src={combo.img} alt='' />
                </div>
                <div className='combo-text col-5'>
                  <p>{combo.ten}</p>
                  <p>{formatCurrency(combo.gia)}</p>
                </div>
                <div className='combo-soluong col-4 d-flex mx-auto'>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleChangeQuantity(combo.id, false)}>
                    {" "}
                    -{" "}
                  </button>
                  <span className='soLuong text-center align-self-center'>
                    {combo.soLuong}
                  </span>
                  <button
                    className='btn btn-info'
                    onClick={() => handleChangeQuantity(combo.id, true)}>
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
            ))}

            <div className='combo-line'></div>
            <div className='combo-footer'>
              <span className='pr-4'>Thành Tiền: </span>
              <span className='pr-4'>{formatCurrency(thanhTien())}</span>
            </div>
          </div>
        </table>
      </div>
    </>
  );
}

export default ShowCompo;
