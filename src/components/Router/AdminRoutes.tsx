import { NavLink } from "react-router-dom"

export const AdminRoutes = () => {
    return (
        <>
            <li><NavLink to="/items">ITEMS</NavLink></li>
            <li><NavLink to="/users">USERS</NavLink></li>
        </>
    )
}