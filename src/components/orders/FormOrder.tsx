import React, { SyntheticEvent } from 'react';
import api from '../helper/api';

import 'styles/Orders.css';
import { toast } from 'react-toastify';
import { useActions } from 'hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { CartItem, OrderInterface } from 'types/cart';

interface FormOrderInterface {
    setVisible: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    cart: CartItem[];
    total: number;
}

const FormOrder = ({setVisible, cart, total}: FormOrderInterface) => {
    const {clearCart} = useActions();
    const navigate = useNavigate();
    const order: OrderInterface = {
        "amount": total,
        "items": cart
    }

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        api.orders.add(order)
            .then(() => {
                setVisible(false)
                clearCart()
                toast.success('Order added.', {
                    position: "top-center",
                    autoClose: 5000})
                navigate('/items')})        
            .catch(error => toast.error(error.message + '. Order failed.', {
                position: "top-center",
                autoClose: 5000}))
    }

    return (
        <div>
            <h2>Submit order total: {total}</h2>
            <form onSubmit={onSubmit}>
                {cart.map((item: CartItem) => (
                <div className="order" key={item.name}>
                    <div className='order_content'>
                        <strong>{ item.name }</strong>
                    </div>
                    <div className='order_content'>
                        <div>Description: {item.description}</div>
                    </div>
                    <div className='order_content'>
                        <div>Price: {item.price}</div>
                    </div>
                    <div className='order_content'>
                        <div>Q-ty: {item.quantity}</div>
                    </div>
                </div>
                ))}
                <div className='login_buttons'>
                    <button className="mybutton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormOrder;   