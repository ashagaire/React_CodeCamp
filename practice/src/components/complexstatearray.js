import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function ComplexStateArray() {

    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray(prevThingArray => {
            return [...prevThingArray, `Thing ${thingsArray.length + 1}`]
            
        })

    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

