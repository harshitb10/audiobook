import logo from './logo.svg';
import './App.css';
import Player from './components/Player'
import { useState } from 'react';



function App () {

  const [songs] = useState ([
{
  title: 'song',
  img_src :'img1.jpg',
  src:'1.mp3'
},

])

const [currentSongIndex,setCurrentSongIndex]=
useState(0);

  return (
   <div className ='App'>
      <Player
      Songs={songs}
      />
 </div>
  )
  }
export default App;
