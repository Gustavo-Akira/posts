import React, { ButtonHTMLAttributes } from 'react';
import { Area } from './style';
interface ButtonProps extends ButtonHTMLAttributes<ButtonProps>{
    width:number,
    height:number,
    text:string,
    background: string
}
const Button:React.FC<ButtonProps> = ({text,width,background, height, ...rest})=>{
    return(
        <Area background = {background} width={width} height={height}>
            {text}
        </Area>
    );
}

export default Button;
