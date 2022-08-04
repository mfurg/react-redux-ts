import React, { SyntheticEvent } from 'react';
import api from '../helper/api';

import 'styles/Orders.css';
import { toast } from 'react-toastify';

const FormOrder = ({setVisible, cart, total}: any) => {

    const order = {
        "amount": total,
        "items": cart
    }

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        api.orders.add(order)
            .then(() => {
                setVisible(false)
                toast.success('Order added.', {
                    position: "top-center",
                    autoClose: 5000})})
            .catch(error => toast.error(error.message + '. Order failed.', {
                position: "top-center",
                autoClose: 5000}))
    }

    return (
        <div>
            <h2>Submit order total: {total}</h2>
            <form onSubmit={onSubmit}>
                {cart.map((item: any) => (
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