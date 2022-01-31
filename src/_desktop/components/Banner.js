import React from 'react';
import styled from 'styled-components'
import 'swiper/swiper.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import 'swiper/swiper-bundle.css';
import {Container, Row} from 'reactstrap'
import logo1 from '../image/24auto.png'
import logo2 from '../image/amazonoos.png'
import logo3 from '../image/americanelectronics.png'
import logo4 from '../image/btf.png'
import logo5 from '../image/ammay.png'
import logo6 from '../image/michel-amazonka.svg'
import logo7 from '../image/carters.png'
import logo8 from '../image/babyworld.svg'
import logo9 from '../image/best.png'
import logo10 from '../image/converse.svg'
import logo11 from '../image/shoppy.png'
import logo12 from '../image/zuwzvi.svg'
import logo13 from '../image/vista.jpg'
import logo14 from '../image/worldwine.png'
import logo15 from '../image/voloshina.png'
import logo16 from '../image/smartstore.png'
import logo17 from '../image/technozone.png'
import logo18 from '../image/next.png'
import logo19 from '../image/take.svg'
import logo20 from '../image/coinhub.png'
import logo21 from '../image/gerplace.png'
import logo22 from '../image/summit.png'
import logo23 from '../image/tanpopo.svg'
import logo24 from '../image/gerplace.png'
import img1 from '../image/shoppy10.webp'


import img2 from '../image/next10.webp'
import img3 from '../image/CONVERSE10.webp'

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const ContainerStyle = styled.div`
img {
vertical-align: middle;
    border-style: none;
}
h3{

    font-style: normal;
    font-family: "Averta CY", sans-serif;
        display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.cody-container .swiper-container .body .meta {
margin-bottom: 60px;

         @media only screen and (max-width: 410px) {
margin-right: 20px;
    }

    position: relative;
  

}

.cody-container .swiper-container .body .meta .title {
  
    font-weight: 700;
    margin-bottom: 20px;
    
     @media only screen and (max-width: 742px) {
    font-size: 19px;
        text-align: center;
line-height: 25px;
    margin-left: 160px;
    margin-top: 40px;

    }
    
         @media only screen and (max-width: 410px) {
    font-size: 19px;
  text-align: center;
line-height: 25px;
    margin-left: 90px;
    margin-top: 40px;

    }
    
      
         @media only screen and (max-width: 354px) {
    font-size: 19px;
  text-align: center;
line-height: 25px;
    margin-left: 64px;
    margin-top: 40px;

    }
    
           @media only screen and (max-width: 294px) {
    font-size: 19px;
  text-align: center;
line-height: 25px;
    margin-left: 24px;
    margin-top: 40px;

    }
  
      @media only screen and (max-width: 50px) {
    font-size: 12px;
  text-align: center;
        margin-right: 50px;
    }
  
}
.cody-container .swiper-container .body .meta .description {
    color: rgb(30, 32, 48);

    margin: 0px;
       @media only screen and (max-width: 739px) {

font-size: 15px;
    line-height: 24px;
    text-align: center

    }
    
    
}
.cody-container  .body img {
    width: 100%;

}

.cody-container .swiper-container .body {
width: 100%;

   @media only screen and (max-width: 757px) {

  padding-left: 40px;

    }

img {
   
    margin-right: 60px;
    @media only screen and (max-width: 760px) {
    width: 90%;

    }
}



    display: flex;
    
    align-items: center;
  
    justify-content: center;
    background-color: rgb(255, 255, 255);
}



.swiper-slide {

flex-shrink: 0;
height: 100%;
    position: relative;
    width: 528px;
    transition-duration: 0ms;
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}

.swiper-container-fade .swiper-slide {
    pointer-events: none;
    transition-property: opacity;
}

.swiper-slide {
    flex-shrink: 0;
    width: 100%;

    position: relative;
    transition-property: transform;
}
 
      .container {
      width: 100%;

    margin-right: auto;
    margin-left: auto;
      padding-left: 6px !important;
    padding-right: 6px !important;
      }
      
      
.swiper-container-pointer-events {
    touch-action: pan-y;
}

.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
 
}

.swiper-wrapper {
    transition-duration: 0ms;
    transform: translate3d(0px, 0, 0);
    position: relative;
    width: 100%;

    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}


      
  .cody-container { 
  .body {
     @media only screen and (max-width: 760px) {
        flex-direction: column;
     
    }
  
  }
    margin-top: 50px;
    width: 100%;
    background-color: white;
    position: relative;
    padding-bottom: 100px;
    padding-top: 30px;
    height: 100%;
  }






  .cody-container {
    margin-top: 50px;
    width: 100%;
    background-color: white;
    position: relative;
    padding-bottom: 100px;
    padding-top: 30px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .d-flex {
    width: 700px;
        height: 100%;
    justify-content: center;
    margin-left: 120px;
 
    
  }

  .cody-section {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  h3 {
    font-size: 28px;
    line-height: 44px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    color: rgb(30, 32, 48);
    font-size: 22px;
    line-height: 30px;
    margin: 0;
  }

  .swiper-pagination-bullet {
    background: #EEEEEE;
  width: 15px;
    height: 15px;
    border-radius: 50%;
    opacity: 1;
    
  }

  .swiper-pagination-bullet-active {
    background-color: #8855F1;
    width: 15px;
    height: 15px;
    border-radius: 50%;

  }

  .swiper-pagination {
    margin-bottom: 35px;
    margin-left: 76px;
   
      @media only screen and (max-width:1190px) {
 margin-left: 160px;
    }
    
    @media only screen and (max-width:759px) {
    margin-left: 0px;
    }
 }


`;

