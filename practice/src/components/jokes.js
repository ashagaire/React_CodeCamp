import React, { useState } from "react"


export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown , setIsShown] = useState(false)
    function toggle(){
      
        setIsShown( prevShown => !prevShown)
        
    }
    return (
        <div className='content'>
            {props.setup && <h3 className='content'>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p> }
            
            <button onClick={toggle}>{isShown? 'Hide' : 'Show'} Punchline</button>
            
            <hr />
        </div>
    )
}