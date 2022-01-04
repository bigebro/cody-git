import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Header from './components/header'
import React from 'react';
import Banner from "./components/Banner";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Industries from "./components/Industries";
import Footer from "./components/Footer";

const ContainerComp = styled.div`
`;

function  Home() {
    return (
        <ContainerComp>
            <Header/>
            <Banner/>
            <Solutions/>
            <Features/>
            <Industries/>
            <Footer/>


        </ContainerComp>


    )
}

export default Home;