const ContainerComp = styled.div`
  .image-logo img {
    -webkit-filter: grayscale(100%) brightness(60%) contrast(10000000%);
    opacity: .3;
    transition: all 0.2s ease-in-out 0s;
    padding-top: 2px;
  }

  .image-logo img:hover {
    -webkit-filter: grayscale(0) contrast(100%);
    opacity: 100%;
    cursor: pointer;
    transform: scale(1.1);
  }

  .image-logo {
    background-color: white;
    box-shadow: rgb(236 236 236) 4px 10px 20px;
    padding-bottom: 16px;
    padding-top: 26px;
  }


`;


const slides = [{
    title: 'КОДИ ПЛАТФОРМ',
    image: img1,
    description: 'Худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл оюун ухаанд суурилсан, тасралтгүй\n' +
        '                                хөгжүүлэлттэй Цахим худалдааны цогц платформ юм.'
},
    {
        title: 'ЦАХИМ ХУДАЛДААНЫ ЦОГЦ ПЛАТФОРМ',
        image: img2,
        description: 'Бид маш бага зардлаар таны бизнесийг цахим орчинд ажиллах боломжийг бүрдүүлнэ.\n' +
            '                                Та богино хугацаанд, найдвартай, уян хатан цахим худалдаагаа эхлүүлээрэй'

    },
    {
        title: 'ПЛАТФОРМЫН ХҮЧИЙГ МЭДЭР',
        image: img3,
        description: '    Дэлхийн тэргүүлэгч технологиудыг хослуулан ашиглаж, технологийн тасралтгүй\n' +
            '                                хөгжүүлэлттээр хэрэглэгч\n' +
            '                                байгууллагыг хангана.\n' +
            '                                Платформын гайхалтай шийдэлүүдийг ашиглан борлуулалтаа өсгөөрэй.'
    }

];


function Banner() {

    return (
        <ContainerComp>

            <Swiper spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop>

                <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}}
                                  src={'https://cdn5.shoppy.mn/img/82130/0x0xwebp/banner03.jpg?h=2935d0aea8cdff34d20f429fcef48744910ed6a9 '}/></SwiperSlide>
                <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}}
                                  src={'https://cdn5.shoppy.mn/img/82101/0x0xwebp/desktop-banner-1.jpg?h=2935d0aea8cdff34d20f429fcef48744910ed6a9'}/></SwiperSlide>

            </Swiper>
            <div className='image-logo'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={14}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo1}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo2}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo3}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%",}} src={logo4}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo5}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo6}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo7}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo8}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo9}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo10}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo11}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo12}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo13}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo14}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo15}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo16}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo17}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo18}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo19}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo20}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo21}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo22}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo23}/></SwiperSlide>
                    <SwiperSlide><img alt="" style={{"height": "100%", "width": "100%"}} src={logo24}/></SwiperSlide>
                </Swiper>
            </div>
            <ContainerStyle>
                <Container>
                    <div id="cody" className="cody-container">

                          <div id="container">

                                <Swiper spaceBetween={30} effect={'fade'} loop pagination={{clickable: true,}}>
                                    {
                                        slides.map((c) =>
                                        <div className="swiper-wrapper">
                                        <SwiperSlide>

                                        <div className="body">
                                        <img src={c.image} alt="pic"/>
                                        <div className ="meta">
                                        <h3 className="title">{c.title}</h3>
                                        <p className="description">{c.description}</p>
                                        </div>
                                        </div>

                                        </SwiperSlide>
                                        </div>
                                        )
                                     }
                                </Swiper>
                </div>
                    </div>
                </Container>
            </ContainerStyle>


        </ContainerComp>
    )
}

export default Banner;