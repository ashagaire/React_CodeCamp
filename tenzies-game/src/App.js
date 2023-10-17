import './style.css';
import Dice from './component/dice';
import { useState } from 'react';

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice(){

    const newDice = []
    for (let i=0;  i<10; i++){
      newDice.push({
      value: Math.floor(Math.random()*6+1),
      isHeld : false
    })}
    return(newDice)
  }

  function rollDice(){
    setDice(allNewDice())
  }

  // function holdDice(){
  //   setDice(preveDice => (...preveDice ,isHeld = true ))
  // }

  
  const diceElements = dice.map(die => <Dice value={dievalue}/>)

  return (
    
    <main>
      <div className="dice-container">
 
        {diceElements }
        
      </div>
      
        <button className='roll-dice' onClick={rollDice}> Roll</button>
     
    </main>
    
  );
}

export default App;
