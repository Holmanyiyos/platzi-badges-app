import React, { useContext, useEffect, useState } from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeView from './BadgeView'
import {badgeContext} from "../api"

const BadgeViewContainer = ()=>{
    const {data, deleted} = useContext(badgeContext)
    const [state, setState] = useState({
        loading:true,
        error: null,
        modalIsOpen: false,
    })

    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async ()=>{
        setState({loading: true, error: null});

        try {
            console.log(this.props.match.params.badgeId)
            setState({loading: false, data: data})
        } catch (error) {
            setState({loading: false, error: error})
        };
    
    }
    const handleOpenModal = e =>{
        setState({modalIsOpen: true})
    }
    const handleCloseModal = e =>{
        setState({modalIsOpen: false})
    }
    const handleDeleteBadge= async (e) =>{
        setState({loading: true, error: null})

        try{
            const idArray = (this.props.location.pathname).split("")
            const id = idArray.splice(0, 8).join("")
            console.log(id)
            await deleted(id)
            // this.props.history.push('/badges')
        } catch(error){
        setState({loading: false, error: error})
        }
    }
    return(
        (state.loading) ? <PageLoading/> :
            
        (state.error) ? <PageError error={state.error}/> : 

            <BadgeView 
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
            onDeleteBadge= {handleDeleteBadge} 
            modalIsOpen={state.modalIsOpen}
            badge={state.data}/>
        
        )
}

export default BadgeViewContainer;