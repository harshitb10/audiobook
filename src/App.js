
import './App.css';
import Player from './components/Player'
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'




function App () {

  const [songs] = useState ([
{
  
  img_src :'img1.jpg',
  src:'1.mp3'
},

])



  return (
   <div className ='App'>
      <Player
      Songs={songs}
      />
 </div>
  )
  }
export default App;
