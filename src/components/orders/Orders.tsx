import api from "components/helper/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import 'styles/Orders.css'

const Orders: React.FC = () => {

    const [orders,setOrders] = useState([]);

    useEffect(() => {
        api.orders.all()
            .then(response => {
                setOrders(response.data)
                toast.success('Orders loaded successfully.', {
                    position: "top-center",
                    autoClose: 5000});
            }).catch(error => toast.error(error.message + '. Loadung failed.', {
                position: "top-center",
                autoClose: 5000}))
    },[])

    return(
        <div className="section">
            <div className="todos">
            {orders.map((item: any) => (
                <div className="order" key={item.id}>
                    <div className='order_content'>
                        <strong>Order {item.id} created at {item.created_at}</strong>
                        <div>
                        {item.orders_descriptions.map((d: any) => (
                                <div className='order_content' key={d.created_at}>
                                    <hr />
                                    <div>Item name: {d.item?.name || '-'}</div>
                                    <div>Item description: {d.item?.description || '-'}</div>
                                    <div>Price: {d.item?.price || '-'}</div>
                                    <div>Q-ty: {d.quantity}</div>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div>Amount: {item.amount}</div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default Orders;