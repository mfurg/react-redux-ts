import api from "components/helper/api";
import { Modal } from "components/helper/Modal";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useState } from "react";
import FormEditItem from "./FormEditItem";

const Item = () => {

    const {items} = useTypedSelector(state => state.item)
    const {cart} = useTypedSelector(state => state.cart);
    const {user} = useTypedSelector(state => state.user);
    const [visible, setVisible] = useState(false);
    const {addItem, removeItem, fetchItems} = useActions();
    const [editItem, setEditItem] = useState(0);

    const deleteItem = (id: number) => {
        api.items.delete(id)
            .then(() => {
                fetchItems();
                alert('item ' + id + ' deleted')})
            .catch((error) => console.log(error.message))
    }

    return (
        <>
        <Modal visible={visible} setVisible={setVisible}>
            <FormEditItem setVisible={setVisible} item={editItem}/>
        </Modal>
        {items.map((item: any) => (
        <div className="item" key={item.id}>
            <div className='item_content'>
                <strong>{item.id}. {item.name}</strong>
                <div>{item.description}</div>
                <div>price: {item.price}</div>
            </div>

            {user.role === 'admin' 
            ? <div>
                <button className='item_btns' onClick={() => {
                        setEditItem(item)
                        setVisible(true)
                    }}>Edit</button>
                <button onClick={() => deleteItem(Number(item.id))}  className='item_btns'>Delete</button> 
            </div>
            : cart.some( p => p.id === item.id) 
                ? <div>
                    <button className='item_btns' onClick={() => removeItem(Number(item.id))}>Remove from cart</button>
                  </div>
                : <div>
                    <button className='item_btns' onClick={() => addItem(item)}>Add to cart</button>
                  </div>}
        </div>
        ))}
        </>
    )
}

export default Item;