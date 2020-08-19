import React, { InputHTMLAttributes } from 'react';
import { Container, Label, Area } from './style';
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string,
    name:string
}
const Input: React.FC<InputProps> = ({onChange,label, name, ...rest})=>{
    return(
        <Container>
            <Label>{label}</Label>
            <Area onChange={onChange} type={rest.type ? rest.type:"text"} name={name} placeholder={rest.placeholder} />
        </Container>
    );
}

export default Input;