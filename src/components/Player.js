import { useState, useRef } from "react";
import song from "../Songs/1.mp3";
import web from "../images/img9.jpg";

function Player() {
  
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const time = e.currentTarget.currentTime;

    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className="player">
      <h4> Audiobook website </h4>
      <div>
        <img src={web} />
      </div>
      <audio
        className="player_audio"
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        src={song}
        controls
      ></audio>
      <div>
        <button onClick={play}> paly /pause </button>

        currentTime={currentTime}
            
      </div>
      
      <div>
        <a href={song} download="1.mp3">
          {" "}
          Download audio{" "}
        </a>
      </div>
    </div>
  );
}

export default Player;
