import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-xs-12 about-company'>
            <h4 className='mb-3'>Cybersoft</h4>
            <p className='text-white-50'>Đồ án cuối khóa CyberSoft - ReactJs</p>
            <p className='text-white-50'>Học Viên: Vũ Anh Tú - Lớp FE47</p>
          </div>
          <div className='col-lg-3 col-xs-12 links'>
            <h4 className='mt-lg-0 mb-3 mt-sm-3 contact'>Liên Hệ</h4>
            <ul className='m-0 p-0'>
              <li>
                <a target='_blank' href='https://www.facebook.com/anhtu231196'>
                  <i className='fas fa-facebook'></i>Facebook
                </a>
              </li>

              <li>
                <a target='_blank' href='https://github.com'>
                  <i className='fas fa-github'></i>GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 col-xs-12 location'>
            <h4 className='mt-lg-0 mb-3 mt-sm-4'>Địa Chỉ</h4>
            <p className='location-item'>
              <i className='fas fa-map-marker'></i>Thành Phố Hồ Chí Minh, Việt
              Nam
            </p>
            <p className='location-item mb-0'>
              <i className='fas fa-phone'></i>078-7211-347
            </p>
            <p className='location-item'>
              <i className='fas fa-envelope'></i>anhtu23011996@gmail.com
            </p>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col copyright'>
            <p className='text-white-50 text-center p-2'>
              © 2021. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
