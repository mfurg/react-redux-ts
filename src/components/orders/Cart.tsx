import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Modal } from "../helper/Modal";
import FormOrder from "./FormOrder";

const Cart = () => {

    const {cart} = useTypedSelector(state => state.cart);
    const {addQuantity} = useActions();
    const {isLogged} = useTypedSelector(state => state.user);
    const [visible, setVisible] = useState(false);
    const [total, setTotal] = useState([]);
    const {removeItem} = useActions();

    useEffect(() => {
        setTotal(cart.reduce((acc, current) => acc + Number(current.price) * current.quantity, 0 ));
    }, [cart])

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
                {cart.map((item) => 
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