import React, { SyntheticEvent, useState } from 'react';
import { Link } from "react-router-dom";
import { useActions } from 'hooks/useActions';
import api from '../helper/api';

import 'styles/Form.css';



const LoginForm = ({setVisible}:any) => {

    const {setLogin, fetchCurrentUser} = useActions();
    const [currentUser, setCurrentUser] = useState({});

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        api.auth.login({"user": currentUser})
                .then(res => {
                    localStorage.setItem("token", res.headers.authorization);
                    setLogin();
                    fetchCurrentUser();
                    setVisible(false)
                })
                .catch( error => {
                    alert(error.message)
                })
    }

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentUser({...currentUser, [name]: value});
    }
    
    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div className="user-box">
                    <label>Username</label>
                    <input onChange={onChange} type="text" name="email" required/> 
                </div>
                <div className="user-box">
                    <label>Password</label>
                    <input onChange={onChange} type="password" name="password" required/>
                </div>
                <div className='login_buttons'>
                    <button className="mybutton">Submit</button>
                    <Link to="/signup"><button className="mybutton">Sign Up</button></Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;   