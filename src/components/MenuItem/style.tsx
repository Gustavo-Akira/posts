import styled from 'styled-components';
interface LinkProps{
    quantity:number
}
export const Container= styled.li`
`;

export const Link = styled.a<LinkProps>`
    text-decoration:none;
    width:${p=>p.quantity?100/p.quantity:null}%;
    color: #000;
   
    &:hover{
        color:#AACCDD;
    }
`;