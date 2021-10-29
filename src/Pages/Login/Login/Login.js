import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../../Hooks/useAuth';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="container p-5 m-5 mx-auto">
            <h2 className="text-success fw-bolder my-3">Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn fw-bolder btn-success">Google Sign In</button>
        </div>
    );
};

export default Login;