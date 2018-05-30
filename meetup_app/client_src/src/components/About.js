import React from 'react';
import { Link } from 'react-router-dom';


//just used to display main component and navbar component
const About = () => (
    <div className="container">
        <br></br>
                <Link className="btn grey" to="/">Back</Link>
                <h1>About </h1>
                <hr></hr>
                <p className="flow-text"> Come set up discussions, meetups, and connect with other people worldwide! </p>
                <p className="flow-text"> Easy access, easy loads, and quick updates! </p>
            
            <hr></hr>
            </div>

)

export default About;
