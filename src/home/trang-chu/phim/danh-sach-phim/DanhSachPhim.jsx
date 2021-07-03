import React, { useEffect, useState } from "react";
import "./DanhSachPhim.scss";
import PhimItem from "./../PhimItem/PhimItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import ModalYoutube from "../../../../components/modal-youtube/ModalYoutube";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  swipeToSlide: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

function DanhSachPhim({ movieList, statusDangChieu }) {
  const [danhSachPhim, setDanhSachPhim] = useState(movieList);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    setDanhSachPhim(movieList);
  }, [movieList]);

  useEffect(() => {
    if (statusDangChieu) {
      setDanhSachPhim([...movieList]);
    } else {
      setDanhSachPhim([...movieList].reverse());
    }
  }, [statusDangChieu]);

  return (
    <div className='mx-auto'>
      <Slider {...settings}>
        {danhSachPhim.map((movie, i) => (
          <PhimItem key={i} movie={movie} setTrailer={setTrailer} />
        ))}
      </Slider>
      {trailer && (
        <ModalYoutube trailerId={trailer} setTrailerId={setTrailer} />
      )}
    </div>
  );
}

export default DanhSachPhim;
