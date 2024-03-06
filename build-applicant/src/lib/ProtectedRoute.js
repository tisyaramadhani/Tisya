import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export const ProtectedRoute = (props) => {
  const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('accessToken');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            history.push('/sign-in');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}