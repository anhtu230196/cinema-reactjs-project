import React, { memo, useMemo, useState } from "react";
import { Carousel } from "3d-react-carousal";
import "./Slider.scss";
import ModalYoutube from "./../../../components/modal-youtube/ModalYoutube";
import { getTrailerId } from "../../../helpers";

function Slider() {
  const mangSlider = [
    {
      img: "assets/img/rom.jpg",
      img_blur: "assets/img/rom.jpg",
      trailer: "https://www.youtube.com/embed/XRm1P7oGpMQ",
    },
    {
      img: "assets/img/slider-13ReasonWhy.jpg",
      img_blur: "assets/img/slider-13ReasonWhy-blur.jpg",
      trailer: "https://www.youtube.com/watch?v=tOICXpsImEI",
    },
    {
      img: "assets/img/slider-matbiec.jpg",
      img_blur: "assets/img/slider-matbiec-blur.jpg",
      trailer: "https://www.youtube.com/embed/ITlQ0oU7tDA",
    },
    {
      img: "assets/img/slider-transform.jpg",
      img_blur: "assets/img/slider-transform-blur.jpg",
      trailer: "https://www.youtube.com/watch?v=ET9SHYzMz_4",
    },
  ];

  const [trailerId, setTrailerId] = useState("");

  const handleSetTrailerId = (trailer) => {
    setTrailerId(getTrailerId(trailer));
  };

  const renderImages = () => {
    return mangSlider.map((img, i) => (
      <>
        <div key={i} className='covers'>
          <img
            className='iconPlay'
            src='assets/img/icon-play.png'
            alt=''
            onClick={() => handleSetTrailerId(img.trailer)}
          />
          <img src={img.img} alt='i' />
        </div>
      </>
    ));
  };

  const memoizedValue = useMemo(() => renderImages(), []);

  return (
    <>
      <Carousel slides={memoizedValue} autoplay={true} interval={5000} />
      {trailerId && (
        <ModalYoutube trailerId={trailerId} setTrailerId={setTrailerId} />
      )}
    </>
  );
}

export default Slider;
