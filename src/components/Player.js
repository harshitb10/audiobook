import { useState, useRef, React } from "react";
import song from "../Songs/1.mp3";
import web from "../images/img9.jpg";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
 

  const audioRef = useRef();

 
  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
       audio.play();
      
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
      localStorage.setItem("data", JSON.stringify((currentTime)));
    }
  }
  
  


  const getCurrDuration =  (e) => {
    
    const time = e.currentTarget.currentTime
    
    setCurrentTime(time) 
    
    }



 let storage = localStorage.getItem("data",JSON.stringify((currentTime))
);
  console.log(storage);

  
  const Bookmark   = () => {
    let storage = localStorage.getItem("data",JSON.stringify((currentTime))
);
  console.log(storage);
    const audio = audioRef.current
    audio.currentTime = storage
    audio.play();
  }



  return (
    <div className="player">
      <h4> Audiobook website </h4>
      <div>
        <img src={web} />
      </div>
      <audio
      controls
        className="player_audio"
        ref={audioRef}
        onTimeUpdate = {getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration)
        }}
        src={song}
       
      ></audio>
     
      <div>
        
        <button onClick={play}> paly /pause </button>
        <button onClick={Bookmark}> bookmark </button>
        
        <div > <p1> Bookmark {storage}</p1> </div>
      </div>
      <div className='timer'>{(currentTime)}</div>
      <div className='timer'>{(duration)}</div>
      
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