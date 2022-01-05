import React, {useState} from "react";
import styled from "styled-components";
import features from "../image/features.svg"
import {Swiper, SwiperSlide} from 'swiper/react';
import icon1 from '../image/icon-1.svg'
import icon2 from '../image/icon-2.svg'
import icon3 from '../image/icon-3.svg'
import icon4 from '../image/icon-4.svg'
import icon5 from '../image/icon-5.svg'
import icon6 from '../image/icon-6.svg'
import icon7 from '../image/icon-7.svg'
import icon8 from '../image/icon-8.svg'
import icon9 from '../image/icon-9.svg'
import icon10 from '../image/icon-10.svg'
import icon11 from '../image/icon-11.svg'
import icon12 from '../image/icon-12.svg'
import icon13 from '../image/icon-13.svg'
import icon14 from '../image/icon-14.svg'
import icon15 from '../image/icon-15.svg'
import icon16 from '../image/icon-16.svg'
import icon17 from '../image/icon-17.svg'
import icon18 from '../image/icon-18.svg'
import icon19 from '../image/icon-19.svg'
import icon20 from '../image/icon-20.svg'
import icon21 from '../image/icon-21.svg'
import icon22 from '../image/icon-22.svg'
import icon23 from '../image/icon-23.svg'
import icon24 from '../image/icon-24.svg'
import icon25 from '../image/icon-25.svg'
import icon26 from '../image/icon-26.svg'


import {ModalFeatures} from '../modal/ModalFeatures'



const Icons = {
    icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14,
    icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, icon26
}

const ContainerStyle = styled.div`
  .features-title {
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
      background-image: url(${features});
      background-size: contain;
      background-position: right bottom;
      align-self: flex-end;
      margin-bottom: -4px;
      margin-right: -39px;
      background-repeat: no-repeat;
    }
  }

  #features {
    padding: 60px 0px;
    background-color: rgb(241, 243, 255);
    max-width: 100%;
  }

  
  .con-1 span {
    width: 75%;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    font-family: "Averta CY";
    color: rgba(41, 0, 122, 0.59);
    display: block;
    text-align: right;
    position: absolute;
    bottom: 20px;
    right: 24px;
  }

  .con-1 {
    height: 236px;
    padding: 25px;
    border-radius: 23px;
    background-color: rgb(255, 255, 255);
    position: relative;
  }
  


  .con-1:hover {
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 9%) 0px 10px 30px;
    transition: all 200ms ease-in-out 0s;
  }


  
  .button {
    padding: 15px 40px;
    border-radius: 8px;
    text-align: center;
    background: linear-gradient(
            95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);
    margin: 0px auto;
    display: block;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 16px;
    transition: all 0.2s ease-in-out 0s;
     border: none;
    margin-top: 40px;

  span {
    color: rgb(255, 255, 255);
    font-family: "Averta CY";
    font-size: 17px;
    font-weight: 600;

  }
    :hover {
      box-shadow: none;
      cursor: pointer;
    }
  }
`;

const Featured = styled.div`
  h5 {
    color: rgb(41, 0, 122);
    font-size: 21px;
    margin: 12px 0px 0px;
    font-weight: 600;
    font-style: normal;
    line-height: 1.26;
    font-family: "Averta CY", sans-serif;
    display: flex;
    flex-direction: column;
  }

  h5:before {
    content: "";
    width: 54px;
    height: 54px;
    border-radius: 8px;
    background-color: ${(props) => props.color};
    background-image: url('${(props) => props.icon}');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 25px;
    display: inline-block;
    margin-bottom: 20px;
  }
    
  .swiper-container {
    position: relative;
    overflow: hidden;
    list-style: none;
    z-index: 1;
    margin-left: 60px;
    margin-bottom: 60px ;
  }

  

  
  
`;

