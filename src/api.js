import React, { useEffect } from "react";
// const BASE_URL = 'https://holmanyiyos.github.io/platzi-badges-app';
const badgeContext = React.createContext();

function ApiProvider(props){
  const [badgeList, setBadgeList] = React.useState("list");
  const [loading, setLoading] = React.useState(true)
  const [state, setState] = React.useState({error: null})
  const [data, setData] = React.useState([
    {
      id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
      firstName: "Freda",
      lastName: "Grady",
      email: "Leann_Berge@gmail.com",
      jobTitle: "Legacy Brand Director",
      twitter: "FredaGrady22221-7573",
      avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
    },
    {
      id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
      firstName: "Major",
      lastName: "Rodriguez",
      email: "Ilene66@hotmail.com",
      jobTitle: "Human Research Architect",
      twitter: "ajorRodriguez61545",
      avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
    }
  ]);
  
React.useEffect(()=>{
  try {
    const localStorageItem = localStorage.getItem("VERSION1")
    if (!localStorageItem) {
      localStorage.setItem("VERSION1", JSON.stringify(data))
    }else{
      const parsedData = JSON.parse(localStorage.getItem("VERSION1")) 
      setData(parsedData)
    }
  } catch (error) {
    
  }
},[])

const saveData = (newData)=>{
  localStorage.setItem("VERSION1", JSON.stringify(newData))
}

const deleted = (id)=>{
  const newData = data.filter(item =>item.id !== id)
  setData(newData)
  saveData(newData)
}

  const generateId=()=>{
        let id = Math.random().toString(36).slice(2)
        return id
      }

const addNewBadge = (badge) =>{
  const idBadge = generateId();
  badge.id = idBadge
  let newData = [...data];
  newData.push(badge);
  setData(newData)
  saveData(newData)
}

const read =(id)=>{
  const badge = data.filter(item =>item.id === id)
  return badge[0]
}

const update= (id, changes)=>{
  const index = data.findIndex((item)=>item.id === id)
 const newData = [...data];
 newData[index] = changes
 console.log(newData[index])
 saveData(newData)
}

const searchBadge = (id)=>{
  const filterBadge = data.filter(item =>item.id === id)
  return filterBadge
}


    return(
      <badgeContext.Provider value={
       { 
         badgeList,
         setBadgeList,
         state,
         setState,
         loading,
         setLoading,
         data,
         deleted,
         addNewBadge,
         searchBadge,
         read,
         update
      }
      }>
        {props.children}
      </badgeContext.Provider>
    );
}




export {badgeContext, ApiProvider};