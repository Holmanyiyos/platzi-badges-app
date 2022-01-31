import React, { useContext, useEffect, useState } from 'react';

import './styles/BadgeEdit.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import { badgeContext } from '../api';

import header from '../images/platziconf-logo.svg';

const BadgeEdit =()=>{
    const {read, update} = useContext(badgeContext)
    const [state, setState] = useState({
        loading: false,
        error: null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }})

    useEffect(()=>{
        fetchData()
    },[])
    const findId = ()=>{
        const idArray = (window.location.hash).split("")
        const id = idArray.splice(9).reverse().splice(5).reverse().join("");
        return id
    }
    const fetchData = () =>{
        setState({loading:true, error: null})
        const idBadge = findId();
        try{
            const data = read(idBadge)
            setState({loading: false, form: data});
        } catch(error){
            setState({loading: false, error: error})
        }
    };

    const handleChange= e =>{
        setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleSubmit = e =>{
        e.preventDefault()
        setState({loading: true, error: null})
        const idBadge = findId();

        try{
            update(idBadge , state.form)
            setState({loading: false})
            window.location.hash = "#/badges";
            window.location.reload();
        } catch(error){
            setState({loading: false, error: error})
        }
    }

    return(
        (state.loading) ?<PageLoading/> :
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                       <div className="col-6">
                            <Badge 
                            firstName = {state.form.firstName || 'First Name'}
                            lastName={state.form.lastName || 'Last Name'}
                            jobTitle={state.form.jobTitle || 'Job Title'}
                            twitter={state.form.twitter || 'Twitter'}
                            email={state.form.email || 'Email'}/>   
                        </div> 
                <div className="col-6">
                    <h1>Edit Attendant</h1>
                    <BadgeForm 
                    onChange= {handleChange} 
                    onSubmit={handleSubmit}
                    formsValues={state.form}
                    error={state.error}
                    />
                </div>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default BadgeEdit;