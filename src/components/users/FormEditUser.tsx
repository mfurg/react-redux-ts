import api from "components/helper/api";
import { useActions } from "hooks/useActions";
import { SyntheticEvent, useState } from "react";

const FormEditUser = ({user, setVisible}: any) => {

    const [currentUser, setCurrentUser] = useState({});
    const {fetchUsers, fetchCurrentUser} = useActions();

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        api.users.edit(currentUser, user.id)
            .then(() => {
                setVisible(false)
                alert('new user edited')
                fetchUsers();
                fetchCurrentUser()
            })
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentUser({...currentUser, [name]: value});
    }

    return (
        <div className="login-box">
            <h2>Edit User</h2>
            <form onSubmit={onSubmit}>
                <div className="user-box">
                    <label>First name</label>
                    <input onChange={onChange} defaultValue={user.first_name} type="text" name="first_name" required/> 
                </div>
                <div className="user-box">
                    <label>Last name</label>
                    <input onChange={onChange} defaultValue={user.last_name} type="text" name="last_name" required/>
                </div>
                <div className='login_buttons'>
                    <button className="mybutton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormEditUser;