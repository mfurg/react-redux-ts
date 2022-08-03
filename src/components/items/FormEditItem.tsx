import React, {SyntheticEvent, useState} from 'react';
import api from '../helper/api';

import 'styles/Form.css';
import { useActions } from 'hooks/useActions';

const FormEditItem = ({item, setVisible}: any) => {

    const [currentItem, setCurrentItem] = useState({});
    const {fetchItems} = useActions();

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        api.items.edit(currentItem, item.id)
            .then(() => {
                setVisible(false)
                alert('new item edited')
                fetchItems()})
            .catch((error) => console.log(error.message))
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentItem({...currentItem, [name]: value});
    }

    return (
        <div className="login-box">
            <h2>Edit {item.id} Item</h2>
            <form onSubmit={onSubmit}>
                <div className="user-box">
                    <label>Name</label>
                    <input onChange={onChange} type="text" name="name" defaultValue={item.name} required/> 
                </div>
                <div className="user-box">
                    <label>Description</label>
                    <input onChange={onChange} type="text" name="description" defaultValue={item.description} required/>
                </div>
                <div className="user-box">
                    <label>Price</label>
                    <input onChange={onChange} type="number" min="1" name="price" defaultValue={item.price} required/>
                </div>
                <div className='login_buttons'>
                    <button className="mybutton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormEditItem;