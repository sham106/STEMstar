import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/hero-2.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video_player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls />
    </div>
  );
};

export default VideoPlayer;