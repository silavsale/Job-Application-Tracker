import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import User from './User'

const api = axios.create({
    baseURL: `http://localhost:5000/api/users/`
})

const Users = () => {

    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost:5000/api/users/',
          );
     
          setUsers(result.data);
        };
     
        fetchData();
      }, []);

      console.log('users', users);

    return (
    <>
        <div className="text-primary text-center">
           <h1 >Users</h1>
        </div>
        <User/>
    </>
    )
}

export default Users
