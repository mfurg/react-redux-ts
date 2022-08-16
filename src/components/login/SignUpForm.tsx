import { useActions } from 'hooks/useActions';
import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../helper/api';

import 'styles/Form.css';
import { toast } from 'react-toastify';


const SignUpForm = ({setVisible}: any) => {
 
    const history = useNavigate();
    const [currentUser, setCurrentUser] = useState({role: "user", email: '', password: '', first_name: '', last_name: ''});
    const {setLogin} = useActions();

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        api.auth.register({"user": currentUser})
            .then(res => {
                localStorage.setItem("token", res.headers.authorization);
                setLogin()
                setVisible(false)
                toast.success('You`re registered.', {
                    position: "top-center",
                    autoClose: 5000});
                history('/items')})
            .catch( error => toast.error(error.message + '. Register failed.', {
                    position: "top-center",
                    autoClose: 5000}))
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentUser({...currentUser, [name]: value});
    }

    return (
        <div className="login-box">
            <h2>Sign In</h2>
            <form onSubmit={onSubmit}>
                <div className="user-box">
                    <label>Username</label>
                    <input onChange={onChange} type="email" name="email" required/> 
                </div>
                <div className="user-box">
                    <label>Password</label>
                    <input onChange={onChange} type="password" minLength={6} name="password" required/>
                </div>
                <div className="user-box">
                    <label>First Name</label>
                    <input onChange={onChange} type="text" name="first_name" required/>
                </div>
                <div className="user-box">
                    <label>Last Name</label>
                    <input onChange={onChange} type="text" name="last_name" required/>
                </div>
                <button className="mybutton">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;   