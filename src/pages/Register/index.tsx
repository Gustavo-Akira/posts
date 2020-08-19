import React, { useState, FormEvent, ChangeEventHandler, ChangeEvent } from 'react';
import { Container, FormContainer } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import values from '../../configs/registerform.json';
import { buttonPrimaryColor } from '../../constants/colors';
import api from '../../api/api';
import jsonToFormData from '../../helpers/jsonToFormData';

interface InputsProps{
    input:{
        name:string,
        label:string,
        type?:string,
        placeholder:string
    }
}
const Register: React.FC = ()=>{
    const array:Array<InputsProps> = JSON.parse(JSON.stringify(values));
    const [form,setForm] = useState(JSON.parse(JSON.stringify({})));
    const [image, setImage] = useState<File|null>(null);
    const handleSubmission = (e:FormEvent)=>{
        e.preventDefault();
        
        api.post('users',jsonToFormData(form,image),{headers:{'Content-Type':'multipart/form-data'}})
        .then(response=>{
            console.log(response);
        })
        .catch(response=>{
            console.log(response);
        });
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const formCopy = {...form};
        if(e.target.name === "image"){
            setImage(e.target.files?e.target.files[0]: null);
        }else{
            formCopy[e.target.name] = e.target.value;
        }
        setForm(formCopy);
    }
    const renderInput = ()=>{
        return array.map(item=>{
            
            return <Input 
                type={item.input.type ? item.input.type : 'text'} 
                name={item.input.name} 
                label={item.input.label}
                placeholder={item.input.placeholder}
                onChange={(e)=>handleChange(e)}
            />
        })
    }
    return(
        <Container>
            <FormContainer onSubmit={handleSubmission}>
                {renderInput()}
                <Button background={buttonPrimaryColor} height={3} width={10} text="Registrar"/>
            </FormContainer>
        </Container>
    );
};

export default Register;