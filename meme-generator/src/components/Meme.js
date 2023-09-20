import memesData from  "./memesData"
export default function Form(){
   
    function showImg(){
        MemeImages = memesArray.map()

        
        const memesArray= memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        // <div className="meme-img">
        //     <img src={require(memesData.data.memes.url)} />
        // </div>
    }
    
    return(
        <main >
            <div className="form">
                
                <input type="Text" placeholder="top-text" className="form-input" />
                <input type="Text" placeholder="bottom-text" className="form-input"  />
                <button className="form-button" onClick={showImg}>Get a new meme image  🖼 </button>
                
            </div>
            
        </main>
    )
}