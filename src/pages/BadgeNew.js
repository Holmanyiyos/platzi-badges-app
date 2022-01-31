import React, { useContext, useState } from 'react';
import './styles/BadgeNew.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import { badgeContext } from '../api';


import header from '../images/platziconf-logo.svg';


function BadgeNew(){
    const {addNewBadge} = useContext(badgeContext)
    const [state, setState] = useState({ 
        loading: false,
        error: null,
        form: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }})

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
        
        try{
            addNewBadge(state.form)
            setState({loading: false})
            window.location.hash = "#/badges";
            window.location.reload()
        } catch(error){
            setState({loading: false, error: error})
        }
    }

    return(
        (state.loading) ? <PageLoading/> :
            <React.Fragment>
                <div className="BadgeNew__hero">
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
                <h1>New Attendant</h1>
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


export default BadgeNew;