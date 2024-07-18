import React from 'react'
import Container from "../../components/container/Container.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import HomeComponent from "../../components/homeComponent/HomeComponent.jsx";

const Home = () => {
    return (
        <Container>
            <Navbar/>
            <HomeComponent/>
        </Container>
    )
}
export default Home
