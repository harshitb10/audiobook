import React from 'react'
import Control from './Control'
import song from '../Songs/1.mp3'
import DownloadLink from 'react-download-link'
import web from '../images/img1.jpg'



function player ({props}) {
    return (
        <div className ='player'>
        <h4> Audiobook website </h4>
        <div>
      
        <img src ={web} />
        </div>
        <Control/>
        <audio className ='player_audio' 
        src = {song}
        controls 
        
        >
           
        </audio>
        <div>
        <a href={song} download="1.mp3"> Download audio </a>
        </div>

        


    




    </div>

        
        
      
      
    )
}

export default player
