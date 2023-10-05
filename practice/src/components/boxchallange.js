

export default function BoxChallenge(props){
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

   
    return(
        
            <div style={styles} className="box" onClick={()=>props.handelClick(props.id)}>            </div>
            
    )
}