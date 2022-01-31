import React, { useContext, useEffect, useState } from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeView from './BadgeView'
import {badgeContext} from "../api"

const BadgeViewContainer = ()=>{
    const {deleted, searchBadge} = useContext(badgeContext)
    const [modal, setModal] = useState(false)
    const [state, setState] = useState({
        loading:true,
        error: null,
        data: "",
        id: ""
    })
    const findId = ()=>{
        const idArray = (window.location.pathname).split("")
        const id = idArray.splice(9).join("");
        return id
    }

    
    useEffect(()=>{
        fetchData()
    },[state])
        
    const fetchData =()=>{
        setState({loading: true, error: null});
        const idBadge = findId();
        try {
            const badge = searchBadge(idBadge)[0];
            setState({loading: false, data: badge, id: idBadge})
        } catch (error) {
            setState({loading: false, error: error})
        };
    }
    const handleOpenModal = () =>{
        setModal(true)
    }
    const handleCloseModal = () =>{
        setModal(false)
    }
    const handleDeleteBadge= () =>{
        setState({loading: true, error: null})
        const id = findId()
        try{
            deleted(id)
            window.location.hash = "#/badges"
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
            modalIsOpen={modal}
            badge={state.data}/>
        
    )
}

export default BadgeViewContainer;