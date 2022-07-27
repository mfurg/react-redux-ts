import React from "react";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {

    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();

    useEffect(() => {
       fetchUsers() 
    },[])

    if(loading) return <h1>Loading..</h1>
    if(error) return <h1>{JSON.stringify(error)}</h1>


    return (
        <div>
            {users.map((user: any) => 
                <div key={user.id}>{user.id}. {user.name}</div>)}
        </div>
    )
}

export default UserList;