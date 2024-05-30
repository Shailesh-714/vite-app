import React, { useRef } from 'react';
import './Videoplayer.css';
import video from '../../assets/clgvid.mp4';

const Videoplayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current || e.target.classList.contains('close-button')) {
      setPlayState(false);
    }
  };

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <button className="close-button" onClick={closePlayer}>X</button>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Videoplayer;
