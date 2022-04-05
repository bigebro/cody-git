import React from "react";
import styled from "styled-components";
import whycody from "../image/whycody.svg"
import iconrocket from "../image/icon-rocket.svg"
import iconchart from "../image/icon-chart.svg"
import iconidea from "../image/icon-idea.svg"
import iconsmile from "../image/icon-smile.svg"
import selection from "../image/selection.svg"
import one from "../image/1.png"
import two from "../image/2.png"
import three from "../image/3.png"
import four from "../image/4.png"
import line from "../image/line.svg"
import careers from "../image/careers.svg"
import onecareer from "../image/1.svg"
import twocareer from "../image/2.svg"
import threecareer from "../image/3.svg"
import fourcareer from "../image/4.svg"
import img1 from "../image/Job_announcement_UI.webp"
import img2 from "../image/Job_announcement_Mobile.webp"
import img3 from "../image/Job_announcement_Front.webp"
import img4 from "../image/Job_announcement_Back.webp"
import pic1 from "../image/pic1.webp"
import pic2 from "../image/pic2.webp"
import pic3 from "../image/pic3.webp"
import pic4 from "../image/pic4.webp"
import pic5 from "../image/pic5.webp"
import pic6 from "../image/pic6.webp"
import pic7 from "../image/pic7.webp"
import pic8 from "../image/pic8.webp"
import pic9 from "../image/pic9.webp"
import pic10 from "../image/pic10.webp"
import team from "../image/team.svg"
import {SwiperSlide, Swiper} from "swiper/react";
import 'bootstrap/dist/css/bootstrap.min.css';
const ContainerComp = styled.div`


.careerBody {
    .footer {
        max-width: 100%;
        background-size: cover;
        position: relative;
        overflow: hidden;

        :after {
            position: absolute;
            content: "";
            background-color: rgb(241, 243, 255);
            width: 1000vw;
            height: 4000vw;
            z-index: 1;
            bottom: 96%;
            left: -450vw;
            border-bottom-left-radius: 1200vw;
            border-bottom-right-radius: 1200vw;
        }

        .text-wrapper {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            margin-top: 70px;
            font-style: normal;
            font-weight: bold;
            font-size: 26px;
            line-height: 32px;
            z-index: 2;
            margin-bottom: 50px;

            :after {
                content: "";
    position: absolute;
    width: 144px;
    height: 50px;
    margin-top: -30px;
    margin-right: -150px;
    background: url(${team})  0% 0% / contain;
    background-repeat: no-repeat;
            }
        }
    }


}


.container, .container-md, .container-sm {
    @media (min-width: 768px) {
        max-width: 720px;
    }


}


.swiper-button-prev, .swiper-button-next {
color: transparent;
}

@media (min-width: 1200px) {
    .container {
        max-width:1282px;
    }
}


.swiper-slide {
flex-shrink:0;
height: 740px;
}

.slide1 {
    overflow: hidden;
    border-radius: 8px;
    position: relative;

    .box-shadow {
        display: block;
    background: rgb(255, 255, 255);
    }
}



.slide {
    max-height: 650px;
    margin-left: -15px;
    overflow: hidden auto;
    transform: rotateY(180deg);

    .buttons {
        margin-right: 15px;
        transform: rotateY(180deg);

        

button.active {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(136 85 241 / 10%) 0px 10px 30px;
 
}

button.active span.text {
    color: rgb(136, 85, 241);
}

button:not(:last-of-type){
    margin-bottom: 10px;
}
        button {
            width: 100%;
    text-align: left;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    transition: all 0.2s ease-in-out 0s;
    border-radius: 8px;
    padding: 5px;
    
    span.text {
        color: rgb(30, 32, 48);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
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

    img {
        z-index: 1;
        width: 20px;
        height: 20px;
        object-fit: contain;
    }
    }
        }
    }
}

.background {
    position: relative;
    background-color: rgb(241, 243, 255);

    
    .bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 50px;
    }

    .bottom .text-wrapper {
        z-index: 2;
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 32px;
        margin-bottom: 50px;

        :after {
            width: 90px;
            height: 23px;
            content: "";
            margin-top: -26px;
            margin-left: -40px;
            position: absolute;
            background: url(${careers});
            background-repeat: no-repeat;
        }
        }
      

      

    }






// .container {
//     @media (min-width: 1200px)
//  {
//     max-width: 1280px;
// }
// }

.container {
    
    padding-left: 6px !important;
    padding-right: 6px !important;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

.main {
    width:100%;
    height: auto;
    
    .steps {

        .step1 {
            background: url(${one});
            }
        .step2 {
            background: url(${two});
        }

        .step3 {
            background: url(${three});
        }

        .step4 {
            background: url(${four})
        }

        .step1, .step2, .step3, .step4  {

            width: 282.07px;
            height: 264.5px;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
            padding: 30px 60px;
            color: rgb(41, 0, 122);
            font-weight: 600;
            font-size: 18px;
            text-align: center;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            
            :after {
                width: 100px;
                height: 4px;
                content: "";
                background: url(${line});
                background-size: contain;
                margin-bottom: -188px;
                position: absolute;
            }
        }

        width: 100%;
        display: flex;
        justify-content: space-around;

        .step1, .step2, .step3 , .step4 {
        width: 282.07px;
        height: 264.5px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        padding: 30px 60px;
        color: rgb(41, 0, 122);
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        :after {
            
        }
       }
    }


    .mid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 100px;

        .text-wrapper {
            z-index: 2;
            font-size: 26px;
            font-style: normal;
            font-weight: bold;
            line-height: 32px;
            margin-bottom: 50px;

            :after {
                width: 104px;
                height: 23px;
                content: "";
                margin-top: -26px;
                margin-left: -40px;
                position: absolute;
                background: url(${selection});
                background-repeat: no-repeat;
            }
        }

    }

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .benefit {
            width: 100%;
            display: flex;
            justify-content: space-around;

            .benefit-item {
                width: 200px;
                .text {
                    color: rgb(41, 0, 122);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 27px;
                    margin-top: 18px;
                }

                .icon-rocket {
                    width: 58px;
                    height: 58px;
                    background: rgb(136, 85, 241);
                    border-radius: 10px;
                    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px, rgb(255 255 255 / 30%) 8px 8px 20px inset;
                    
                    :after {
                        width: 24.75px;
                        height: 24.81px;
                        content: "";
                        margin-left: 17px;
                        margin-top: 16px;
                        background-image: url(${iconrocket});
                        position: absolute;
                    }

                }

                .icon-chart {
                    width: 58px;
                    height: 58px;
                    background: rgb(252, 194, 4);
                    border-radius: 10px;
                    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px, rgb(255 255 255 / 30%) 8px 8px 20px inset;

                  :after {
                        width: 21.75px;
                        height: 22.81px;
                        content: "";
                        margin-left: 17px;
                        margin-top: 16px;
                        background-image: url(${iconchart});
                        position: absolute;
                    }
                }

                .icon-idea {
                    width: 58px;
                    height: 58px;
                    background: rgb(2, 212, 228);
                    border-radius: 10px;
                    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px, rgb(255 255 255 / 30%) 8px 8px 20px inset;

                    :after {
                        width: 28.75px;
                        height: 30.81px;
                        content: "";
                        margin-left: 15px;
                        margin-top: 13px;
                        background-image: url(${iconidea});
                        position: absolute;
                    }
                }

               .icon-smile {
                    width: 58px;
                    height: 58px;
                    border-radius: 10px;
                    background-color: rgb(252, 63, 130);
                    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px, rgb(255 255 255 / 30%) 8px 8px 20px inset;

                    :after {
                        width: 23.75px;
                        height: 23.81px;
                        content: "";
                        margin-left: 18px;
                        margin-top: 18px;
                        background-image: url(${iconsmile});
                        position: absolute;
                    }
                }
            }
            
        }
 

        .text-wrapper {
            z-index: 2;
            font-style: normal;
            font-weight: bold;
            font-size: 26px;
            line-height: 32px;
            margin-bottom: 50px;
        
            :after {
                width: 104px;
                height: 30px;
                content: "";
                margin-top: -26px;
                margin-left: -45px;
                position: absolute;
                background-image: url(${whycody});
                background-repeat: no-repeat;
                
            }
            
        }
    }

}


.careers {
  
    @media(max-width:991px) {
        padding-top: 40px;
    }

    padding-bottom: 120px;
    background-color: rgb(241, 243, 255);
    
    .slide-section {
        display: flex;
    align-self: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

        .careers-swiper {
            flex: 1 1 0%;
    max-width: 100vw;
    box-shadow: rgb(0 0 0 / 5%) 0px 2px 16px;
        }

    .industry-menus {
        flex: 0 0 300px;
    min-height: 500px;
    margin-right: 40px;

    @media(max-width:991px) {
        margin: 0px auto;
        min-height: unset;
    }

    .buttons {
        @media(max-width:991px) {
            display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-right: 0px;
        }

        button {
            @media(max-width:991px) {
                width: unset;
                text-align: center;
                margin-bottom: 0;
                padding-bottom:0;
                padding-top:0;
                padding-right:20px;
            }

            span.icon {
                @media(max-width:991px) {
                    margin-right:0;
                }
            }
        }

     button:not(.active) {
         @media(max-width:991px) {
            display: none;
         }
      
        }

    }

    }

    @media(max-width:991px) {
        display: block;
    }
    }
}






.gridgallery .no-gutters {
    .gallery-img1 {
        background-image:url(${pic1});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }

    .gallery-img2 {
        background-image:url(${pic2});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }
    .gallery-img3 {
        background-image:url(${pic3});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }
    .gallery-img4 {
        background-image:url(${pic4});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }
    .gallery-img5 {
        background-image:url(${pic5});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }
    .gallery-img6 {
        background-image:url(${pic6});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }
    .gallery-img7 {
        background-image:url(${pic7});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }
    .gallery-img8 {
        background-image:url(${pic8});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }
    .gallery-img9 {
        background-image:url(${pic9});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }
    .gallery-img10 {
        background-image:url(${pic10});
        width: 100%;
        cursor: pointer;
        padding: 50% 0px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
        margin-right:0;
        background-size: 100%;
        background-position: center top;
        transition: all 200ms ease-in-out 0s;
    }


    
} 
.no-gutters>.col, .no-gutters>[class*=col-] {
    padding-right: 0;
    padding-left: 0;
}

.row {
    display: flex;
    flex-wrap: wrap;
    
}

.no-gutters {
    margin-right: 0;
    margin-left: 0;
}



`;


