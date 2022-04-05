import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Header from '../components/header'
import React, {Component} from 'react';
import Footer from "../components/Footer";
import CareerBanner from './CareerBanner';
import CareerBody from './CareerBody';

// import MessengerChat from 'react-messenger-customer-chat';

const ContainerComp = styled.div`


`;


class Career extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };


    render() {
        return (
            < ContainerComp >
            < Header
        drawerClickHandler = {this.drawerToggleClickHandler}
        show = {this.state.sideDrawerOpen}
        onHide = {this.backdropClickHandler}
        />
 
        <CareerBanner/>
        <CareerBody/>
        < Footer/>

        </ContainerComp>


    )
    }

}

export default Career