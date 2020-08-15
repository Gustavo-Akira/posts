import React from 'react';
import {Container, Content, Logo, LogoContainer, MenuContainer} from './style';
import Menu from '../Menu';
const Header: React.FC = ()=>{
    return(
        <Container>
            <Content>
                <LogoContainer>
                    <a href="/">
                    <Logo src="aaa"/>
                    </a>
                </LogoContainer>
                <MenuContainer>
                    <Menu/>
                </MenuContainer>
            </Content>
        </Container>
    );
}

export default Header;