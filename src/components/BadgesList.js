import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css'
import Gravatar from './Gravatar';

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges]= React.useState(badges)

    React.useMemo(
        ()=>{ 
            const result= badges.filter(badge=>{
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })
        setFilteredBadges(result)
    }, [badges, query]);

    return {filteredBadges,setQuery, query}
}

function BadgesList(props){
    const badges = props.badges

        const {query,setQuery, filteredBadges}= useSearchBadges(badges)

        if(filteredBadges.length === 0){
            return (
                <React.Fragment>
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className='form-control'
                    value={query}
                    onChange={(e)=>{
                    setQuery(e.target.value)
                }}
                />
            </div>
                    <h3>We don't find any badges</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create a new Badge</Link>
                </React.Fragment>
            )
        }
        return (
        <div className="BadgesList">
        <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" className='form-control'
            value={query}
            onChange={(e)=>{
               setQuery(e.target.value)
            }}
            />
        </div>
        
        
        <ul className="list-unstyled">
        {filteredBadges.map((badge)=>{
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
    </ul>
    </div>)
}

export default BadgesList; 