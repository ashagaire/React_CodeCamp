export default function Card(props) {
    return(
        
      
        
        <div className="card">
            <img src= {props.img} className= "card-photo" />
            <div className="card-stats">
                <img src= {require("../images/star.png")} className= "card-star" />
                <span>{props.stats["rating"]}</span>
                <span className="gray">({props.stats["reviewCount"]} ) </span> 
                <span className="gray">{props.location}</span> 
            </div>
            <p> {props.title}</p>
            <p> {props.description}</p>
            <p> <span className="bold">From ${props.price}</span> / person </p>
            <p> {props.openSpots}</p>

        </div>
            
    )
}