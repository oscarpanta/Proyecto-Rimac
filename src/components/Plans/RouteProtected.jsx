import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const RouteProtected = () => {
    const usuario = localStorage.getItem("usuario");

    if (!usuario) {
      return <Navigate to="/" />;
    }
  
    return <Outlet />;
}
