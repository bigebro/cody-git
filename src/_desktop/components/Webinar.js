import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Header from '../components/header'
import React,  {Component} from 'react';
import Footer from "../components/Footer";
import WebinarBody from"../components/WebinarBody"

// import MessengerChat from 'react-messenger-customer-chat';

const ContainerComp = styled.div`


`;


class Webinar extends Component {
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
        <WebinarBody/>
        < Footer/>

        </ContainerComp>


    )
    }

}

export default Webinar