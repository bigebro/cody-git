
import React, { useState } from "react";
import styled from "styled-components";
import ellipse from "../image/ellipsee-opt.webp"
import industries from "../image/Industries.svg"
import {Container} from "reactstrap";
import {SwiperSlide, Swiper} from "swiper/react";
import tech from "../image/tech.svg"
import clothes from "../image/clothes.svg"
import home from "../image/home.svg"
import music from "../image/music.svg"
import brand from "../image/brand.svg"
import wallet from "../image/wallet.svg"
import travel from "../image/travel.svg"
import event from "../image/event.svg"
import media from "../image/media.svg"
import pharmacy from "../image/pharmacy.svg"
import grocerystore from "../image/grocerystore.svg"
import coupon from "../image/coupon.svg"
import jewelry from "../image/jewelry.svg"
import flight from "../image/flight.svg"
import furniture from "../image/furniture.svg"
import child from "../image/child.svg"
import beauty from "../image/beauty.svg"
import leftArrow from "../image/left.svg"
import rightArrow from "../image/right.svg"
import img1 from "../image/tech.jpg"
import img2 from "../image/lux.jpg"
import img3 from "../image/homeshopping.jpg"
import img4 from "../image/duu-hugjim---shoppymusicc.jpg"
import img5 from "../image/branding.jpg"
import img6 from "../image/wallet.jpg"
import img7 from "../image/travel.jpg"
import img8 from "../image/event.jpg"
import img9 from "../image/ubp.jpg"
import img10 from "../image/pharmacy.jpg"
import img11 from "../image/grocery.jpg"
import img12 from "../image/coupon.jpg"
import img13 from "../image/jewelry.jpg"
import img14 from "../image/nisleg---airlink.jpg"
import img15 from "../image/tavilga.jpg"
import img16 from "../image/kids.jpg"
import img17 from "../image/cose-goo-saihan.jpg"
import R1 from "../image/next-mobile.webp"
import R2 from "../image/lux-mobile.webp"
import R3 from "../image/homeshopping.webp"
import R4 from "../image/duu-hugjim-mobile.webp"
import R5 from "../image/converse.webp"
import R6 from "../image/tsahim-hetevch-cody-checkout-mobile.webp"
import R7 from "../image/joinme-mobile.webp"
import R8 from "../image/playtime.webp"
import R9 from "../image/ubpp.webp"
import R10 from "../image/asiapharma.webp"
import R11 from "../image/esansar.webp"
import R12 from "../image/coupon1.webp"
import R13 from "../image/baigali-house.webp"
import R14 from "../image/airlink.webp"
import R15 from "../image/gerplace.webp"
import R16 from "../image/carters.webp"
import R17 from "../image/cose.webp"
import 'swiper/swiper.scss';
import {useMediaQuery} from "react-responsive";
import {DeviceSize} from "../components/responsive/index";

import SwiperCore,{ Autoplay, Navigation, Pagination} from 'swiper';

SwiperCore.use([Autoplay])

