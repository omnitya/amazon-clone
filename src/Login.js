
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {

    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase login goes here...
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            history('/')
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        //firebase register goes here...
        
            createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                //user created success!
                console.log('user created success!')
                if(auth){
                    history('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="Login page"
                />
            </Link>
            
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={ e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={ e => setPassword(e.target.value) } />

                    <button className="login_signInButton" onClick={signIn} >Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button className="login_registerButton" onClick={register} >
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
