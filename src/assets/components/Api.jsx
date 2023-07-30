import React, { useState } from 'react'
import axios from 'axios'

const Api = () => {
    const [users, setusers] =useState([])
    let endpoint = "https://jsonplaceholder.typicode.com/users"
    const getData = ()=> {
        axios.get(endpoint)
    .then((response)=> {
        setusers(response.data)
        console.log(users);
    })
    .catch((err)=> {
        console.log(err);
    })
    }
    
  return (
    <>
    <button onClick={getData}>Get Datas</button>
    </>
  )
}

export default Api