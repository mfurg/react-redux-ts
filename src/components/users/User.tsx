import { Modal } from "components/helper/Modal";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useState } from "react";
import FormEditUser from "./FormEditUser";

import 'styles/User.css'


const User: React.FC = () => {
    const [modal, setModal] = useState(false);
    const {user} = useTypedSelector(state => state.user)

    return (
        <div className="section">
            <h1>User info</h1>
            <Modal visible={modal} setVisible={setModal}> 
                <FormEditUser setVisible={setModal} user={user}/>
            </Modal>
            <div className='user'>
                <div>
                    <strong>Login: { user.email }</strong>
                    <div>First Name: {user.first_name}</div>
                    <div>Last Name: {user.last_name}</div>
                    <div>User role: {user.role}</div>
            </div>
                <div><button className='user_btns' onClick={() => setModal(true)}>Edit</button></div>
            </div>
        </div>)
}

export default User;