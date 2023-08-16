import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'


export default function AuthPage({setUser}) {

    const [isNewUser, setIsNewUser] = useState(true);

    function handleClick() {
        setIsNewUser(!isNewUser);
}

    return (
    <>
        <h1>Welcome to Quick Notes!</h1>
        <br></br>
        <h2>Let's Get Started</h2>
        { isNewUser ?
        <>
            <SignUpForm setUser={setUser}/>
        </>  
        :
        <>
            <LoginForm setUser={setUser}/>
        </>
        }
        <button onClick={handleClick}>{isNewUser ? 'Already have an account? Click Here!' : 'Create A New Account'}</button>
    </>
    )
}