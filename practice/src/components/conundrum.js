import React from "react"

export default function Conundrum() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem (){
        
        const newThingsText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState,newThingsText])
        console.log(things)
    }
    
    const thingsElements = things.map(thing => <p key={thing}> {thing}</p>)
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}