import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Header from './components/header'
import React, {Component} from 'react';
import Banner from "./components/Banner";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Industries from "./components/Industries";
import Footer from "./components/Footer";
import '../index.css';
// import MessengerChat from 'react-messenger-customer-chat';

const ContainerComp = styled.div`


`;


class Home extends Component {
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
        < Banner / >
        < Solutions / >
        < Features / >
        < Industries / >

        < Footer / >

        < /ContainerComp>


    )
    }

}

export default Home;