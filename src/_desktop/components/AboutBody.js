import React  from "react";
import styled from "styled-components";
import about from "../image/about.svg";
import statistic from "../image/statistic.svg";
import aboutwrapper from "../image/aboutwrapper.svg";
import managementteam from "../image/managementteam.svg";
import ceo from "../image/ceo.svg"
import cto from "../image/cto.svg"
import vpt from "../image/vpt.svg"
import missionbackground from "../image/missionbackground.svg"
import ourmission from "../image/ourmission.svg"
import services from "../image/services.svg"
import timeline from "../image/timeline.svg"
import joinourteam from "../image/joinourteam.svg"
import picture1 from "../image/picture1.png"
import picture2 from "../image/picture2.png"
import picture3 from "../image/picture3.png"
import picture4 from "../image/picture4.png"
import picture5 from "../image/picture5.png"
import picture6 from "../image/picture6.png"
import picture7 from "../image/picture7.png"
import picture8 from "../image/picture8.png"
import lineitem1 from "../image/lineitem1.svg"
import lineitem2 from "../image/lineitem2.svg"
import lineitem3 from "../image/lineitem3.svg"
import lineitem4 from "../image/lineitem4.svg"
import lineitem5 from "../image/lineitem5.svg"
import imageitem from "../image/imageitem.png"
import image from "../image/image.svg"
import {useMediaQuery} from "react-responsive";
import {DeviceSize} from "../components/responsive/index";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContainerComp = styled.div`


.aboutWrapper-responsive {
margin-bottom:-51px;
}

.responsive-statistic {
    .section-wrapper {
        background: linear-gradient(-91.81deg, rgb(142, 45, 226) 0%, rgb(142, 45, 226) 0%, rgb(77, 2, 224) 105.82%, rgb(76, 2, 224) 105.83%, rgba(75, 1, 224, 0.043) 105.84%, rgba(74, 0, 224, 0) 105.85%, rgb(74, 0, 224) 105.85%, rgb(77, 2, 224) 105.85%) left center;
    border-radius: 10px;
    width: 100%;
    position: relative;
    z-index: 4;

    @media (max-width: 550px) {
        border-radius:0;
    }
    }

    h1 {
        color:white;
    }
}


.section-1 {
 
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
    width: 83px;
    height: 35px;
    content: "";
    display: block;
    background-image: url(${about});
    background-size: contain;
    background-position: right bottom;
    align-self: flex-end;
    margin-bottom: -4px;
    margin-right: -39px;
    background-repeat: no-repeat;
    }
}

.section-2 {

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
    margin-right: -39px;
        content: "";
    display: block;
    background-image: url(${statistic});
    background-size: contain;
    background-position: right bottom;
    align-self: flex-end;
    margin-bottom: -4px;

    background-repeat: no-repeat;

    
    }
}

.section-3 {
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
        content: "";
    display: block;
    background-image: url(${managementteam});
    background-size: contain;
    background-position: right bottom;
    align-self: flex-end;
    margin-bottom: -4px;
    margin-right: -39px;
    background-repeat: no-repeat;
    }
}

.section-4 {
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

    @media only screen and (max-width: 750px) {
        width: 100%;
    text-align: center;
    margin: 0px auto 30px;
    text-transform: uppercase;
    }

    @media only screen and (max-width: 550px) {
        width: 100%;
    text-align: center;
    margin: 0px auto 30px;
    text-transform: uppercase;
    }

    

    :before {
        content: "";
    display: block;
    background-image: url(${ourmission});
    background-size: contain;
    background-position: right bottom;
    align-self: flex-end;
    margin-bottom: -4px;
    margin-right: -39px;
    background-repeat: no-repeat;

    @media only screen and (max-width: 750px) {
        margin-bottom: 5px;
        background-size: 80px;
        opacity: 0.6;
    }

    @media only screen and (max-width: 550px) {
        margin-bottom: 5px;
        background-size: 80px;
        opacity: 0.6;
        margin-right: 40px !important;
    }

    }
}

.section-5 {
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
        content: "";
    display: block;
    background-image: url(${services});
    background-size: contain;
    background-position: right bottom;
    align-self: flex-end;
    margin-bottom: -4px;
    margin-right: -39px;
    background-repeat: no-repeat;
    }
}


.section-6 {
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
        content: "";
    display: block;
    background-image: url(${timeline});
    background-size: contain;
    background-position: right bottom;
    align-self: flex-end;
    margin-bottom: -4px;
    margin-right: -39px;
    background-repeat: no-repeat;
    }
}


.section-7 {
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
        content: "";
    display: block;
    background-image: url(${joinourteam});
    background-size: contain;
    background-position: right bottom;
    align-self: flex-end;
    margin-bottom: -4px;
    margin-right: -39px;
    background-repeat: no-repeat;
    }
}


.AboutWrapper {
    
    /**isMobile**/
    .title-section {
        display: flex;
        justify-content: flex-end;

        @media (max-width:900px) {
            display: flex;
    flex-direction: column;
    max-width: 100% !important;
        }

        .description {
            width: 100%;
    position: relative;
    z-index: 1;
    text-align: justify;
        }

        .col-md-5 {
            @media (min-width: 768px) {
                flex: 0 0 41.666667%;
                max-width: 41.666667%;
            }
        }
    }

    position: relative;
    z-index: 3;
    margin-bottom: 50px;
    width: 100%;

    .titleSection {
        margin-top: 50px;
        left: 45%;
        width: 40%;
        position: relative;
        z-index: 1;

        h1 {
            font-size: 26px;    
            :before {
                width: 83px;
                height: 35px;
            }
        }

        .description {
            text-align: justify;
            font-size: 20px;
            line-height: 25px;
            text-shadow: rgb(255 255 255) 0px 0px 10px;

            @media (max-width: 1250px) {
                font-size: 16px;
                line-height: 22px;
            }

            @media (max-width: 1150px) {
                font-size: 14px;
                line-height: 20px;
            }
        }


      }
    
      :after {
        display: block;
        content: "";
        background: url(${aboutwrapper}) center top / cover no-repeat;
        position: relative;
        width: 100%;
        z-index: 0;
        left: 0px;
        top: -300px;
        height: 1800px;

        @media (max-width:992px) {
            display:none;
        }

      }
      
    }

    .statistic .section-wrapper {
        width: 100%;
        position: relative;
        z-index: 4;
        margin-top: -1500px;

        .section-title-wrapper h1 {
            font-size: 30px;
            color: white;
            :before {
                width: 100px;
    height: 40px;
    margin-right: -70px;
            }
        }
    }

    

    .status-wrapper {
        width: 100%;
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        gap: 0px 80px;
        padding-bottom: 100px;


        @media (max-width:992px) {
          padding-bottom:0;
         }

        .statistic-wrapper {
            padding: 20px 0px 0px;

            .title {
                color: rgb(255, 255, 255);
    text-align: end;
    font-size: 16px;
    line-height: 34px;
    font-weight: 400;

        @media (max-width:1250px) {
            font-size: 14px;
    line-height: 28px;
        }

      
            }

            .numbers {
                color: rgb(255, 255, 255);
                margin-top: -20px;
                font-weight: bold;
                font-size: 70px;
                line-height: 80px;
                display: flex;

                @media (max-width:1250px) {
                    font-size: 60px;
                    line-height: 50px;
                }

                @media (max-width:992px) {
                   font-weight:unset;
                }
            }

            .para {
                color: rgba(255, 255, 255, 0.698);
                text-align: left;
                font-size: 22px;
                line-height: 34px;

                @media (max-width:1250px) {
                    font-size: 20px;
                    line-height: 28px;
                }

                @media (max-width:992px) {
                    color: rgb(255, 255, 255);
                    margin-bottom: 0;
                 }
            }
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .col-md-5 {
        
    }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
    
  .ManagementWrapper {
    background-color: white;
    position: relative;
    z-index: 8;
    padding-top: 50px;

    h1 {
        font-size: 26px;

        :before {
            width: 174px;
            height: 25px;
        }
    }

     .mTeams {
        width: 100%;
        display: grid;
        gap: 30px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        max-width: 100% !important;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
            padding: 0px 10px;
        }

        .teamsDetails {
                text-align: center;

                .industry-icon {
                    width: 100%;
                    transition: all 0.2s ease-in-out 0s;

                    @media (max-width: 900px) {
                        width: 50%;
                    }

                    @media (max-width: 500px) {
                        width: 100%;
                         height: 156px;
                    }
                }

                .detailsNames {
                    padding: 20px;

                    h4 {
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 24px;
                    }

                    p {
                        font-size: 12px;
                        line-height: 24px;
                    }
                }
               
        }
     }
  }
  
  .container {
    max-width: 100%; 
    padding-right:35px; 
    padding-left: 35px; 
    margin-right: auto; 
    margin-left: auto;
  }

  @keyframes center-animate
  {
    0% 
    {
      width: 0;
    }
    100%
    {
      width: 100%;
    }
  } 


.MissionWrapper {
    background: url(${missionbackground}) center center / contain no-repeat;
    text-align: center;
    height: 700px;
    margin: 50px;

    @media (max-width: 550px) {
        margin: unset;
    height: unset;
    }

    h2 {
        text-align: center;
    margin: 100px;
    font-weight: 600;
    font-size: 46px;
    line-height: 80px;

    @media (max-width: 900px) {
        font-size: 20px;
    line-height: 40px;
    }

    @media (max-width: 550px) {
        margin: 100px 0px;
    }

    span {
        color: rgb(255, 255, 255);
        position: relative;
        z-index: 1;
        margin-left: 10px;
        margin-right: 18px;
        :after {
            content: "";
    display: inline;
    left: -10px;
    position: absolute;
    background-color: rgb(136, 85, 241);
    height: 80px;
    z-index: -1;
    width: 300px;
    animation: 1s ease-in-out 0s 1 normal none running center-animate;
        }
    }

    }

    h1 {
        font-size: 26px;
        
        :before {
            width: 96px;
            height: 35px;
            margin-right: -50px;
        }
    }
}

.services-wrapper {
    h1 {
        font-size: 26px;
        :before {
            width: 80px;
        height: 35px;
        margin-right: -25px;
        }
   }
    
   .services-list {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    max-width: 100% !important;

    @media (max-width: 1200px) {
        grid-template-columns: 25% 25% 25% 25%;
    }

    @media (max-width: 1100px) {
        grid-template-columns: 33.3% 33.3% 33.3%;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 50% 50%;
    }
   }

}


.TimelineWrapper {

    @media (max-width: 992px) {
        display:none;
    }

    .titleSection {
        margin-top: 100px;
        
        h1 {
            font-size: 26px; 

            :before {
                width: 72px;
    height: 35px;
    margin-right: -15px;
            }
        }
    }
}

.timeline-container {
    margin-top: 150px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    position: relative;

    hr {
        position: absolute;
    left: 0px;
    right: 0px;
    bottom: 17px;
    
    }
}

.timeline {

    :nth-child(2n) h2 {
        top:-80px;
    }

    :nth-child(2n) p {
        bottom:-50px;
    }

    :nth-child(2n+1) h2 {
        bottom: -50px;
    }

    :nth-child(2n+1) p {
        top: -100px;
    }


    margin-top: 50px;
    flex: 1 1 0%;

    .LineItem {
        position: relative;

        .date-title {

            h2 {
                font-weight: 600;
                font-size: 32px;
                line-height: 40px;
                position: absolute;
                left: 90px;
            }

            p {
                font-size: 14px;
    line-height: 17px;
    position: absolute;
            }
           
        }
    }
}

.picture {
  

    .titleSection {
        margin-top: 100px;

        h1 {
            font-size: 26px;
        
            :before {
                width: 127px;
                height: 35px;
                margin-right: -110px;   
            }
        }

    }

    .image-item {
        width: 100%;
    }

}

`;

