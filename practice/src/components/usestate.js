import { useState } from "react"

export default function UseStatePractice(){
    const [isImportant, setIsImportant] =useState("Yes")

    function handelClick(){
        setIsImportant("NO")
    }
    return(
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handelClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
        
    )
}