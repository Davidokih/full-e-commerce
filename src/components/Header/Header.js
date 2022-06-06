import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../Global/GlobalState';
import { BsCartFill } from "react-icons/bs";
import { GoThreeBars } from 'react-icons/go';
import { GiCancel } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';
const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.persistedReducer.user);
    // console.log(user);

    useEffect(() => { }, []);
    return (
        <>
            <Container>
                <Wrapper>
                    <Logo>JUMIA</Logo>
                    { user ? (
                        <>
                            <Holder>
                                <SearchDiv>
                                    <Search>
                                        <Icon>Icon</Icon>
                                        {/* <Input placeholder='Search' /> */ }
                                    </Search>
                                    {/* <Button>Search</Button> */ }
                                </SearchDiv>
                                <Profile>
                                    <Icon2><img src={ user?.avatar } /></Icon2>
                                </Profile>
                                <Help to="/upload">
                                    <Icon3>Icon3</Icon3>
                                    {/* Help */ }
                                </Help>
                                <Cart to='/cart'>
                                    <Icon4 />
                                    {/* Cart */ }
                                </Cart>
                                <Link to="/signIn"><button onClick={ () => {
                                    dispatch(signOut());
                                    navigate("/signIn");
                                } }>Log Out</button></Link>


                            </Holder>
                            <Menu>
                                <GoThreeBars id="bars" size="30px" onClick={ () => {
                                    document.getElementById("display").style.top = "0px";
                                    document.getElementById("cancle").style.display = "block";
                                    document.getElementById("bars").style.display = "none";

                                } } />
                            </Menu>
                        </>
                    ) : (
                        <Sign>
                            Register
                        </Sign>
                    ) }
                </Wrapper>
            </Container>
            <MenuBar id="display">
                <Can><GiCancel size="30px" onClick={ () => {
                    document.getElementById("display").style.top = "700px";
                    document.getElementById("cancle").style.display = "none";
                    document.getElementById("bars").style.display = "block";
                } } /></Can>
                <Navs>
                    <Link to="/" style={ { textDecoration: "none" } }><Nav onClick={ () => {
                        document.getElementById("display").style.top = "700px";
                        document.getElementById("cancle").style.display = "none";
                        document.getElementById("bars").style.display = "block";
                    } } >Home</Nav></Link>
                    <Link to="/cart" style={ { textDecoration: "none" } }><Nav onClick={ () => {
                        document.getElementById("display").style.top = "700px";
                        document.getElementById("cancle").style.display = "none";
                        document.getElementById("bars").style.display = "block";
                    } } >Cart</Nav></Link>
                    <Link to="/upload" style={ { textDecoration: "none" } }><Nav onClick={ () => {
                        document.getElementById("display").style.top = "700px";
                        document.getElementById("cancle").style.display = "none";
                        document.getElementById("bars").style.display = "block";
                    } } >Upload</Nav></Link>
                    <Nav onClick={ () => {
                        dispatch(signOut());
                        navigate("/signIn");
                        document.getElementById("display").style.top = "700px";
                        document.getElementById("cancle").style.display = "none";
                        document.getElementById("bars").style.display = "block";
                    } }>Log Out</Nav>
                </Navs>
            </MenuBar>
        </>
    );
};

export default Header;

const Can = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;


    /* padding: 10px; */
`;
const Nav = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 5;
    color: #fff;
    cursor: pointer;
`;
const Navs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const MenuBar = styled.div`
    width: 300px;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
    position: fixed;
    padding: 10px;
    color: #fff;
    top: 700px;
    /* bottom: 0; */

    transition: all 3s;
    /* z-index: 1; */
`;
const Menu = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 800px){
        display: block;
    }
`;
const Sign = styled.div``;
const Icon4 = styled(BsCartFill)`
`;
const Icon3 = styled(FaUpload)``;
const Icon2 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
    }
`;
const Cart = styled(Link)`
    text-decoration: none;
    display: flex;
`;
const Help = styled(Link)`
    display: flex;
    text-decoration: none;
`;
const Profile = styled.div`
    
    display: flex;
    align-items: center;
`;
const Button = styled.button`
    width: 100px;
    height: 40px;
    background-color: orange;
    color: #fff;
    border: 0;
    outline: none;
    border-radius: 5px;
`;
const Input = styled.input`
    border: 0;
    outline: none;
    width: 340px;
    padding: 10px;
`;
const Icon = styled(FaSearch)``;
const Search = styled.div`
    /* border: 1px solid lightgray; */
    /* width: 400px; */
    /* flex: 0.5;
    height: 40px;
    display: flex;
    border-radius: 5px;
    align-items: center;
    padding: 0 10px; */
`;
const SearchDiv = styled.div`
    /* width: 500px; */
    /* flex: 0.6; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
`;
const Holder = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: green; */

    button{
        cursor: pointer;
        padding: 7px 10px;
        background-color: orange;
        border: 0;
        border-radius: 5px;
        color: #fff;
    }

    @media (max-width: 800px){
        display: none;
    }
`;
const Logo = styled.div`
    font-size: 30px;
    font-weight: 800;
`;
const Wrapper = styled.div`
/* flex: 0.9; */
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    border-bottom: 1px solid gray;
`;