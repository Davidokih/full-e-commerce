import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Home = ({ props }) => {
    const { id } = useParams();
    // console.log("my" + id);
    const product = useSelector((state) => state.persistedReducer.product);
    const user = useSelector((state) => state.persistedReducer.user);

    // console.log("user" + user._id);
    const allProduct = async () => {
        const mainURL = 'http://localhost:1111';
        const url = `${mainURL}/api/item/${user._id}/${id}`;

        await axios.get(url).then((res) => {

            // dispatch(addProduct(res.data.data));
        });
    };
    console.log("This is the Product: ", product);


    useEffect(() => {
        allProduct();
    }, []);
    return (
        <Card>
            { product?.map((props) => (
                <Hold key={ props._id }>
                    <img src={ props.image } />
                    <Contents>
                        <Title>productName: { props.productName }</Title>
                        <Price>price { props.price }</Price>
                        <Category>category: { props.Category }</Category>
                        <Detail>description: { props.description }</Detail>
                        <button> ADD TO CART</button>
                    </Contents>
                </Hold>
            )) }
        </Card>
    );
};

export default Home;

const Category = styled.div`
    margin-bottom: 10px;
`;
const Price = styled.div`
    margin-bottom: 10px;
    font-weight: 800;
`;
const Detail = styled.div``;
const Title = styled.div`
    font-weight: 600;
    margin-bottom: 10px;
`;
const Contents = styled.div`

    button{
        margin-top: 20px;
        width: 100%;
        height: 40px;
        border: 0;
        outline: none;
        border-radius: 5px;
        background-color: orange;
        color: #fff;
        font-weight: 800;
        cursor: pointer;
    }
`;
const Hold = styled.div`
    width: 80%;
    /* background-color: green; */

    img{
        width: 100%;
        height: 250px;
    }
`;
const Card = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
