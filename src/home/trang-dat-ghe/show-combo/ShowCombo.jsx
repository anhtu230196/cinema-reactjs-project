import React from "react";
import "./ShowCompo.scss";
import combo1 from "../../../img/combo1.png";
import combo2 from "../../../img/combo2.png";

function ShowCompo({ showCombo, setShowCombo }) {
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
            <div className='d-flex combo-body align-items-center py-2'>
              <div className='combo-img col-3'>
                <img src={combo1} alt='' />
              </div>
              <div className='combo-text col-5'>
                <p>Bắp + Coca</p>
                <p>75.000 đ</p>
              </div>
              <div className='combo-soluong col-4 d-flex mx-auto'>
                <button className='btn btn-danger'> - </button>
                <span className='soLuong text-center align-self-center'>0</span>
                <button className='btn btn-info'> + </button>
              </div>
            </div>
            <div className='d-flex combo-body align-items-center py-2'>
              <div className='combo-img col-3'>
                <img src={combo2} alt='' />
              </div>
              <div className='combo-text col-5'>
                <p>Bắp + 2 Coca</p>
                <p>105.0000 đ</p>
              </div>
              <div className='combo-soluong col-4 d-flex mx-auto'>
                <button className='btn btn-danger'> - </button>
                <span className='soLuong text-center align-self-center'>0</span>
                <button className='btn btn-info'> + </button>
              </div>
            </div>
            <div className='combo-line'></div>
            <div className='combo-footer'>
              <span className='pr-4'>Thành Tiền: </span>
              <span className='pr-4'>0 đ</span>
            </div>
          </div>
        </table>
      </div>
    </>
  );
}

export default ShowCompo;
