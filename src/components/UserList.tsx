import React, { useState, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";


const UserList: React.FC = () => {

    const {users, page, limit, user, totalPages} = useTypedSelector(state => state.user)
    const {fetchUsers, fetchCurrentUser, setUsersPage} = useActions();
    const pages: any[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
     }

    useEffect(() => {
       fetchUsers(page, limit)
    },[page])

    return (
        <div className="section">
            <div className="todos">
                {users.map((user: any) => <div onClick={() => fetchCurrentUser()} key={user.id}>{user.id}. {user.name}</div>)}
            </div>
            <div className="pages">
                {pages.map((p) => 
                <div key={p} onClick={() => setUsersPage(p)} className={p === page ? 'item current' : 'item'}>
                    {p}
                </div>)}
            </div>
            <div>{JSON.stringify(user)}</div>
        </div>
    )
}

export default UserList;