const ContainerStyle = styled.div`



.scroll .buttons button:not(:last-of-type) {
  margin-bottom: 10px;
}


.industries-section .industries-menus {



  @media (max-width: 991px){
    margin: 0px auto;
    min-height: unset;
  }

  .buttons {
    @media (max-width: 991px){
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      margin-bottom: 20px;
      margin-right: 0px;
    }

    button {
      
  @media (max-width: 991px){
  
    width: unset;
    text-align: center;
    margin-bottom: 0px;
  }
    }

  }
  
}

 .industries-section .industries-menus .buttons button:not(.active) {
  @media (max-width: 991px){   display: none;
  }}
 

  .ellipse-image {
    transform: rotate(180deg);
    width: 100%;
  }

  #industries {
    padding-bottom: 30px;
    background-color: rgb(250, 252, 255);
  }

  .section-title {
    font-weight: bold;
    font-style: normal;
    line-height: 1.26;
    font-family: "Averta CY", sans-serif;
    width: fit-content;
    display: flex;
    align-items: center;
    webkit-box-align: center;
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
      background-image: url(${industries});
      background-size: contain;
      background-position: right bottom;
      align-self: flex-end;
      margin-bottom: -4px;
      margin-right: -39px;
      background-repeat: no-repeat;
    }
  }

  .container {
    max-width: 100%;
  }

  span.icon {
    width: 48px;
    height: 48px;
    border-radius: 6px;
    margin-right: 20px;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
  }


  span.icon img {
    z-index: 1;
    width: 20px;
    height: 20px;
    object-fit: contain;
    vertical-align: middle;
    border-style: none;
    transform: rotateY(180deg);;

  }

  .buttons button span.icon:after {
    
    z-index: 0;
    content: "";
    display: block;
    margin: auto;

    transition: all 0.2s ease-in-out 0s;

    position: absolute;
    inset: 0px;
  }

  .industries-section {
    

    display: flex;
    align-self: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  
    @media (max-width: 991px) {
      display:block;
    }
    
    

  }

  .industries-menus {
    flex: 0 0 260px;
    min-height: 500px;
    margin-right: 40px;

  }

  .scroll {
    max-height: 650px;
    margin-left: -15px;
    overflow: hidden auto;
    transform: rotateY(180deg);

  }

  .scroll::-webkit-scrollbar {
    width: 4px;
  }

  .scroll::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: rgb(206 207 215) 0px 0px 4px inset;

  }

  .scroll::-webkit-scrollbar-thumb {
    height: 5px;
    border-radius: 100px;
    background-color: rgb(136, 85, 241);
  }
}

.buttons {
  margin-right: 15px;
  transform: rotateY(180deg);
  
}

.buttons button {
  width: 100%;
  text-align: right;
  display: flex;
  border: none;
  align-items: center;
  background-color: rgb(250, 252, 255);;
  transition: all 0.2s ease-in-out 0s;
}

.buttons button span {
  transition: all 0.2s ease-in-out 0s;

}

.buttons button span.text {
  color: rgb(30, 32, 48);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  margin-left: -5px;
}

.buttons button.active span.text {
  color: rgb(136, 85, 241);

}


.buttons button span.text:hover {
  color: rgb(136, 85, 241);
  transition: all 0.2s ease-in-out 0s;

}

.buttons button.active span.icon img {
  filter: brightness(0) invert(1);

}

.buttons button.active span.icon::after {
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background-color: rgb(136, 85, 241);
  
}


.buttons button:hover span.text {
  color: rgb(136, 85, 241);
  transition: all 0.2s ease-in-out 0s;
}

.buttons button:hover span.icon {
  background-color: rgb(245, 246, 249);
  transition: all 0.2s ease-in-out 0s;
}

// .button button.active  span.icon:after {
//  width: 100%;
//  height: 100%;
//  border-radius: 0px;
//  background-color: rgb(136, 85, 241);
// }
//
// .buttons button:focus span.icon {
//  border-radius: 8.5px;
//  background-color: rgb(136, 85, 241);
//  transition: all 0.2s ease-in-out 0s;
//
//  img {
//    filter: brightness(0) invert(1);
//  }
//
// }
//
// .item-wrapper {
//  display: flex;
//  align-items: center;
//  border: none;
//  margin: 0 0 10px;
//  background-color: white;
//
//  &:hover, &:active {
// color:rgb(136,85, 241);
//    transition-duration: 0.5s;
//  }
//  :focus {
//    color: #8855F1;
//  }
//
// }
.scrollbar-thumb {
  height: 5px;
  border-radius: 100px;
  background-color: rgb(136, 85, 241);
}

.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  border-radius: 32px;
}

.box-shadow {
  display: block;
  border-radius: 32px;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
}

.swiper-button-prev::after {
  background-image: url(${leftArrow});
  background-position-x: 12px;
  left: 16px;
  background-repeat: no-repeat;

}

.swiper-button-next::after, .swiper-button-prev::after {
  display: none;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;

}

.industry {
  overflow: hidden;
  border-radius: 32px;
  position: relative;

}

.industries-swiper {
  flex: 1 1 0%;
}

.swiper-button-next {
  background-image: url(${rightArrow});
  background-repeat: no-repeat;
  background-position-x: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 9%) 0px 10px 30px;
  background-position: center center;
  position: absolute;
  top: 50%;
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-prev {
  background-image: url(${leftArrow});
  background-repeat: no-repeat;
  background-position-x: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 9%) 0px 10px 30px;
  background-position: center center;
  position: absolute;
  top: 50%;
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

}


.swiper-slide {

  
    width: 801px;
    margin-right: 20px;
  img {
    width: 100%;
    vertical-align: middle;
    border-style: none;
  }

}

ol, ul {
  padding-left: 1.1rem;


}



`;
const ReImages = [

  {ReImage: R1, icon: tech, title: 'Технологи',id: 1,},  {ReImage: R2, id: 2,}, {ReImage: R3, id: 3,}, {ReImage: R4, id: 4,}, {ReImage: R5, id: 5,} ,
  {ReImage: R6, id: 6,}, {ReImage: R7, id: 7,}, {ReImage: R8, id: 8,}, {ReImage: R9, id: 9,}
, {ReImage: R10, id: 10,}, {ReImage: R11, id: 11,}, {ReImage: R12, id: 12,}, {ReImage: R13, id: 13,},
{ReImage: R14, id: 14,}, {ReImage: R15, id: 15,}, {ReImage: R16, id: 16,}, {ReImage: R17, id: 17,}





];