const featuresC = [
    {
        id: 1,
        title: 'Контент менежмент систем',
        subTitle: 'CMS',
        icon: Icons.icon1,
        color: '#8855F1',
    },
    {
        id: 2,
        title: 'Хямдрал & Купон',
        subTitle: 'Discount & Promotion',
        icon: Icons.icon2,
        color: '#FCC204',
    },

    {
        id: 3,
        title: 'Бэлгийн карт',
        subTitle: 'Gift card',
        icon: Icons.icon3,
        color: '#02D4E4'
    },
    {
        id: 4,
        title: 'Маркетинг хэрэгсэлүүд',
        subTitle: 'Marketing manager',
        icon: Icons.icon4,
        color: '#FC3F82',
    },
    {
        id: 5,
        title: 'Захиалгын удирдлага',
        subTitle: 'Order manager',
        icon: Icons.icon5,
        color: '#94C57D',
    },
    {
        id: 6,
        title: 'Бүтээгдэхүүний удирдлага',
        subTitle: 'Product manager',
        icon: Icons.icon6,
        color: '#8855F1'
    },
    {
        id: 7,
        title: 'Хэрэглэгчийн удирдлага',
        subTitle: 'User management',
        icon: Icons.icon7,
        color: '#FCC204'
    },
    {
        id: 8,
        title: 'Худалдааны удирдлага',
        subTitle: 'Sales manager',
        icon: Icons.icon8,
        color: '#02D4E4'
    },
    {
        id: 9,
        title: 'Агуулах, Ложистикийн шийдэл',
        subTitle: 'Fulfillment manager',
        icon: Icons.icon9,
        color: '#FC3F82'
    },
    {
        id: 10,
        title: 'Дижитал хэтэвч',
        subTitle: 'Digital Wallet',
        icon: Icons.icon10,
        color: '#94C57D'
    },
    {
        id: 11,
        title: 'Эвент удирдлага',
        subTitle: 'Events',
        icon: Icons.icon11,
        color: '#8855F1'
    },
    {
        id: 12,
        title: 'Цахим зээлийн үйлчилгээ',
        subTitle: 'Online leasing',
        icon: Icons.icon12,
        color: '#FCC204'
    },
    {
        id: 13,
        title: 'Төлбөрийн шийдлүүд',
        subTitle: 'Payment gateway',
        icon: Icons.icon13,
        color: '#02D4E4'
    },
    {
        id: 14,
        title: 'Харилцагчийн удирдлага',
        subTitle: 'CRM',
        icon: Icons.icon14,
        color: '#8855F1'
    },
    {
        id: 15,
        title: 'Блог, Нийтлэл',
        subTitle: 'Blog & Article',
        icon: Icons.icon15,
        color: '#FCC204'
    },
    {
        id: 16,
        title: 'Борлуулалтын сувгууд',
        subTitle: 'Sales channels',
        icon: Icons.icon16,
        color: '#02D4E4'
    },
    {
        id: 17,
        title: 'Татварын системийн холболт',
        subTitle: 'Tax integration',
        icon: Icons.icon17,
        color: '#FC3F82'
    },
    {
        id: 18,
        title: 'Тайлан анализ',
        subTitle: 'Reporting & Analytics',
        icon: Icons.icon18,
        color: '#94C57D',
    },
    {
        id: 19,
        title: 'Аюулгүй байдал, Нууцлал',
        subTitle: 'Security & Trust',
        icon: Icons.icon19,
        color: '#8855F1'
    },
    {
        id: 20,
        title: 'Сургалт нэвтрүүлэлт',
        subTitle: 'Training',
        icon: Icons.icon20,
        color: '#FCC204'
    },
    {
        id: 21,
        title: 'Тусламж, засвар үйлчилгээ',
        subTitle: 'Support & maintenance',
        icon: Icons.icon21,
        color: '#02D4E4'
    },
    {
        id: 22,
        title: 'Интеграци, холболтууд',
        subTitle: 'ERP & Global Integration',
        icon: Icons.icon22,
        color: '#FC3F82'
    },
    {
        id: 23,
        title: 'SEO & Social integration',
        subTitle: 'SEO & Social integration',
        icon: Icons.icon23,
        color: '#94C57D',
    },
    {
        id: 24,
        title: 'API first',
        subTitle: 'API first',
        icon: Icons.icon24,
        color: '#8855F1'
    },
    {
        id: 25,
        title: 'Fast & Cloud deployment',
        subTitle: 'Fast & Cloud deployment',
        icon: Icons.icon25,
        color: '#FCC204'
    },
    {
        id: 26,
        title: 'Performance & Scale',
        subTitle: 'Performance & Scale',
        icon: Icons.icon26,
        color: '#02D4E4'
    },


];



function Features() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);

    };
    return (
        <ContainerStyle>
            <ModalFeatures showModal={showModal} setShowModal={setShowModal}/>
            <div id="features">

                    <h1 className="features-title">
                        Системийн боломжууд
                    </h1>
                    <Swiper spaceBetween={0}
                            slidesPerView={5.15}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            slidesPerColumnFill={"row"}
                            slidesPerColumn={2}
                            autoplay={{ delay: 4000 }}



                    >
                        {featuresC.map((v) => {
                            return (
                                <SwiperSlide key={v.id}>
                                    <Featured icon={v.icon} color={v.color}>

                                            <div className="swiper-container">
                                                    <div className="con-1">
                                                        <h5>{v.title}</h5>
                                                        <span>{v.subTitle}</span>
                                            </div>
                                            </div>
                                    </Featured>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>


                <button onClick={openModal} type="button" className="button">
                        <span>
                            Дэлгэрэнгүй
                        </span>
                </button>
            </div>

        </ContainerStyle>
    )
}

export default Features