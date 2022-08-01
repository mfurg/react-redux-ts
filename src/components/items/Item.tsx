import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

const Item = ({item}:any) => {

    const {cart} = useTypedSelector(state => state.cart);
    const {addItem, removeItem} = useActions();

    return (
        <div className="item" key={item.id}>
            <div className='item_content'>
            <strong>{item.id}. {item.name}</strong>
            <div>{item.description}</div>
            <div>price: {item.price}</div>
            </div>
            {cart.some( p => p.id === item.id) 
                ? <div>
                    <button className='item_btns' onClick={() => removeItem(Number(item.id))}>Remove from cart</button>
                    </div>
                : <div>
                    <button className='item_btns' onClick={() => addItem(item)}>Buy</button>
                    </div>}
        </div>
    )
}

export default Item;