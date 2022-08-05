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
    const {totalPages, page, limit} = useTypedSelector(state => state.item)
    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);
    const {fetchItems, setItemPage, setLimit} = useActions();
    const pages = [];

    for(let i = 0; i < totalPages; i++){
        pages.push(i+1)
    }
    
    useEffect(() => {
        fetchItems(searchQuery, page, limit);
    },[searchQuery, page, limit])

    return (
        <div className="section">
            <Modal visible={visible} setVisible={setVisible}>
                <FormAddItem setVisible={setVisible}/>
            </Modal>
            <div className="todos">
                <div className="section-content">
                    <input placeholder='Search...' className="searchInput" onChange={(e) => {
                        setSearchQuery(e.target.value)
                        setItemPage(1)}}/>
                    <input placeholder='Set limit' type="number" className="searchInput" onChange={(e) => e.target.value && setLimit(Number(e.target.value))}/>
                    {user.role === 'admin' && <button onClick={() => setVisible(true)}>Add item</button>}
                    <Item/>
                </div>
            </div>
            <div className="pages">
                {pages.map((p) => (
                    <div className={page === p ? 'page current' : 'page'} onClick={() => setItemPage(p)} key={p}>{p}</div>
                ))}
            </div>
        </div>
    )
}

export default Items;