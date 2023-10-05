import './style-boxchallange.css';
import boxes from './components/boxes'
import BoxChallenge from './components/boxchallange';

import { useState } from 'react';
function App() {
  const [squares, setSquares] = useState(boxes)
  
  function colorChange(id){
    setSquares(
      prevSquares => { 
        return prevSquares.map((square)=>{
          return square.id === id ?{...square, on: !square.on} : square
        })
      })
  }
  
    


  const squareElements = squares.map(square => (
      <BoxChallenge  className="box" key={square.id} id={square.id} on={square.on} handelClick= {colorChange} />
  ))  
  

  
    
    
  return (
    <main>
      {squareElements}

    </main>)
       
   
}

export default App;