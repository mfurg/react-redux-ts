import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "components/helper/Modal";
import LoginForm from "components/login/LoginForm";
import { useTypedSelector } from "hooks/useTypedSelector";

import "styles/Navbar.css";
import { useActions } from "hooks/useActions";

export const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const {user, isLogged} = useTypedSelector(state => state.user);
    const {cart} = useTypedSelector(state => state.cart);
    const {setLogin, fetchCurrentUser} = useActions();
    
    useEffect(() => {
        isLogged && fetchCurrentUser();
    },[isLogged])

    return (
        <div>
            <div className="header">
                <Modal visible={visible} setVisible={setVisible}>
                    <LoginForm setVisible={setVisible}/>
                </Modal>
                <h1>REACT-REDUX-TS</h1>
                <nav>
                    <li><NavLink to="/items">ITEMS</NavLink></li>
                    <li><NavLink to="/users">USERS</NavLink></li>
                    <li><NavLink to="/cart">ORDERS {`(${cart.length})`}</NavLink></li>
                    {isLogged 
                        ? <><li><NavLink to="/user">Welcome back, {user.first_name}</NavLink></li>
                            <li><NavLink to="/user" onClick={() => {
                                localStorage.setItem("token", '')
                                setLogin()
                            }}>LOGOUT</NavLink></li></>
                        : <li><NavLink to="#" onClick={() => setVisible(true)}>LOGIN</NavLink></li>}
                </nav>
            </div>
        </div>  
    )
}