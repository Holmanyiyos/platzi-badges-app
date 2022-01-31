import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {badgeContext} from '../api';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';




function Badges (){
    const {loading, setLoading, state, setState, data} = React.useContext(badgeContext)
    useEffect(()=>{
        if (data.length > 0) {
            setLoading(false)
            setState({error: null})
        }else{
            console.log(loading)
        }
    },[])
    return(
        (loading)? <PageLoading/> : 

        (state.error)?<PageError error={state.error}/> :<React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="conf logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList data={data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default Badges;