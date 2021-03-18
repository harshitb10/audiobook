import { useState, useRef, React } from "react";
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
      localStorage.setItem("data", JSON.stringify(secondsToHms(currentTime)));
    }
  };

  const getCurrDuration = (e) => {
    const time = e.currentTarget.currentTime;

    setCurrentTime(time.toFixed(2));
  };

  //Bookmark function

  const storage = localStorage.getItem(
    "data",
    JSON.stringify(secondsToHms(currentTime))
  );
  console.log(storage);

  function secondsToHms(seconds) {
    if (!seconds) return "00m 00s";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min == 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  }

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
        {/* <button onClick = {click}>Click </button>  */}
        <div > <p1> Bookmark {storage}</p1> </div>
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
