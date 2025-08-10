import React, { useEffect, useState } from 'react'
import OrderTable from '../components/OrderTable';

const AdminPage = () => {

    const[userData,setUserData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/user")
        .then((res)=>res.json())
        .then((data)=>{
            setUserData(data.data);
            console.log(data)})
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
      <OrderTable data={userData} />
    </div>
  )
}

export default AdminPage
