import { useState } from "react";
import api from "../helper/api";
import { Modal } from "components/helper/Modal";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import FormEditUser from "./FormEditUser";
import { toast } from "react-toastify";


const UserList: React.FC = () => {

    const {users} = useTypedSelector(state => state.user)
    const [visible, setVisible] = useState(false);
    const [editUser, setEditUser] = useState({})
    const {fetchUsers} = useActions();

    const deleteUser = (id: number) => {
        api.users.delete(id)
        .then(() => {
            toast.success('User ' + id + ' deleted', {
                position: "top-center",
                autoClose: 5000});
            fetchUsers()
        })
        .catch((error) => toast.error(error.message + '. Delete failed.', {
            position: "top-center",
            autoClose: 5000}))
    }

    if(!users){
        return <h2>Users not found!</h2>
    }
    
    return (
        <>
        <Modal visible={visible} setVisible={setVisible}>
            <FormEditUser user={editUser} setVisible={setVisible} />
        </Modal>
        {users.map((user: any) => (
        <div className="item" key={user.id}>
            <div className='item_content'>
                <strong>{user.id}. {user.email}</strong>
                <div>{user.first_name}</div>
                <div>{user.last_name}</div>
                <div>{user.role}</div>
            </div>
            <div>
                <button className='item_btns' onClick={() => {
                        setEditUser(user)
                        setVisible(true)
                    }}>Edit</button>
                <button onClick={() => deleteUser(Number(user.id))}  className='item_btns'>Delete</button> 
            </div>
        </div>
        ))}
        </>
    )
}

export default UserList;