import React from 'react';
import { Container, FormContainer } from './style';
import Input from '../../components/Input';

const Register: React.FC = ()=>{
    return(
        <Container>
            <FormContainer>
                <Input label="Email" placeholder="Entre com o seu email"  name="email" type="email"/>
                <Input label="Senha" type="password" name="senha" placeholder="Entre com sua senha"/>
                <Input label="Pais" type="text" name="country"/>
                <Input label="Estado" type="text" name="state"/>
                <Input label="Cidade" type="text" name="city"/>
                <Input label="Imagem" name="image" type="file" />
                
            </FormContainer>
        </Container>
    );
};

export default Register;