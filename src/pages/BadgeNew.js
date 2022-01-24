import React from 'react';

import './styles/BadgeNew.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';


import header from '../images/platziconf-logo.svg';

class BadgeNew extends React.Component{
    state = { 
        loading: false,
        error: null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }};

    handleChange= e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e =>{
        e.preventDefault()
        this.setState({loading: true, error: null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading: false})

            this.props.history.push('/badges');
        } catch(error){
            this.setState({loading: false, error: error})
            console.log(this.state.form)
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                       <div className="col-6">
                            <Badge 
                            firstName = {this.state.form.firstName || 'First Name'}
                            lastName={this.state.form.lastName || 'Last Name'}
                            jobTitle={this.state.form.jobTitle || 'Job Title'}
                            twitter={this.state.form.twitter || 'Twitter'}
                            email={this.state.form.email || 'Email'}/>   
                        </div> 
                <div className="col-6">
                <h1>New Attendant</h1>
                    <BadgeForm 
                    onChange= {this.handleChange} 
                    onSubmit={this.handleSubmit}
                    formsValues={this.state.form}
                    error={this.state.error}
                    />
                </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;