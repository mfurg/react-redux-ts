import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { CartItem } from "types/cart";
import { Modal } from "../helper/Modal";
import FormOrder from "./FormOrder";

const Cart = () => {

    const {cart} = useTypedSelector(state => state.cart);
    const {isLogged} = useTypedSelector(state => state.user);
    const [visible, setVisible] = useState(false);
    const [total, setTotal] = useState(0);
    const {removeItem, addQuantity} = useActions();

    useEffect(() => {
        setTotal(cart.reduce((acc: number, current: CartItem) => acc + Number(current.price) * current.quantity, 0 ));
    }, [cart])

    if(cart.length === 0){
        return (<div className="section"><h2>There are no items yet!</h2></div>)
    }

    return (
        <div className="section">
            <Modal visible={visible} setVisible={setVisible}>
                    {isLogged 
                        ? <FormOrder setVisible={setVisible} cart={cart} total={total}/> 
                        : <h1>Login first</h1>}
            </Modal>
            <div className="todos">
                <div className="section-content">
                <h1>Total: {total} гривнів</h1>
                {cart.map((item: CartItem) => 
                    <div className="item" key={item.id}>
                        <div className='item_content'>
                            <strong>{item.id}. {item.name}</strong>
                            <div>{item.description}</div>
                            <div>price: {item.price}</div>
                        </div>
                        <div>
                            <input type="number" min="1" value={item.quantity} onChange={(e) => addQuantity(item.id, Number(e.target.value))}/> 
                            <button className='item_btns' onClick={() => removeItem(Number(item.id))}>Remove from cart</button>
                        </div>
                    </div>)}
                {cart.length !== 0 && <button onClick={() => setVisible(true)}>Buy</button>} 
                </div>
            </div>
        </div>
    )
}

export default Cart;