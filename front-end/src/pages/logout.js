import React, { useEffect } from 'react'
import './css/login.css'
import axios from "axios/lib/axios";
import { useHistory } from "react-router-dom";

const Logout = () => {
    let history = useHistory();

    useEffect(() => {
    
        const getItems= async()=>{
        const resp= await axios.get("http://localhost:5000/logout");
        console.log(resp.data)

            history.push('/login')

        }
        getItems()
    },)
return(<div></div>)
}
export default Logout;