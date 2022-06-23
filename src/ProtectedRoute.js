/*import { Route, Navigate} from 'react-router';
import React, { Component } from 'react';


export const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) => JSON.parse(localStorage.getItem('user'))
        
            ? <Component {...props} />
            : <Navigate to={{pathname: '/Login', state: {from: props.location}}} />}
    />
)
*/
