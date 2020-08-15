import React from 'react';
import { Container, Link } from './style';
export interface MenuItemContent{
    title:string,
    url:string,
    img?:boolean    
}
interface MenuItemProps{
    item:MenuItemContent,
    qt:number
}
const MenuItem:React.FC<MenuItemProps> =({item,qt})=>{
    return(
        <Link href={item.url} quantity={qt}>
            <Container>
                {item.title}
            </Container>
        </Link>
    );
}

export default MenuItem;