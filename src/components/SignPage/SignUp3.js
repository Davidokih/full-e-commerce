import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUp3 = () => {

    const navigate = useNavigate();
    const [ avatar, setAvatar ] = useState('');
    const [ image, setImage ] = useState("/Spider Man Wallpaper - EnJpg.jpg");

    const formSchema = yup.object().shape({
        userName: yup.string().required("This field most not be empty"),
        email: yup.string().email().required("This field most not be empty"),
        password: yup.string().required("This field most not be empty"),
        confirm: yup.string().oneOf([ yup.ref("password"), null ], "Password must match"),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const handleImage = (e) => {
        const file = e.target.files[ 0 ];
        const save = URL.createObjectURL(file);
        setImage(save);
        setAvatar(file);
    };

    const onSubmit = handleSubmit(async (value) => {
        console.log(value);
        const { userName, password, email } = value;
        const mainURL = 'http://localhost:1111';
        const url = `${mainURL}/api/user/register`;

        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('avatar', avatar);

        await axios.post(url, formData);

        navigate('/signIn');
    });

    return (
        <Container>
            <Wrapper>
                <Card>
                    {/* <LogoHold>
                        <img src='/logo192.png' onChange={ handleImage } />
                        <h1>Sign Up</h1>
                    </LogoHold> */}
                    <Contain onSubmit={ onSubmit }>
                        <Form>
                            <Upload htmlFor="pix">
                                <img src={ image } />
                                <Input type="file" id="pix" onChange={ handleImage } accept="image/*" />
                            </Upload>
                            <Holder>
                                <p>UserName</p>
                                <input placeholder='UserName' { ...register('userName') } />
                            </Holder>
                            <Holder>
                                <p>E-Mail</p>
                                <input placeholder='Email' { ...register('email') } />
                            </Holder>
                            <Holder>
                                <p>Password</p>
                                <input placeholder='Password' type='password' { ...register('password') } />
                            </Holder>
                            <Holder>
                                <p>confirm Password</p>
                                <input placeholder='confirm' type='password' { ...register('confirm') } />
                            </Holder>
                        </Form>
                        <button type='submit'>Sign In</button>
                        <Sign>Don't have an account? <Link to="/signIn"><span>SignIn</span></Link></Sign>
                    </Contain>
                </Card>
            </Wrapper>
        </Container>
    );
};

export default SignUp3;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: black; */
    height: 100%;
    color: #fff;
    margin-top: 20px;
`;
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
`;
const Card = styled.div`
    width: 400px;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1a2a;
    flex-direction: column;
    border-radius: 10px;

    /* @media (max-width: 768px){
        flex: 1;
    } */
`;
const LogoHold = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15px;

    img{
        width: 70px;
    }
`;
const Contain = styled.form`
    width: 95%;
    /* background-color: red; */
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button{
        margin-top: 40px;
        width: 100px;
        height: 40px;
        color: #fff;
        border: none;
        border-radius: 10px;
        background-color: #262538;
    }


    span{
        color: blue;
    }
`;
const Form = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: green; */
`;
const Holder = styled.div`
    width: 94%;
    /* flex: 1; */
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    
    height: 35px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;

    p{

    }

    input{
        border: none;
        background-color: transparent;
        outline: none;
        color: #fff;
        padding-bottom: 10px;
        flex: 1;
        border-bottom: 1px solid gray;
        
    }
    /* :hover{
            border: 1px solid blue;
    } */
`;
const Upload = styled.label`
    width: 100px;
    background-color: red;
    height: 100px;
    border-radius: 50%;

    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
`;
const Input = styled.input`
    display: none;
`;
const Sign = styled.div`
    margin-top: 25px;
    text-align: center;
`;
