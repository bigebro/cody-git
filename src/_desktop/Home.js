import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Header from './components/header'
import React from 'react';
import Banner from "./components/Banner";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Industries from "./components/Industries";
import Footer from "./components/Footer";
import MessengerCustomerChat from 'react-messenger-customer-chat';
const ContainerComp = styled.div`

.body.plugin svg {
width:4px;
}   
`;

function  Home() {
    return (
        <ContainerComp>
            <Header/>
            <Banner/>
            <Solutions/>
            <Features/>
            <Industries/>
            <MessengerCustomerChat
                pageId="331581003847973"
                appId="613554456622921"
                themeColor={'#8753F0'}
                style={{"width":"20px"}}
            />,

            <Footer/>

        </ContainerComp>


    )
}

export default Home;