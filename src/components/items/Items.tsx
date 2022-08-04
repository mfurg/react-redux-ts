import React from "react";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import 'styles/Items.css'
import Item from "./Item";
import { Modal } from "components/helper/Modal";
import FormAddItem from "./FormAddItem";


const Items: React.FC = () => {

    const {user} = useTypedSelector(state => state.user)
    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);
    const {fetchItems} = useActions();
    
    useEffect(() => {
        fetchItems(searchQuery);
    },[searchQuery])

    return (
        <div className="section">
            <Modal visible={visible} setVisible={setVisible}>
                <FormAddItem setVisible={setVisible}/>
            </Modal>
            <div className="todos">
                <div className="section-content">
                    <input placeholder='Search...' className="searchInput" onChange={(e) => setSearchQuery(e.target.value)}/>
                    {user.role === 'admin' && <button onClick={() => setVisible(true)}>Add item</button>}
                    <Item/>
                </div>
            </div>
        </div>
    )
}

export default Items;