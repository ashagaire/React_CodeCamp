import { useState } from "react"
import Favorite from "./favorite"
export default function ComplexStateObject(){

    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
   
    
    function toggleFavorite() {
        setContact(preContact => {
            return{
                ...preContact,
                isFavorite: !preContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src={require("../images/user.png")} className="card--image" />
                <div className="card--info">
                    < Favorite isFilled={contact.isFavorite} handelClick={toggleFavorite}/>
                  
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )

}