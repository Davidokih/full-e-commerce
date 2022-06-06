import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addProduct, addToCart } from '../Global/GlobalState';
import UserAvatar from './UserAvatar';

const Home = () => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.persistedReducer.product);
    const user = useSelector((state) => state.persistedReducer.user);

    const allProduct = async () => {
        const mainURL = 'http://localhost:1111';
        const url = `${mainURL}/api/item/all`;

        await axios.get(url).then((res) => {
            console.log(res.data.data);
            dispatch(addProduct(res.data.data));
        });
    };
    console.log("This is the Product: ", product);


    useEffect(() => {
        allProduct();
    }, []);
    return (
        <Container>
            <Wrapper>
                { product?.map((props) => (
                    <Card key={ props._id }>
                        <UserPath>
                            <UserAvatar props={ props } img name />
                        </UserPath>
                        <Hold>
                            <Link to={ `/detail/${props._id}` }>
                                <img src={ props.image } />
                            </Link>
                            <Contents>
                                <Title>productName: { props.productName }</Title>
                                <Price>price: { props.price }</Price>
                                <Category>category{ props.Cctegory }</Category>
                                {/* <Detail>description: { props.description }</Detail> */ }
                                <button onClick={ () => {
                                    dispatch(addToCart(props));
                                } }> ADD TO CART</button>
                            </Contents>
                        </Hold>
                    </Card>
                )) }
            </Wrapper>

        </Container>
    );
};

export default Home;


const UserPath = styled.div`
    width: 100%;
    /* padding-left: 10px; */
    height: 50px;
    padding: 10px 0px;
    /* background-color: red; */
`;
const Category = styled.div`
    margin-bottom: 10px;
`;
const Price = styled.div`
    margin-bottom: 10px;
    font-weight: 700;
`;
const Detail = styled.div``;
const Title = styled.div`
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
    width: 95%;
    /* background-color: green; */

    img{
        width: 100%;
        height: 250px;
    }
`;
const Card = styled.div`
    width: 280px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
`;
