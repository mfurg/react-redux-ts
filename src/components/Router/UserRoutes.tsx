import { useTypedSelector } from "hooks/useTypedSelector";
import { NavLink } from "react-router-dom"

export const UserRoutes = () => {

    const {cart} = useTypedSelector(state => state.cart);
    const {isLogged} = useTypedSelector(state => state.user);

    return (
        <>
            <li><NavLink to="/items">ITEMS</NavLink></li>
            <li><NavLink to="/cart">CART {`(${cart.length})`}</NavLink></li>
            {isLogged && <li><NavLink to="/orders">ORDERS</NavLink></li>}
        </>
    )
}