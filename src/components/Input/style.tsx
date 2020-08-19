import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 20px;
`;

export const Area = styled.input`
    max-width:30rem;
    height:1.2rem;
    border-radius:.2rem;
    border:1px solid #CCC;
    outline:0;
    padding:.5rem;
    &:focus{
        border-color:#AAA;
    }
`;

export const Label = styled.label`
    margin-bottom:.2rem;
`;