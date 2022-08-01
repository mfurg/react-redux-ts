import Cart from "components/Cart";
import { Routes, Route } from "react-router-dom";
import Items from "../items/Items";
import UserList from "../UserList";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/items" element={<Items />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Items />} />
        </Routes> 
    )
}