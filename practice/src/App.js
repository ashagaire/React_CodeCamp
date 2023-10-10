
import './style_login_form.css' ;

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState(
    {
      email: "" , 
      password :"",
      confirmPassword: "",
      marketing: false
    }
)
  
    
function handleChange(event) {
  const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

function handleSubmit(event) {
    event.preventDefault()
    if(formData.password === formData.confirmPassword) {
        console.log("Successfully signed up")
    } else {
        console.log("Passwords do not match")
        return
    }
    
    if(formData.marketing) {
        console.log("Thanks for signing up for our newsletter!")
    }
}
return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                name="email"
                type="email" 
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="form--input"
            />
            <input 
                name="password"
                type="password" 
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="form--input"
            />
            <input 
                name="confirmPassword"
                type="password" 
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form--input"
            />
            
            <div className="form--marketing">
                <input
                    name="marketing"
                    id="okayToEmail"
                    checked={formData.marketing}
                    onChange={handleChange}
                    type="checkbox"
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
)
}
