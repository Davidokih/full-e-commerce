import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addToCart, removeFrom } from '../Global/GlobalState';
import UserAvatar from './UserAvatar';
import axios from 'axios';


const CartHold = () => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.persistedReducer.cart);
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
                    <Card>
                        <UserPath>
                            <UserAvatar />
                        </UserPath>
                        <Hold>
                            {/* <Link to={ `/detail/${props._id}` }> */ }
                            <img src={ props.image } />
                            {/* </Link> */ }
                            <Contents>
                                <ContHold>
                                    <Title>{ props.productName }</Title>
                                    <Price>{ props.price }</Price>
                                    <Price>{ props.price * props.Qty }</Price>
                                    <Category>{ props.category }</Category>
                                </ContHold>
                                {/* <Detail>description: { props.description }</Detail> */ }
                                <ButHold>
                                    <button bg >-</button>
                                    { props.Qty }
                                    <button onClick={ () => {
                                        dispatch(addToCart(props));
                                    } }>+</button>
                                </ButHold>
                            </Contents>
                        </Hold>
                    </Card>
                )) }
            </Wrapper>
            <Link to='/'><Button>Go Back</Button></Link>
        </Container>
    );
};

export default CartHold;

const ContHold = styled.div`
    width: 120px;
    /* background-color: red; */

    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const ButHold = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-between;

    button{
        margin-top: 20px;
        width: 40px;
        height: 40px;
        border: 0;
        outline: none;
        border-radius: 5px;
        /* background-color: ${({ bg }) => (bg ? "orange" : "orange")}; */
        color: #fff;
        font-weight: 800;
        cursor: pointer;
    }
`;
const Button = styled.button`

`;
const UserPath = styled.div`
    width: 100%;
    /* padding-left: 10px; */
    height: 50px;
    padding: 10px 0px;
    background-color: red;
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

    
`;
const Hold = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    /* background-color: green; */

    img{
        width: 100px;
        height: 120px;
    }
`;
const Card = styled.div`
    /* width: 00px; */
    flex: 0.9;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    flex-direction: column;
`;
