import React from 'react';
import { Container } from './style';
import MenuItem,{MenuItemContent} from '../MenuItem';
import json from '../../configs/menu.json';
interface Item{
    item:MenuItemContent
}
const Menu: React.FC = ()=>{
    const array:Array<Item> = JSON.parse(JSON.stringify(json));
    return(
        <Container>
            {array.map(({item})=>{
                return <MenuItem item={item} qt={array.length}/>
            })}
        </Container>
    )
}

export default Menu;