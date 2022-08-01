import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

const Cart = () => {

    const {cart} = useTypedSelector(state => state.cart);
    const {removeItem} = useActions();

    return (
        <div className="section">
            <div className="todos">
                <div className="section-content">

                {cart.map((item) => <div className="item" key={item.id}>
                    <div className='item_content'>
                        <strong>{item.id}. {item.name}</strong>
                        <div>{item.description}</div>
                        <div>price: {item.price}</div>
                    </div> 
                    <div>
                        <button className='item_btns' onClick={() => removeItem(Number(item.id))}>Remove from cart</button>
                    </div>
                </div>)}
                </div>
            </div>
        </div>
    )
}

export default Cart;