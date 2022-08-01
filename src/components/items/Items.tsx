import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import 'styles/Items.css'
import Item from "./Item";

const Items: React.FC = () => {

    const {items, limit, totalPages} = useTypedSelector(state => state.item)
    const [searchQuery, setSearchQuery] = useState('');
    const {fetchItems, setItemPage} = useActions();
    const pages: any[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
     }

    useEffect(() => {
        fetchItems(searchQuery, limit);
    },[searchQuery])

    return (
        <div className="section">
            <div className="todos">
                <div className="section-content">
                <input placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)}/>
                {items.map((item: any) => (
                    <Item item={item} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Items;