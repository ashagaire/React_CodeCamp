export default function Favorite(props){
    const starIcon = props.isfilled ? "star-filled.png" : "star-empty.png"

    return(
        
        
             <img 
                        src={require(`../images/${starIcon}`)} 
                        className="card--favorite"
                        onClick={props.handelClick}
                        
             />
       
    )

}