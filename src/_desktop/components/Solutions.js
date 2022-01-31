import React, {useState} from 'react'
import styled from "styled-components";
import solutions from '../image/Solutions.svg'
import ellipse from '../image/ellipsee-opt.webp'
import {ModalSolutions} from '../modal/ModalSolutions'

const ContainerStyle = styled.div`

  .solutions-title {
    line-height: 1.26;
    font-family: "Averta CY", sans-serif;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px auto 50px;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    color: rgb(30, 32, 48);

    :before {
      width: 81px;
      height: 30px;
      content: "";
      display: block;
      background-image: url(${solutions});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right bottom;
      align-self: flex-end;
      margin-bottom: -4px;
      margin-right: -39px;
      filter: invert(21%) sepia(79%) saturate(125%) hue-rotate(22deg) brightness(119%) contrast(24%);
      fill: #d9534f;
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    padding: 0px 7%;
    margin-top: 6%;
    margin-bottom: 7%;
    justify-items: center;
    
    @media only screen and (max-width: 750px){
       grid-template-columns: repeat(1, 1fr);
    }
  }


  .container-content {
    box-sizing: border-box;
  }

  h5 {
    color: rgb(136, 85, 241);
    margin-bottom: 20px;
    font-size: 26px;
    font-family: "Averta CY";
    font-weight: 600;
  }

  p {
    font-size: 20px;
    color: rgb(30, 32, 48);
    font-weight: 400;
    margin-bottom: 0px;
  }

  .container {
    background-color: rgb(250, 251, 255);
    padding: 70px 0px 20px;
    max-width: 100%;
  }

  .button {
    padding: 15px 40px;
    border-radius: 8px;
    text-align: center;
    background: linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);
    margin: 0px auto;
    display: block;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 16px;
    transition: all 0.2s ease-in-out 0s;
    border: none;
  }

  .button:hover {
    box-shadow: none;
    cursor: pointer;
  }

  .button span {
    color: rgb(255, 255, 255);
    font-family: "Averta CY";
    font-size: 17px;
    font-weight: 600;
  }

  img {
    width: 100%;
  }
`;

function Solutions() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);

    };


    return (

        <div id="solutions">

        <ContainerStyle>
        <ModalSolutions showModal={showModal} setShowModal={setShowModal}/>
    <div className="container">
        <h1 className="solutions-title">
        Бидний шийдэл
    </h1>
    <div className="content">
        <div className="container-content">
        <h5>Headless Ecommerce</h5>
    <p>Headless цахим худалдааны шийдлээр бизнесийн онцлогтоо тохирох цахим худалдааг бүтээж
    ирээдүйтэй бэлтгэ</p>
    </div>
    <div className="container-content">
        <h5>Multi Store</h5>
    <p>Ашиглахад хялбар, салбар бизнесүүдийнхээ сүлжээг бий болгож удирдах</p>
    </div>
    <div className="container-content">
        <h5>Market Place</h5>
    <p>Бизнесийн загвартай тохируулан олон төрлийн борлуулагчдын зах зээлийг бий болгох
    боломжтой</p>
    </div>

    <div className="container-content">
        <h5>Media Platform</h5>
    <p>Медиа платформын тусламжтайгаар контент дээр суурьласан цахим худалдаагаа эхлүүлээрэй</p>
    </div>
    </div>
    <button onClick={openModal} type="button" className="button">

        <span>
        Дэлгэрэнгүй
        </span>

        </button>
        </div>

        <img src={ellipse}/>

    </ContainerStyle>

    </div>

)
}


export default Solutions;