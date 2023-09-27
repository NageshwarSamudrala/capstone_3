import './form.css';
import React, { Component } from 'react';

class Form extends Component{
    
    render(){
        return(
            <div className="division">
                <h2>Get in Touch with us:</h2>
                <label>First Name : </label>
                <input type="text" placeholder="Your Firstname Here" /><br /><br />
                <label>Last Name : </label>
                <input type="text" placeholder="Your Lastname here" /><br /><br />
                <label>Email : </label>
                <input type="email" placeholder="Enter your Email" /><br /><br />
                <label>Mobile : </label>
                <input type="number" placeholder="Enter your phone number" /><br /><br />
                <label>Comments : </label>
                <input type="text" placeholder="Your comments" /><br /><br />
                <label>Address : </label>
                <input type="text" placeholder="Address" /><br /><br />
                <input type="submit" placeholder="submit" />
            </div>
        )
    }
}

export default Form;