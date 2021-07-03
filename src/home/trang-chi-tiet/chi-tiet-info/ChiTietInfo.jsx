import React from "react";
import "./ChiTietInfo.scss";
function ChiTietInfo() {
  return (
    <div className='chiTiet-info mx-auto' id='detailMain'>
      <div className='row isFlex detailMainStyle'>
        <div className='col-md-8 col-lg-6 col-12 film left'>
          <div className='row rowLeftInfo'>
            <p className='contentTitle'>Ngày công chiếu</p>
            <p className='contentInfo ng-binding'></p>
          </div>

          <div className='row rowLeftInfo'>
            <p className='contentTitle'>Đạo diễn</p>
            <p className='contentInfo ng-binding'>Anthony Bell</p>
          </div>

          <div className='row rowLeftInfo'>
            <p className='contentTitle'>Diễn viên</p>
            <p className='contentInfo ng-binding'></p>
          </div>

          <div className='row rowLeftInfo'>
            <p className='contentTitle'>Thể Loại</p>
            <p className='contentInfo ng-binding'>
              hoạt hình, phiêu lưu, hài hước
            </p>
          </div>

          <div className='row rowLeftInfo'>
            <p className='contentTitle'>Định dạng</p>
            <p className='contentInfo ng-binding'>2D/Digital</p>
          </div>

          <div className='row rowLeftInfo'>
            <p className='contentTitle'>Quốc Gia SX</p>
            <p className='contentInfo ng-binding'>Mỹ</p>
          </div>
        </div>
        <div className='break'></div>
        <div className='col-md-4 col-lg-6 col-12 film right'>
          <div className='row rowLeftInfo'>
            <p className='contentTitle'>Nội dung</p>
          </div>

          <div className='row rowLeftInfo'>
            <p className='contentInfoFull description ng-binding'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              vero rerum provident perspiciatis dolorum rem adipisci autem
              repellat id quae! Commodi consequuntur quam numquam modi et
              architecto, dolores impedit minus!
            </p>
          </div>

          <div className='row rowLeftInfo'>
            <p className='contentInfoFull'></p>
          </div>
        </div>
      </div>
      <div className='break'></div>
      <div className='chiTiet-trailer'>
        <p>Trailer Phim</p>
        <div className='trailer text-center my-4'>
          <iframe
            width='100%'
            height='550px'
            src='https://www.youtube.com/embed/KMX_FuOLoCI'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default ChiTietInfo;
