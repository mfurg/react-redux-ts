import React, { useEffect } from "react";
import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import FormAddUser from './FormAddUser';

import 'styles/Items.css'
import { Modal } from "components/helper/Modal";
import UserList from "./UserList";
import { useActions } from "hooks/useActions";

const Users: React.FC = () => {

    const {user} = useTypedSelector(state => state.user)
    const [visible, setVisible] = useState(false);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    },[])

    return (
        <div className="section">
            <Modal visible={visible} setVisible={setVisible}>
                <FormAddUser setVisible={setVisible}/>
            </Modal>
            <div className="todos">
                <div className="section-content">
                    {user.role === 'admin' && <button onClick={() => setVisible(true)}>Add user</button>}
                    <UserList/>
                </div>
            </div>
        </div>
    )
}

export default Users;