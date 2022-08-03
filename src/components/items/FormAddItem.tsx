import api from 'components/helper/api';
import { useActions } from 'hooks/useActions';
import React, {SyntheticEvent, useState} from 'react';

import 'styles/Form.css';


const FormAddItem = ( {setVisible, setSearchQuery}: any ) => {

    const [currentItem, setCurrentItem] = useState({});
    const {fetchItems} = useActions();

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        api.items.add(currentItem)
            .then(() => {
                setVisible(false)
                alert('item added')
                fetchItems();
                debugger
            })
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentItem({...currentItem, [name]: value});
    }

    return (
        <div className="login-box">
            <h2>Add item</h2>
            <form onSubmit={onSubmit}>
                <div className="user-box">
                    <label>Name</label>
                    <input onChange={onChange} type="text" name="name" required/> 
                </div>
                <div className="user-box">
                    <label>Description</label>
                    <input onChange={onChange} type="text" name="description" required/>
                </div>
                <div className="user-box">
                    <label>Price</label>
                    <input onChange={onChange} type="number" min="1" name="price" required/>
                </div>
                <div className='login_buttons'>
                    <button className="mybutton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddItem;   