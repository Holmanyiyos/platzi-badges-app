import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css'
import Gravatar from './Gravatar';

class BadgesList extends React.Component{
    
    render(){
        if(this.props.badges.length === 0){
            return (
                <React.Fragment>
                    <h3>We don't find any badges</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create a new Badge</Link>
                </React.Fragment>
            )
        }
        return (<ul className="list-unstyled">
        {this.props.badges.map((badge)=>{
            return(
            <li key={badge.id} className="card">
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <div className="container-fluid">
                <Gravatar className="Badge__avatar" 
                email={badge.email} 
                alt="avatar"/>
                <div className="card-body" >
                <h3 className="card_title">{badge.firstName} {badge.lastName}</h3>
                <div className="container__twitter">
                    <img className="icon__twitter" src="https://image.flaticon.com/icons/png/512/733/733579.png" alt="" />
                    <span>@{badge.twitter}</span>
                </div>
                <p className="card-text"> {badge.jobTitle}</p>
                </div>
                </div>
                </Link>
            </li>
            )
        })}
    </ul>);
    }
}

export default BadgesList; 