const Service1 = styled.div `



.service {
    position: relative;

    :before {
        z-index: 1;
        content: "0";
        position: absolute;
        font-weight: bold;
        font-size: 80px;
        line-height: 124px;
        left: 21px;
        top: -70px;
       color: ${(props) => props.color};
       font-family: "Averta CY", Roboto, sans-serif;
    }

    h3 {
        position: relative;
        background-color: white;
        z-index: 3;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        text-align: center;
        margin: 50px;
        height: 150px;
        width: 200px;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 8%) 0px 8px 20px;
        font-size: 18px;
        font-weight: bold;
        line-height: 25px;
    }

  
}

`;

const Service2 = styled.div `

.services-number {
    z-index: 3;
    font-weight: bold;
    font-size: 80px;
    position: absolute;
    left: 25px;
    top: -20px;
    color:  ${(props) => props.color};
    font-family: "Averta CY", Roboto, sans-serif;
    
}
`    
;

const Statistic = [
    {id: 1, title: 'ECOMMERCE WEBSITE', numbers: '+100', para: 'Хэрэглэгч байгууллага (цахим худалдааны сайт)'},{id: 2, title: 'USERS', numbers: '1400000', para: 'Хэрэглэгчид'}, 
    {id: 3, title: 'PARTNERS', numbers: '+1500', para: 'Харилцагчид'},{id: 4, title: "FEATURES", numbers: '+200', para: 'Худалдааны боломж'}, 
    {id: 5, title: "PRODUCTS" ,numbers: '+600000', para: 'Бүтээгдэхүүн'},{id: 6, title: "BRANDS", numbers: '+2700', para: 'Брендүүд'}
];

