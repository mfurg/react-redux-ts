import { useActions } from 'hooks/useActions';
import React, {SyntheticEvent, useState} from 'react';
import api from '../helper/api';

import 'styles/Form.css';
import { toast } from 'react-toastify';


const FormAddUser = ( {setVisible}: any ) => {

    const [currentUser, setCurrentUser] = useState({role: 'user'});
    const {fetchUsers} = useActions()

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        api.users.add(currentUser)
            .then(() => {
                setVisible(false)
                toast.success('New user added.', {
                    position: "top-center",
                    autoClose: 5000});
                fetchUsers()})
            .catch(error => toast.error(error.message + '. Add failed.', {
                    position: "top-center",
                    autoClose: 5000}))
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentUser({...currentUser, [name]: value});
    }

    return (
        <div className="login-box">
            <h2>Add user</h2>
            <form onSubmit={onSubmit}>
                <div className="user-box">
                    <label>Login</label>
                    <input onChange={onChange} type="text" name="email" required/> 
                </div>
                <div className="user-box">
                    <label>Password</label>
                    <input onChange={onChange} type="text" name="password" required/> 
                </div>
                <div className="user-box">
                    <label>First Name</label>
                    <input onChange={onChange} type="text" name="first_name" required/> 
                </div>
                <div className="user-box">
                    <label>Last Name</label>
                    <input onChange={onChange} type="text" name="last_name" required/>
                </div>
                <div className='login_buttons'>
                    <button className="mybutton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddUser;   