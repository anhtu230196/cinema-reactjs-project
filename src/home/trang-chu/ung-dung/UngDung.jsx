import React from "react";
import "./UngDung.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

function SliderMobile() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings}>
        <img width='100%' src='assets/img/slide10.jpg' alt='' />
        <img width='100%' src='assets/img/slide11.jpg' alt='' />
        <img width='100%' src='assets/img/slide12.jpg' alt='' />
      </Slider>
    </div>
  );
}

function UngDung() {
  return (
    <div
      id='ungdung'
      className='ung-dung'
      style={{
        backgroundImage: `url("../../../../assets/img/background.jpg")`,
      }}>
      <div className='container mx-auto'>
        <div className='row'>
          <div className=' col-lg-6 col-12  ung-dung__text'>
            <div>
              <p className='text-u-left'>Ứng dụng tiện lợi dành cho </p>
              <p className='text-u-left'>người yêu điện ảnh</p>
              <p className='py-3'>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className='button-primary'>
                App miễn phí - Tải về ngay!
              </button>
            </div>
          </div>
          <div className='col-lg-6 col-12 ung-dung__dt text-center'>
            <div className='ung-dung__img d-flex'>
              <img className='img-dt' src='assets/img/phone.png' />
              <div className='ung-dung__carousel'>
                {/* <SliderMobile /> */}
                <img width='100%' src='assets/img/slide10.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UngDung;
