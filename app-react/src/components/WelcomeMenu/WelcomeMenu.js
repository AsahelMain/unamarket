import React from 'react'
import { useAuth } from '../../hooks/useAuth'

function WelcomeMenu(){
    const { user } = useAuth();
    const { logout } = useAuth();

    return(
         <>
            <h1>Welcome, { user.username}!</h1>
            <button onClick={() => logout()}>Logout</button>
         </>
    );
}

export default WelcomeMenu