const ManagementTeam = [
{id: 1, picture: picture1, name:'ZOLJARGAL. A', description: 'Chief Executive Officer', logo: ceo}, 
{id: 2, picture: picture2, name:'GUNDSAMBUU. N', description: 'Vice President, Technology', logo: vpt}, 
{id: 3, picture: picture3, name:'MUNKHDALAI. S', description: 'Chief Technology Officer', logo: cto}, 
{id: 4, picture: picture4, name:'DELGERMURUN. B', description: 'Head of Business Development Division', logo: ''}, 
{id: 5, picture: picture5, name:'TURBOLD. A', description: 'Head of Front-End Development Division', logo: ''}, 
{id: 6, picture: picture6, name:'ERBOLD. D', description: 'Head of Process Development Division', logo: ''}, 
{id: 7, picture: picture7, name:'NYAM-OCHIR. Ts', description: 'Senior Software Engineer', logo: ''}, 
{id: 8, picture: picture8, name:'USUKHBAYAR. G', description: 'Head of Data and Listing Division', logo: ''}, 
];

const Services = [
    {
        id:1, number:'1.', color1: 'rgba(136, 85, 241, 0.4)', color2:'rgb(136, 85, 241)', description:'Агуулахын цогц шийдэл'
},    {
    id:2, number:'2.', color1: 'rgba(2, 212, 228, 0.4)', color2:'rgb(2, 212, 228)', description:'Цахим худалдааны платформ'
},    {
    id:3, number:'3.', color1: 'rgba(252, 194, 4, 0.4)', color2:'rgb(252, 194, 4)', description:'Медиа платформ'
},    {
    id:4, number:'4.', color1: 'rgba(252, 63, 130, 0.4)', color2:'rgb(252, 63, 130)', description:'SEO шийдэл'
},    {
    id:5, number:'5.', color1: 'rgba(136, 85, 241, 0.4)', color2:'rgb(136, 85, 241)', description:'Крипто интеграци'
},    {
    id:6, number:'6.', color1: 'rgba(252, 194, 4, 0.4)', color2:'rgb(252, 194, 4)', description:'Дэлхийн системүүдийн холболт'
},    {
    id:7, number:'7.', color1: 'rgba(252, 63, 130, 0.4)', color2:'rgb(252, 63, 130)', description:'In App шийдэл'
},    {
    id:8, number:'8.', color1: 'rgba(136, 85, 241, 0.4)', color2:'rgb(136, 85, 241)', description:'Дэлгүүрийн ухаалаг систем'
},    {
    id:9, number:'9.', color1: 'rgba(2, 212, 228, 0.4)', color2:'rgb(2, 212, 228)', description:'Цахим хэтэвч'
},    {
    id:10, number:'10.', color1: 'rgba(252, 194, 4, 0.4)', color2:'rgb(252, 194, 4)', description:'Хиймэл оюун ухаан хөгжүүлэлт'
},
];

