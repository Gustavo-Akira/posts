import styled from 'styled-components';
export const Container = styled.header`
    width:100%;
    height:10vh;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display:flex;
    align-items:center;
    @media(min-width: 700px){
        height:15vh;
    }
`;
export const Content = styled.section`
    width:95%;
    margin:auto;
    display:flex;
    aling-items:center;
`;
export const Logo = styled.img`
    width:25%;
    height:3rem;
`;
export const LogoContainer = styled.div`
    flex:1;
`;
export const MenuContainer = styled.nav`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;