const Images = [

    {image: img1, id: 1,}, {image: img2, id: 2,}, {image: img3, id: 3,}, {image: img4, id: 4,}, {
        image: img5,
        id: 5,
    }, {image: img6, id: 6,}, {image: img7, id: 7,}, {image: img8, id: 8,}, {image: img9, id: 9,}, {
        image: img10,
        id: 10,
    }, {image: img11, id: 11,}, {image: img12, id: 12,}, {image: img13, id: 13,}, {
        image: img14,
        id: 14,
    }, {image: img15, id: 15,}, {image: img16, id: 16,}, {image: img17, id: 17,}];

const Icons = [
    {id: 1, icon: tech, title: 'Технологи',}, {id: 2, icon: clothes, title: 'Хувцас, загвар',}, {
        id: 3,
        icon: home,
        title: 'Гэр ахуй',
    }, {id: 4, icon: music, title: 'Дуу, хөгжим'}, {
        id: 5,
        icon: brand,
        title: 'Брэндинг',
    }, {id: 6, icon: wallet, title: 'Цахим хэтэвч',}, {id: 7, icon: travel, title: 'Аялал, жуулчлал',},
    {id: 8, icon: event, title: 'Эвэнт, тасалбар',}, {id: 9, icon: media, title: 'Медиа',}, {
        id: 10,
        icon: pharmacy,
        title: 'Эмийн сан',
    }, {id: 11, icon: grocerystore, title: 'Хүнсний дэлгүүр',}, {
        id: 12,
        icon: coupon,
        title: 'Купон & Ваучер',
    }, {id: 13, icon: jewelry, title: 'Үнэт эдлэл',},
    {id: 14, icon: flight, title: 'Нислэг',}, {id: 15, icon: furniture, title: 'Тавилга',}, {
        id: 16,
        icon: child,
        title: 'Хүүхэд',
    }, {id: 17, icon: beauty, title: 'Гоо, сайхан',}
];
function Industries() {

        const [index, setIndex] = React.useState(0);
    const [swiper, setSwiper] = React.useState(null);
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile});
    return (<ContainerStyle>

        <div id="industries">

            <img className="ellipse-image" src={ellipse}/>
            <Container>
                <h1 className="section-title">
                    Кодиг ашиглан Та юу бүтээж чадах вэ
                </h1>
                <div className="container">
                    <div className="industries-section">
                        {/*menu-section*/}
                        <div className="scroll industries-menus">
                            <div className="buttons">
                              
                                    {Icons.map((item, i) => {
                                        const isCurrent = swiper ? swiper.realIndex ===i:false;
                                        return(
                                            <button
                                                className={` ${index === i ? 'active' : ''}`}
                                                onClick={() => swiper ? swiper.slideTo(i+1) : false}>
                                                <span className="icon"><img src={index === i ? item.icon : item.icon}
                                                                            alt=""/></span>
                                                <span className="text">{item.title}</span>
                                            </button>
                                        )
                                    })}
                                
                            </div>
                        </div>
                        {/*swiper-section*/}
                        {!isMobile &&
                        <div className="industry industries-swiper">
                            <div className="box-shadow">
                           


                                        <Swiper
                                            onSlideChange={(e) => setIndex(e.realIndex)}
                                            onMouseEnter={() => swiper && swiper.autoplay.stop()}
                                            onMouseLeave={() => swiper && swiper.autoplay.start()}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            navigation
                                            onSwiper={(s)=>{
                                                setSwiper(s);
                                                setIndex(0);
                                            }}
                                            loop
                                            autoplay={{ delay: 4500 }}
                                        >
                                            {Images.map((c, idx) => {
                                                return (
                                                    <SwiperSlide><img src={c.image}
                                                                      alt="industry-slide"/>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                              
                            </div>
                        </div>
}
{isMobile &&
                        <div className="industry industries-swiper">
                            <div className="box-shadow">
                                        <Swiper
                                            onSlideChange={(e) => setIndex(e.realIndex)}
                                            onMouseEnter={() => swiper && swiper.autoplay.stop()}
                                            onMouseLeave={() => swiper && swiper.autoplay.start()}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            navigation
                                            onSwiper={(s)=>{
                                                setSwiper(s);
                                                setIndex(0);
                                            }}
                                            loop
                                            autoplay={{ delay: 4500 }}
                                        >
                                            {ReImages.map((c, idx) => {
                                                return (
                                                    <SwiperSlide><img src={c.ReImage}
                                                                      alt="industry-slide"/>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                  
                            </div>
                        </div>
}
                    </div>
                </div>
                <div className="fb_dialog  fb_dialog_advanced" alignment="right" 
                sdesktop_bottom_spacing="20"></div>
            </Container>
        </div>
    </ContainerStyle>)
}

export default Industries