import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children: any
}

function ProtectedRoute({children}: ProtectedRouteProps){

    const auth = useSelector((state: RootState) => state.auth);

    if(auth?.isAuthenticated){
        return children;  
    }
    else{
       return <Navigate to="/login" />
    }
};

export default ProtectedRoute;