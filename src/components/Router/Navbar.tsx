import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "components/helper/Modal";
import LoginForm from "components/login/LoginForm";
import { useTypedSelector } from "hooks/useTypedSelector";

import "styles/Navbar.css";
import { useActions } from "hooks/useActions";
import { UserRoutes } from "./UserRoutes";
import { AdminRoutes } from "./AdminRoutes";
import SignUpForm from "components/login/SignUpForm";

export const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const {user, isLogged} = useTypedSelector(state => state.user);
    const {setLogin, fetchCurrentUser, clearUser} = useActions();
    const [action, setAction] = useState('');
    
    useEffect(() => {
        isLogged && fetchCurrentUser();
    },[isLogged])

    return (
        <div>
            <div className="header">
                <Modal visible={visible} setVisible={setVisible}>
                    {action === 'signup' 
                        ? <SignUpForm setVisible={setVisible}/> 
                        : <LoginForm setAction={setAction} setVisible={setVisible}/>}
                </Modal>
                <h1>REACT-REDUX-TS</h1>
                <nav>
                {user.role === 'admin' ? <AdminRoutes/> : <UserRoutes/>}  
                {isLogged 
                ? <><li><NavLink to="/user">Welcome back, {user.first_name}</NavLink></li>
                    <li><NavLink to="/items" onClick={() => {
                        localStorage.setItem("token", '')
                        setLogin()
                        clearUser()
                    }}>LOGOUT</NavLink></li></>
                : <li><NavLink to="#" onClick={() => {
                        setAction('login')
                        setVisible(true)
                    }}>LOGIN</NavLink></li>}
                </nav>
            </div>
        </div>  
    )
}