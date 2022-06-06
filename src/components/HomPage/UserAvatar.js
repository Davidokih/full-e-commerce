import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const UserAvatar = ({ props, img, name, like }) => {
    const [ myUser, setMyUser ] = useState({});

    const getUser = async () => {
        const url = `http://localhost:1111/api/user/${props.user}`;

        await axios.get(url).then((res) => {
            setMyUser(res.data.data);
        });
    };
    console.log("myUser" + myUser.avatar);

    useEffect(() => {
        getUser();
    }, []);
    return (
        <Container>
            { img ? <Image src={ myUser?.avatar } /> : null }

            <Holder>
                { name ? <Text> Posted by: { myUser?.userName }</Text> : null }
                {/* { like ? <MyLikeComp props={ props } /> : null } */ }
            </Holder>
        </Container>
    );
};

export default UserAvatar;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 1;

`;
const Image = styled.img`
    width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	background-color: white;
	border: 1px solid black;
	/* position: absolute;
	top: -15px;
	left: -5px; */
`;
const Holder = styled.div`
	display: flex;
	width: 70%;
	justify-content: space-between;
    /* background-color: red; */
	margin-left: 10px;
`;

const Text = styled.div`
	font-weight: 500;
	/* bottom: 0; */
	/* z-index: 1; */
	color: black;
`;