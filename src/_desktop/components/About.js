import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Header from '../components/header';
import React, {Component} from 'react';
import Footer from "../components/Footer";
import AboutBody from '../components/AboutBody';

// import MessengerChat from 'react-messenger-customer-chat';

const ContainerComp = styled.div`
@media (max-width: 992px) {
    .element-to-hide {
      display: none;
    }
  }

`;


class About extends Component {
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
        <AboutBody/>
     
        < Footer/>

        </ContainerComp>


    )
    }

}

export default About