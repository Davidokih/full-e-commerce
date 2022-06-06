import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MdUpload } from 'react-icons/md';
const Upload = () => {
    const user = useSelector((state) => state.persistedReducer.user);
    const navigate = useNavigate();
    const [ image, setImage ] = useState("");
    const [ avatar, setAvatar ] = useState("/Spider Man Wallpaper - EnJpg.jpg");
    // const [ toggle, setToggle ] = useState(true);
    // const [ toggleAdmin, setToggleAdmin ] = useState(false);

    const formSchema = yup.object().shape({
        productName: yup.string().required("This field cannot be empty"),
        price: yup.number().required("This field cannot be empty"),
        description: yup.string().required("This field cannot be empty"),
        category: yup.string().required("This field cannot be empty"),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const handleImage = (e) => {
        const file = e.target.files[ 0 ];
        const save = URL.createObjectURL(file);
        setImage(file);
        setAvatar(save);
    };

    const onSubmit = handleSubmit(async (value) => {
        console.log(value);
        const { productName, price, description, category } = value;

        const localURL = "http://localhost:1111";

        const url = `${localURL}/api/item/${user._id}/post`;

        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("image", image);

        // const config = {
        //     "content-type": "multipart/form-data",
        //     onUploadProgress: (ProgressEvent) => {
        //         const { loaded, total } = ProgressEvent;
        //         const percent = Math.floor((loaded * 100) / total);
        //         console.log(percent);
        //     },
        // };

        await axios.post(url, formData).then((res) => {
            console.log("Error Data: ", res);
        });

        navigate("/");
    });

    return (
        <Container>
            <Wrapper>
                <Pad onSubmit={ onSubmit }>
                    <ContentHold>
                        <Hold>
                            <input placeholder='product Name' { ...register("productName") } />
                        </Hold>
                        <Hold>
                            <input placeholder='Price' type='number'{ ...register("price") } />
                        </Hold>
                        <Hold>
                            <input placeholder='Category' { ...register("category") } />
                        </Hold>
                        <Hold>
                            <textarea placeholder='description' { ...register("description") } />
                        </Hold>
                    </ContentHold>
                    <ImageHold htmlFor="pix">
                        <input type='file' id="pix" onChange={ handleImage } accept="image/*" />
                        <img src={ avatar } />
                        <Ups>
                            <MdUpload size="35px" />
                            upload your Product image
                        </Ups>
                    </ImageHold>
                    <button type='submit'>Upload</button>
                </Pad>
            </Wrapper>
        </Container>
    );
};

export default Upload;

const Ups = styled.label`
   position: absolute;
`;
const ImageHold = styled.label`
    width: 250px;
    height: 250px;
    border: 2px dashed lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
        margin-bottom: 20px;
    flex-direction: column;

    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
    }

    input{
        display: none;
    }
`;
const Hold = styled.div`
    border-bottom: 1px solid grey;
    margin-bottom: 15px;

    input{
        border: 0;
        outline: none;
        width: 100%;
        margin-bottom: 7px;
        /* text-align: center; */
    }
    textarea{
        outline: none;
        width: 100%;
        margin-bottom: 7px;
        height: 160px;
        /* text-align: center; */
    }
`;
const ContentHold = styled.div`
    margin-bottom: 20px;
`;
const Pad = styled.form`
    width: 95%;


    button{
        border: 0;
        outline: none;

        color: #fff;
        background-color: blue;
        width: 100%;
        border-radius: 5px;
        height: 30px;
        font-weight: 800;
        font-size: 20px;
        cursor: pointer;
        margin-bottom: 20px;

    }
`;
const Wrapper = styled.div`
    width: 70%;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;