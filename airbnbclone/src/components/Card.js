export default function Card(props) {
    return(
        
      
        
        <div className="card">
            {props.card.openSpots ===0 ? <div className="card-badge">SOLD OUT</div> :  props.card.location == "Online" ? <div className="card-badge">ONLINE</div> : null }
            <img src= {props.card.coverImg} className= "card-photo" />
            <div className="card-stats">
                <img src= {require("../images/star.png")} className= "card-star" />
                <span>{props.card.stats["rating"]}</span>
                <span className="gray">({props.card.stats["reviewCount"]} ) </span> 
                <span className="gray">{props.card.location}</span> 
            </div>
            <p> {props.card.title}</p>
            
            <p> <span className="bold">From ${props.card.price}</span> / person </p>
            

        </div>
            
    )
}