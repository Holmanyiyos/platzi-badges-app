import React from 'react';
import Logo from '../images/badge-header.svg';
import './styles/NotFound.css'

function NotFound(){
    return (
        <React.Fragment>
            <div className="Badge__heros">
                <div className="text">
                    <h1>404</h1>
                    <p>Not found</p>
                </div>
                <img src={Logo} alt="logo"/>
            </div>
        </React.Fragment>
    )
}

export default NotFound;