import React from 'react'
import {Outlet, Navigate} from  'react-router-dom';

function ProtectedRoute() {
    const token =localStorage.getItem('token');
  return token? <Outlet/>: <Navigate to='/community'></Navigate>
}

export default ProtectedRoute