const Images = [

    {image: img1, id: 1,}, {image: img2, id: 2,}, {image: img3, id: 3,}, {image: img4, id: 4,},];


const Icons = [
    {id: 1, icon: onecareer, title: 'UI Дизайнер' ,}, {id: 2, icon: twocareer, title: 'Мобайл апп хөгжүүлэгч',}, {
        id: 3,
        icon: threecareer,
        title: 'Front-End хөгжүүлэгч',
    }, {id: 4, icon: fourcareer, title: 'Back-End хөгжүүлэгч'}
];

function CareerBody() {
    const [index, setIndex] = React.useState(0);
    const [swiper, setSwiper] = React.useState(null);
    
  
return (
<ContainerComp>
    <div className="careerBody">
<div className="background">
<div className="container">
    <div className="main">
        <div className="top">
            <div className="text-wrapper"><span>
            Яагаад Коди гэж?
                </span></div>
            <div className="benefit">
                <div className="benefit-item">
                    <div className="icon-rocket"></div>
                    <div className="text">Чадварлаг залуу хамт олон</div>
                </div>
                <div className="benefit-item">
                    <div className="icon-chart"></div>
                    <div className="text">Хөгжиж суралцах боломж</div>
                </div>
                <div className="benefit-item">
                    <div className="icon-idea"></div>
                <div className="text">Технологийн ухаалаг шийдэл</div>
                </div>
                <div className="benefit-item">
                    <div className="icon-smile"></div>
                <div className="text">Байгууллагын соёл</div>
                </div>
            </div>
        </div>
        <div className="mid">
            <div className="text-wrapper">
                <span>
                Сонгон шалгаруулалтын үе шат
                </span>
            </div>
            <div className="steps">
                <div className="step1">
                Анкетын сонгон шалгаруулалт
                </div>
                <div className="step2">
                Ярилцлага
                </div>
                <div className="step3">
                Нэмэлт сонгон шалгаруулалт
                </div>
                <div className="step4">
                Ажилд авах шийдвэр
                </div>
            </div>
        </div>
        <div className="bottom">
        
            <div className="text-wrapper">
            <span>Нээлттэй ажлын байр</span>
                </div>
                <div className="careers">
         
                <div className="container">
                    <div className="slide-section">
                        <div className="slide industry-menus">
                   <div className="buttons">
                                    {Icons.map((item, i) => {
                                        const isCurrent = swiper ? swiper.realIndex ===i:false;
                                        return( 
                                            <button
                                                className={` ${index === i ? 'active' : ''}`}
                                                onClick={() => swiper ? swiper.slideTo(i+1) : false}>
                                                <   span className="icon"><img src={index === i ? item.icon : item.icon}
                                                                            alt=""/></span>
                                                <span className="text">{item.title}</span>
                                            </button>

                                        )
                                    })}
                                    </div>
                        
                        </div>
                        <div className="slide1 careers-swiper">
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
            <SwiperSlide><img className="image-slide" src={c.image}
        alt="careers-slide"/>
            </SwiperSlide>
    )
    })}
