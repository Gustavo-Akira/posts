import React from 'react';
import styled from 'styled-components';
interface AreaProps{
    width:number,
    height:number,
    background:string
}
export const Area = styled.button<AreaProps>`
    width:${p=> p.width ? p.width : 10}rem;
    height:${p=>p.height? p.height: 12}rem;
    border-radius: 0.8rem;
    border: 0;
    background-color: ${p=>p.background ? p.background: '#DDD'};
    &:hover{
        border: 1px solid black;
        cursor:pointer;
    }
`;