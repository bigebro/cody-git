import React, {useState} from 'react';
import styled from 'styled-components'
import Image from './cody.svg'
import 'typeface-roboto'
import Heart from '../image/heart.svg'
import {Modal} from '../modal/Modal'


const ContainerComp = styled.div`

  .modal-content1 {
    border: none;
    border-radius: 20px;
    padding: 30px 20px;
    background-color: red;
  }

  .navigation-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 96px;
    color: black;
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;
    z-index: 10;

    a {
      color: rgb(68, 68, 68);
      outline: none;
      text-decoration: none !important;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding-left: 32px;
      padding-right: 32px;
      max-width: 100%;

      .navigation-links {

        button {
          font-family: "Averta CY", Roboto, sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 1.2;
          color: rgb(30, 32, 48);
          margin: 0px 25px;
          transition: all 0.2s ease-in-out 0s;
          background: white;
          border: none;

          a {
            font-family: "Averta CY", Roboto, sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 1.2;
            color: rgb(30, 32, 48);
            transition: all 0.2s ease-in-out 0s;
            text-decoration: none;

            :hover {
              color: rgb(131, 38, 226);
            }
          }

        }

        button.navigation-btn {
          background: linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);
          border-radius: 8px;
          color: rgb(255, 255, 255);
          font-size: 14px;
          padding: 12px 25px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: 0px;


          :after {
            width: 0;
            height: 20px;
            content: "";
            display: inline-block;
            background-image: url(${Heart});
            background-size: 17px;
            background-position: center 2px;
            background-repeat: no-repeat;
            animation: pulse 0.7s infinite;
            transition: all 0.2s ease-in-out 0s;
          }


          @keyframes pulse {
            10% {
              transform: scale(1.3)
            }
          }


        }

        button.navigation-btn:hover {
          :after {
            width: 20px;
            margin-left: 10px;
            margin-right: -5px;
          }

        }
      }
    }
  }


  h6 {
    color: rgb(30, 32, 48);
    font-size: 12px;
    font-weight: 500;
    margin: 7px 0px 0px 2px;
    font-family: "Averta CY", Roboto, sans-serif;

  }


`;


function Header() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);

    };


    return (
        <ContainerComp>
            <div className='navigation-bar'>
                <div className="container">
                    <a href="/"><img style={{"width": '150px', "height": '26.81px'}} src={Image}/>      <h6>Таны
                        бизнесийг технологиор хөгжүүлнэ</h6></a>


                    <div className='navigation-links'>
                        <button><a href="#cody">Коди Платформ</a></button>
                        <button><a href="#solutions">Шийдэл</a></button>
                        <button><a href="#features">Боломжууд</a></button>
                        <button><a href="#">Харилцагч</a></button>
                        <button><a href="#">Бидний тухай</a></button>

                        <button onClick={openModal} className="navigation-btn">Холбоо барих</button>

                    </div>

                </div>

            </div>
            <div style={{height:'95px'}}> </div>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
        </ContainerComp>


    )
}

export default Header;