function AboutBody() {

    
 
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile});
    return (
        <ContainerComp>
     <div>
         {!isMobile &&
         <div>
             <div className="AboutWrapper">
                 <div className="titleSection">
                     <h1 className="section-1 section-title">
                     Бидний тухай
                     </h1>
                    
                     <p className="description">
                     Коди ХХК нь худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл 
                     оюун ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй цогц платформыг
                      хөгжүүлж зах зээлд амжилттай нэвтрүүлэн ажиллаж байна. Өнөөдрийн 
                      байдлаар Коди нь дотоодын 100 гаруй томоохон компаниудад 
                      платформ түрээсийн үйлчилгээгээ үзүүлж, нийт 1 сая давсан
                       хэрэглэгчдэд хүрч, дотоодын томоохон 15 орчим банк болон финтек
                        төслүүдэд системийн дэмжлэг үзүүлж, нийт 1,000 гаруй компанид
                         ямар нэгэн байдлаар шийдлээ түгээж, 20 гаруй салбарыг цахимжуулан
                          ажиллаж байна.
                     </p>
                 </div>
             </div>
         </div>
        }
        {isMobile &&
        <div>
              <div className="aboutWrapper-responsive">
                   <h1 className="section-1 section-title">
                      Бидний тухай
                      </h1>
              <div className="AboutWrapper">
                  <div className="title-section">
                     <img className="image" src={image}/>
                     
                      <p className="description col-md-5">
                      Коди ХХК нь худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл 
                      оюун ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй цогц платформыг
                       хөгжүүлж зах зээлд амжилттай нэвтрүүлэн ажиллаж байна. Өнөөдрийн 
                       байдлаар Коди нь дотоодын 100 гаруй томоохон компаниудад 
                       платформ түрээсийн үйлчилгээгээ үзүүлж, нийт 1 сая давсан
                        хэрэглэгчдэд хүрч, дотоодын томоохон 15 орчим банк болон финтек
                         төслүүдэд системийн дэмжлэг үзүүлж, нийт 1,000 гаруй компанид
                          ямар нэгэн байдлаар шийдлээ түгээж, 20 гаруй салбарыг цахимжуулан
                           ажиллаж байна.
                      </p>
                  </div>
              </div>
          </div>   
            <div className="responsive-statistic">
            <span></span>
            <div className="section-wrapper">
                <div className="section-title-wrapper">
               <h1 className="section-2 section-title">
               Статистик
               </h1>
                </div>
                <div className="container">
                <div className="status-wrapper row">
                {Statistic.map((item) => {
    
                    return (
                      <div className="statistic-wrapper col-md-5">
                          <hr/>
                          <h3 className="title">{item.title}</h3>
                          <p className="numbers">{item.numbers}</p>
                          <p className="para">{item.para}</p>
                      </div>
                          )
                             })}
                     </div>   
              </div>
            </div>
        </div>
      </div>
        }
    
        {!isMobile &&
        
        <div className="statistic">
        <span></span>
        <div className="section-wrapper">
            <div className="section-title-wrapper">
           <h1 className="section-2 section-title">
           Статистик
           </h1>
            </div>
            <div className="container">
            <div className="status-wrapper row">
            {Statistic.map((item) => {

                return (
                  <div className="statistic-wrapper col-md-5">
                      <hr/>
                      <h3 className="title">{item.title}</h3>
                      <p className="numbers">{item.numbers}</p>
                      <p className="para">{item.para}</p>
                  </div>
                      )
                         })}
</div>
         
</div>
        </div>
    </div>
        }
       

         <div>
             <div className="ManagementWrapper">
                 <h1 className="section-3 section-title">
                 Удирдлагын баг
                 </h1>
                 <div className="container">
                     <div className="mTeams">
                         {ManagementTeam.map((item) => {
                          return (
                                    <div className="teamsDetails">
                                    <img className="industry-icon" src={item.picture}/>
                                    <div className="detailsNames">
                                        <h4>
                                      {item.name}
                                        </h4>
                                        <p>
                                        {item.description}
                                        </p>
                                        <img src={item.logo}/>
                                    </div>
                                </div>
                                )
                         })}
                     </div>
                 </div>
             </div>
             <div className="MissionWrapper">
                 <h1 className="section-4 section-title">
                 Бидний зорилго
                 </h1>
                 <h2>
                 Дэвшилтэд шийдэл, 
                 <span>
                 технологиор          
                   </span>
                   дамжуулан мянга мянган бизнест боломжийг нээж өгнө.
                 </h2>
             </div>
         </div>

         <div className="container">

            <div>
            <div className="services-wrapper">
                <h1 className="section-5 section-title">
                Үйлчилгээний төрөл
                </h1>
                <div className="services-list">

               {Services.map((item) => {
                   return (
                       <Service1 color={item.color1}>
                             <Service2 color={item.color2}>  
                    <div className="service">
                    <h3>
                       
                        <div className="services-number">
                    
                         {item.number}
                        </div>
                            {item.description}
                    </h3>
                </div>
                </Service2>
                </Service1>
                   )
               })}
             

                </div>
            </div>
            </div>

            <div>
            <div className="TimelineWrapper">
            <div className="titleSection">
            <h1 className="section-6 section-title">
            Онцлох үйл явдлууд
            </h1>
            </div>
            <div className="timeline-container">
                <hr/>
                <div className="timeline">
                    <div className="LineItem">
                        <div className="date-title">
                            <h2>2019</h2>
                            <img src={lineitem1}/>
                            <p>Коди ХХК үүсгэн байгуулагдаж бизнесүүдийг цахимжуулж эхэлсэн.</p>
                        </div>
                    </div>
                </div>

                <div className="timeline">
                    <div className="LineItem">
                        <div className="date-title">
                            <h2>2019</h2>
                            <img src={lineitem2}/>
                            <p>Аялал, сургалт, эрүүл мэнд зэрэг бусад үйлчилгээний салбарын 
                                бүтээгдэхүүнүүдийг цахимаар борлуулж эхэлсэн.</p>
                        </div>
                    </div>
                </div>

                <div className="timeline">
                    <div className="LineItem">
                        <div className="date-title">
                            <h2>2020</h2>
                            <img src={lineitem3}/>
                            <p>Онлайн лизингийн үйлчилгээний 2.0 хувилбарыг нэвтрүүлсэн.</p>
                        </div>
                    </div>
                </div>

                <div className="timeline">
                    <div className="LineItem">
                        <div className="date-title">
                            <h2>2021</h2>
                            <img src={lineitem4}/>
                            <p>Худалдаа хөгжлийн банктай хамтран ногоон зээлийн үйлчилгээг нэвтрүүлсэн.</p>
                        </div>
                    </div>
                </div>

                <div className="timeline">
                    <div className="LineItem">
                        <div className="date-title">
                            <h2>2021</h2>
                            <img src={lineitem5}/>
                            <p>Финтек компаниудтай хамтран After Pay үйлчилгээ нэвтрүүлсэн</p>
                        </div>
                    </div>
                </div>

  
            </div>
            </div>
            </div>

            <div className="picture">
            <div className="titleSection">
                <h1 className="section-7 section-title">
                Хамт олон
                </h1>
            </div>
            <img className="image-item" src={imageitem}/>
            </div>

         </div>
     </div>
          

        </ContainerComp>
    )

}


export default AboutBody;