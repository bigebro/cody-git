import React from "react";
import styled from "styled-components";
import background from "../image/bg.svg"
import webinar from "../image/webinar.svg"
import person from "../image/person.png"
import arrow from "../image/arrow.svg"
const ContainerComp = styled.div`

img {
    vertical-align: middle;
    border-style: none;
}

.webinarbody {
    margin-top:90px;
    background-image: url(${background});
    background-size: 100%;
    background-position: 0px 120px;
    background-repeat: no-repeat;

 .training-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
 
    .training-item {
        box-shadow: rgb(0 0 0 / 8%) 0px 8px 10px, rgb(255 255 255 / 30%) 8px 8px 20px inset;
        border-radius: 20px 20px 0px 0px;
        cursor: pointer;

        .top-bar {
            text-align: left;
            width: 100%;
            padding: 0;

            .title {
                display: flex;
                align-items: flex-start;
                color: rgb(255, 255, 255);
                font-size: 20px;
                padding: 27px 27px 0px 32px;
                height: 130px;
            }

            .date {
                color: rgb(255, 255, 255);
    padding: 0px 0px 18px 32px;
    font-size: 18px;
            }
        }
        .training-bar {
            background: rgb(255, 255, 255);
    border-radius: 20px 20px 0px 0px;
    display: flex;
    padding: 15px 0px 0px;

    .profile {
        margin: 0px 10px;
    height: 60px;
    }

    .trainer-wrapper {
        width: 100%;
    margin-top: 10px;
    }

    .trainer-name {
        font-weight: bold;
        font-size: 16px;
        color: rgb(30, 32, 48);
    }

    .trainer-proof {
        font-size: 13px;
    color: rgb(142, 152, 174);
    }

    .duration-submit {
        display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 25px 10px 10px 0px;

    .trainer-duration {
        font-size: 12px;
    display: flex;
    color: rgba(41, 0, 122, 0.4);
    }

    .submit {
        background-image: url(${arrow});
        background-color: white;
        border: white;
        background-repeat:no-repeat;
    }
    }
    }
        }
 }
}
}

 .container {
max-width:100%;
padding-left: 43px;
    padding-right: 43px;
}



.webinar {
    width: fit-content;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
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
            background-image: url(${webinar});
            background-size: contain;
            background-position: right bottom;
            align-self: flex-end;
            margin-bottom: -4px;
            margin-right: -39px;
            background-repeat: no-repeat;
    }
}

    .webinarbody .training-wrapper {
        @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
        gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        padding: 0px 40px;
    }
}



`;


function WebinarBody() {
  
   
    return (
        
        <ContainerComp>
            <div className="webinarbody">
                <div className="container">
                    <h1 className="webinar section-title">
                    Вэб үйлчилгээний сургалт
                    </h1>
                    <div className="training-wrapper">
                        <div className="training-item" style={{"backgroundColor" : "rgba(136, 85, 241, 0.698)"}}>
                            <button type="button" className="top-bar">
                            <div className="title">
                            Бүтээгдэхүүн бэлдэх Мастер дата сургалт
                            </div>
                            <div className="date">
                            2021.11.23
                            </div>
                            <div className="training-bar">
                                <img className="profile" src={person}/>

                                    <div className="trainer-wrapper">
                                        <div className="trainer-name">
                                        Nomindari. Ts
                                        </div>
                                        <div className="trainer-proof">
                                        Training & Implementation Manager
                                        </div>
                                        <div className="duration-submit">
                                            <div className="trainer-duration">
                                            Хугацаа: 1 цаг
                                            </div>
                                            <button className="submit btn btn-second"></button>
                                        </div>
                                    </div>
                            </div>
                            </button>
                        </div>
                        <div className="training-item" style={{"backgroundColor" : "rgba(2, 212, 228, 0.698)"}}>
                            <button type="button" className="top-bar">
                            <div className="title">
                            Контент өрөх, меню тохируулах сургалт
                            </div>
                            <div className="date">
                            2021.12.01
                            </div>
                            <div className="training-bar">
                                <img className="profile" src={person}/>

                                    <div className="trainer-wrapper">
                                        <div className="trainer-name">
                                        Nomindari. Ts
                                        </div>
                                        <div className="trainer-proof">
                                        Training & Implementation Manager
                                        </div>
                                        <div className="duration-submit">
                                            <div className="trainer-duration">
                                            Хугацаа: 1 цаг
                                            </div>
                                            <button className="submit btn btn-second"></button>
                                        </div>
                                    </div>
                            </div>
                            </button>
                        </div>
                        <div className="training-item" style={{"background-color": "rgba(148, 197, 125, 0.698)"}}>
                            <button type="button" className="top-bar">
                            <div className="title">
                            Захиалга хүлээн авах үйл ажиллагаа сургалт
                            </div>
                            <div className="date">
                            2021.12.08
                            </div>
                            <div className="training-bar">
                                <img className="profile" src={person}/>

                                    <div className="trainer-wrapper">
                                        <div className="trainer-name">
                                        Nomindari. Ts
                                        </div>
                                        <div className="trainer-proof">
                                        Training & Implementation Manager
                                        </div>
                                        <div className="duration-submit">
                                            <div className="trainer-duration">
                                            Хугацаа: 1 цаг
                                            </div>
                                            <button className="submit btn btn-second"></button>
                                        </div>
                                    </div>
                            </div>
                            </button>
                        </div>
                        <div className="training-item" style={{"background-color": "rgba(252, 194, 4, 0.698)"}}>
                            <button type="button" className="top-bar">
                            <div className="title">
                            Маркетинг болон урамшууллын сургалт
                            </div>
                            <div className="date">
                            2021.12.15
                            </div>
                            <div className="training-bar">
                                <img className="profile" src={person}/>

                                    <div className="trainer-wrapper">
                                        <div className="trainer-name">
                                        Nomindari. Ts
                                        </div>
                                        <div className="trainer-proof">
                                        Training & Implementation Manager
                                        </div>
                                        <div className="duration-submit">
                                            <div className="trainer-duration">
                                            Хугацаа: 1 цаг
                                            </div>
                                            <button className="submit btn btn-second"></button>
                                        </div>
                                    </div>
                            </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerComp>
    )

}

export default WebinarBody;