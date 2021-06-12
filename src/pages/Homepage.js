import React from 'react';
import Logo from '../images/platziconf-logo.svg';
import Astronautas from '../images/astronauts.svg';
import {Link} from 'react-router-dom';
import './styles/Homepage.css'

class Homepage extends React.Component{
    render(){
        return(
            <div className="Homepage__container">
                <div className="left">
                <img src={Logo} alt="logo" className="logo"/>
                <h2>PRINT YOUR BADGES</h2>
                <p>The easiest way to manage your conference</p>
                <Link className="btn btn-primary boton" to="/badges">Start now</Link>
                </div>
                <img src={Astronautas} alt="astronautas" className="astronauta"/>
            </div>
        )
    }
}

export default Homepage;