</Swiper>

    </div>
    </div>
                        </div>
                    </div>
           
                </div>  
  
        </div>



    </div>
    
</div>

</div>

<div className="footer">
        <div className="container">
            <div className="text-wrapper">
    <span>Хамт олон</span>
            </div>
            <div className="pic">
                <section>

                    <div className="container">
                        <div className="dynamic-Gallery">
                            <div className="gridgallery">
                                <div className="no-gutters row">
                                <div className="col-lg-1-5 col-6 col-sm- col-md-3">
                                <button type="button" className="gallery-img1">

                                </button>

                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                                <button type="button" className="gallery-img2">

</button>

                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                        
                                <button type="button" className="gallery-img3">

</button>
                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                         
                                <button type="button" className="gallery-img4">

</button>
                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                                <button type="button" className="gallery-img5">

</button>

                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                                <button type="button" className="gallery-img6">

                                </button>

                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                                <button type="button" className="gallery-img7">

</button>

                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                        
                                <button type="button" className="gallery-img8">

</button>
                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                         
                                <button type="button" className="gallery-img9">

</button>
                                </div>
                                <div className="col-lg-1-5 col-6 col-sm-4 col-md-3">
                         
                         <button type="button" className="gallery-img10">

</button>
                         </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </div>
        </div>
</ContainerComp>

)

}

export default CareerBody;