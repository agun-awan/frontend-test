import React from 'react';
import frontend from '../image/FRONTend.png'
import test from '../image/TEST.png'

function Navigation(){
    return(
        <nav className="navbar navbar-flow">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <img src={test} alt="test"/>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <img src={frontend} alt="fr"/>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;