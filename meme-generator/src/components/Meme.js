import { useState } from "react"
import memesData from  "./memesData"
export default function Meme(){

    const [meme ,setMeme] = useState({topText : "" , bottomText : "", randomImage: ""  })


    
    const [allMemeImages, setAllMemeImages]= useState(memesData.data.memes)

    function getMemeImage(){
        const memesArray= allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(preMeme => ({
            ...preMeme,
            randomImage: url
        }))
        
    }
        

    
    return(
        <main >
            <div className="form">
                
                <input type="Text" placeholder="top-text" className="form-input" />
                <input type="Text" placeholder="bottom-text" className="form-input"  />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image  🖼 </button>
                
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}