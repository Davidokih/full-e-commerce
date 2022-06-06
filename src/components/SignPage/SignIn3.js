import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createUser } from '../Global/GlobalState';

const SignIn3 = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        email: yup.string().email().required("This field most not be empty"),
        password: yup.string().required("This field most not be empty"),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = handleSubmit(async (value) => {
        console.log(value);
        const { password, email } = value;
        const mainURL = 'http://localhost:1111';
        const url = `${mainURL}/api/user/signIn`;

        await axios.post(url, { email, password }).then((res) => {
            dispatch(createUser(res.data.data));
        });

        navigate('/');
    });
    return (
        <Container>
            <Wrapper>
                <Card>
                    <LogoHold>
                        <img src='/logo192.png' />
                        <h1>Sign in</h1>
                    </LogoHold>
                    <Contain onSubmit={ onSubmit }>
                        <Form>
                            <Holder>
                                <p>E-Mail</p>
                                <input placeholder='Email' { ...register("email") } />
                            </Holder>
                            <Holder>
                                <p>Password</p>
                                <input placeholder='Password' type='password' { ...register("password") } />
                            </Holder>
                        </Form>
                        <button type='submit'>Sign In</button>
                        <Sign>Don't have an account? <Link to="/signUp"><span>SignUp</span></Link></Sign>
                    </Contain>
                </Card>
            </Wrapper>
        </Container>
    );
};

export default SignIn3;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: black; */
    height: 100vh;
    color: #fff;
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
    height: 600px;
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
    margin-top: 20px;

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
const Sign = styled.div`
    margin-top: 25px;
    text-align: center;
`;
