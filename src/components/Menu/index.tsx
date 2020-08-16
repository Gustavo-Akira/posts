import React, { useEffect, useState } from 'react';
import { Container } from './style';
import MenuItem,{MenuItemContent} from '../MenuItem';
import json from '../../configs/menu.json';
interface Item{
    item:MenuItemContent
}
const Menu: React.FC = ()=>{
    const [array,setArray] = useState<Array<Item>>([]);
    const auth:boolean = false;
    useEffect(()=>{
        const content: Array<Item> = JSON.parse(JSON.stringify(json));
        const list: Array<Item> = content.filter(item=> item.item.auth === auth);
        setArray(list);
    },[])
    
    return(
        <Container>
            {array.map(({item})=>{
                return <MenuItem item={item} qt={array.length}/>
            })}
        </Container>
    )
}

export default Menu;