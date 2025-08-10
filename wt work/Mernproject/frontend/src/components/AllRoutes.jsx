import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AdminPage from '../pages/AdminPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}   > </Route>
            <Route path='/admin' element={<AdminPage/>} > </Route>

            
        </Routes>
      
    </div>
  )
}

export default AllRoutes
