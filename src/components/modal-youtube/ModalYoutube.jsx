import React from "react";
import "./ModalYoutube.scss";

function ModalYoutube({ trailerId, setTrailerId }) {
  return (
    <div className='modal-youtube' onClick={() => setTrailerId("")}>
      <div className='modal-content--config'>
        <iframe
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/${trailerId}`}
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default ModalYoutube;
