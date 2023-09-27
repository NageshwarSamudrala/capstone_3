import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Diploma in Electronics and communication Engineering" where="Aditya Polytechnic Colleges" from="July 2021" to="Present"/>
            <Widecard title="SSLC | HSC" where="sri Aadarsha High School" from="2010" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    