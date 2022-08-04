import React, { SyntheticEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useActions } from 'hooks/useActions';
import api from '../helper/api';

import 'styles/Form.css';



const LoginForm = ({setVisible, setAction}:any) => {

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
                    toast.success('Login success.', {
                        position: "top-center",
                        autoClose: 5000});
                })
                .catch( error => {
                    toast.error(error.message + '. Login failed.', {
                        position: "top-center",
                        autoClose: 5000})
                })
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    <button onClick={() => setAction('signup')} className="mybutton">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;   