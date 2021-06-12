import React from 'react';
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeView.css';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';

import api from '../api';


class BadgeView extends React.Component{
    state={
        loading:true,
        error: null,
        data: undefined,
    };

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async ()=>{
        this.setState({loading: true, error: null});

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        };
    }
    render(){
        const badge = this.state.data
        if(this.state.loading){
            return <PageLoading/>
        };
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return(
            <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt= 'Logo de la conferencia'></img>     
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{Badge.firstName} {Badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            firstName={badge.firstName} 
                            lastName={badge.lastName}
                            email={badge.email} 
                            twitter={badge.twitter} 
                            jobTitle={badge.jobTitle}/>
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                                </div>

                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeView;