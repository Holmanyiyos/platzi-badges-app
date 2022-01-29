import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {badgeContext} from '../api';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';




const Badges =()=>{
    const {prueba} = React.useContext(badgeContext)
    const [state, setState] = React.useState({ 
        loading: true,
        error: false,
        data: undefined
    })
    useEffect(()=>{
       const myData = prueba()
        setState({loading: false, data: myData})
    },[])
    return(
        (state.loading)?<PageLoading/> :

        (state.error)?<PageError error={state.error}/> :
        <React.Fragment>
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
                            <BadgesList badges={state.data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default Badges;