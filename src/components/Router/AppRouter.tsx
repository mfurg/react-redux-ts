import Cart from "components/orders/Cart";
import Orders from "components/orders/Orders";
import User from "components/users/User";
import Users from "components/users/Users";
import { Routes, Route } from "react-router-dom";
import Items from "../items/Items";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/items" element={<Items />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user" element={<User />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Items />} />
        </Routes> 
    )
}