import React, {useRef} from "react"
import styled from "styled-components";
import email from "../image/email.svg"
import background1 from "../image/background1.svg"
import background2 from "../image/background2.png"
import background3 from "../image/background3.svg"
import instagram from "../image/instagram.svg"
import facebook from "../image/facebook.svg"
import Career from "../components/Career"
import Webinar from "../components/Webinar"
import {
    Routes,
    Route,
    Link, BrowserRouter
} from "react-router-dom";


const ContainerStyle = styled.div`
  #footer {
    font-family: "Averta CY";
    background-color: rgb(250, 252, 255);
    box-shadow: none;
    padding-top: 120px;

    .subscription {
      width: 800px;
      margin: 0 auto;
      padding: 20px 50px;
      background-color: rgb(250, 252, 255);
      transform: translate(-50%, -50%);
      box-shadow: rgb(0 0 0 / 20%) 0px 12px 28px;
      position: absolute;
      left: 50%;

      :before {
        width: 0px;
        height: 0px;
        content: "";
        border-style: solid;
        border-width: 0px 0px 64px 64px;
        background-size: 22px;
        background-position: center center;
        border-color: transparent transparent rgb(238, 238, 238);
        position: absolute;
        left: -64px;
        top: 0;
      }

      h4 {
        font-weight: 700;
        margin-bottom: 15px;
        font-size: 1.5rem;
        line-height: 1.2;
      }

      .form-control {
        height: 50px;
        font-size: 16px;
        padding-left: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border-radius: 0.25rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        
      
      }
      
    

      button {
        height: 40px;
        border-radius: 3px;
        background: rgb(136, 85, 241);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 0px 30px;
        position: absolute;
        right: 55px;
        top: 69px;
        border: none;
        :hover {
        }
        :before {
          width: 23px;
          height: 20px;
          content: "";
          background-image: url(${email});
          background-size: 22px;
          background-position: center center;
          background-repeat: no-repeat;

      
        }
        :hover:before {
          transform: scale(1.2);
          transition: all 0.2s ease 0s;
        }
      }

      :after {
        width: 0px;
        height: 0px;
        content: "";
        border-style: solid;
        border-width: 64px 0px 0px 64px;
        border-color: transparent transparent transparent rgb(238, 238, 238);
        background-size: 22px;
        background-position: center center;
        position: absolute;
        right: -64px;
        top: 0px;
      }
    }

    .footer-menu {
      max-width: 100%;
      border-top: unset;
      background: url(${background1}) right bottom no-repeat, url(${background2}) left bottom no-repeat, linear-gradient(93.32deg, rgb(142, 45, 226) 0%, rgb(142, 45, 226) 12.62%, rgb(77, 2, 224) 88.36%, rgb(76, 2, 224) 100.96%, rgba(75, 1, 224, 0.043) 100.97%, rgba(74, 0, 224, 0) 100.98%, rgb(74, 0, 224) 100.98%, rgb(77, 2, 224) 100.98%);
      padding: 120px 40px 30px;

      hr {
        background-color: rgba(255, 255, 255, 0.5);
      }

      @media (min-width: 992px) {
        .container {

          max-width: 100%;
          padding-left: 8px;
          padding-right: 8px;


          .icons-menu {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            margin-top: 20px;
            padding-right: 142px !important;

            .icon.icon-instagram {
              background-image: url("${instagram}");


            }

            .icon.icon-facebook {
              background-image: url("${facebook}");
            }

            .icon {
              width: 17px;
              height: 17px;
              display: block;
              background-size: contain;
              margin-right: 10px;
              background-position: center center;
            }
          }


          .menu-elements {
            margin-left: 0;
            display: flex;
            justify-content: space-between;

            .footer-col {
              flex-shrink: 1;

              h4 {
                margin-bottom: 20px;
                font-size: 15px;
                font-weight: 700;
                color: rgb(255, 255, 255);
                text-transform: unset;
              }

              ul, ul.icons-menu {
                list-style: none;
                padding: 0px;

                li {
                  padding: 0px;
                  margin: 10px 0px;
                  font-size: 14px;
                  font-weight: 500;
                  line-height: 16px;

                  span, a {
                    font-weight: 400;
                    font-size: 13px;
                    color: rgb(255, 255, 255);
                    outline: none;
                    text-decoration: none;: hover {
                    color: rgb(231, 231, 231);
                  }
                  }
                }
              }
            }
          }

          .menu-elements-partner {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(201px, 1fr));
            margin-top: 40px;
            
            a {
              color: rgb(255, 255, 255);
              font-size: 14px;
              margin-bottom: 0px;
              outline: none;
              text-decoration: none;
            }
            
            p {
              color: rgb(255, 255, 255);
              opacity: 0.7;
              font-size: 12px;
              margin-bottom: 20px;
            }
          }
          
          .copyright-section {
            color: rgb(255, 255, 255);
            margin-top: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .cody {
              width: 100px;
              margin-right: 80px;
      
              
            }
          }
          

        }
      }

    }


  }

}





`;

function Footer() {


    return (

        <ContainerStyle>
            <div id="footer">
                <div className="subscription">
                    <h4>
                        Биднийг дагаарай
                    </h4>
                    <form className="">
                        <input name="email" placeholder="Таны имэйл" type="text"
                               className="email-input form-control" value=""/>
                        <button type="submit" aria-label="mail"></button>
                    </form>
                    <div className="socials"></div>

                </div>
                <div className="footer-menu">
                    <div className="container">
                        <div className="menu-elements">
                            <div className="footer-col">
                                <h4> КОДИ ПЛАТФОРМ </h4>
                                <ul>
                                    <li>
                                        <a href="">Платформын тухай</a>
                                    </li>
                                    <li>
                                        <a href="">Шийдэл</a>
                                    </li>
                                    <li>
                                        <a href="">Онцлог, боломжууд</a>
                                    </li>
                                    <li>
                                        <a href="">Бизнесийн төрөл</a>
                                    </li>
                                    <li>
                                        <a href="">Харилцагчид</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="footer-col">
                                <h4>БИДНИЙ ТУХАЙ</h4>
                                <BrowserRouter>
                                    <ul>
                                        <li>
                                            <a href="">Танилцуулга</a>
                                        </li>
                                        <li>
                                            <a href="">Үйлчилгээний төрөл</a>
                                        </li>
                                        <li>
                                            <a href="">Хамтрагч байгууллага</a>
                                        </li>
                                        <li>
                                            <a href="">Холбоо барих</a>
                                        </li>

                                        <li>
                                            <Link to="/career">Ажлын байр</Link>
                                        </li>
                                        <li>
                                            <Link to="/webinar">Вэб үйлчилгээний сургалт</Link>
                                        </li>

                                    </ul>
                                    <Routes>
                                        <Route path="/career" element={<Career/>}/>


                                        <Route path="/webinar" element={<Webinar/>}/>


                                    </Routes>
                                </BrowserRouter>
                            </div>
                            <div className="footer-col">
                                <h4>ХОЛБОО БАРИХ</h4>
                                <ul>
                                    <li>
                                        <a href="">Утас: 7777-8977</a>
                                    </li>
                                    <li>
                                        <a href="">Имэйл: info@cody.mn</a>
                                    </li>
                                    <li>
                                        <a href="https://what3words.com/reforming.punchy.hired" target="_blank"
                                           rel="noopener">Хаяг: Нью Хоризон оффис, 401 тоот, Улаанбаатар хот</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="footer-col">
                                <h4></h4>
                                <ul className="icons-menu">
                                    <li>
                                        <a href="https://www.instagram.com/cody.tech/" target="_blank"
                                           aria-label="instagram"
                                           rel="noopener" style={{"display": "flex"}}>
                                            <div className="icon icon-instagram"></div>
                                            <span>instagram</span>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/codymongolia" target="_blank"
                                           aria-label="facebook"
                                           rel="noopener" style={{"display": "flex"}}>
                                            <div className="icon icon-facebook"></div>
                                            <span>facebook</span>
                                        </a>

                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="menu-elements-partner">
                            <div className="footer-col">
                                <a>Airlink</a>
                                <p>Нислэгийн билет</p>
                            </div>
                            <div className="footer-col">
                                <a>24auto</a>
                                <p>авто сэлбэг</p>
                            </div>
                            <div className="footer-col">
                                <a>Comf</a>
                                <p>хүүхдийн тавилга</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://haus.mn" target="_blank" rel="noopener">Haus</a>
                                <p>барилгын материал</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://ammay.mn/login" target="_blank" rel="noopener">Amway</a>
                                <p>гэр ахуй</p>
                            </div>
                            <div className="footer-col">
                                <a>Zanadu</a>
                                <p>дарс</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://shoppylux.mn" target="_blank" rel="noopener">shoppyLux</a>
                                <p>the luxury you deserve</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://michelamazonka.shoppy.mn/" target="_blank"
                                   rel="noopener">Micheal&Amazonka</a>
                                <p>Фейшн</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://ubpassport.mn/" target="_blank" rel="noopener">UB passport</a>
                                <p>Лайфстайл</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://mild.shoppy.mn" target="_blank" rel="noopener">Mild cosmetics</a>
                                <p>гоо сайхан</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://metro-express.mn" target="_blank" rel="noopener">Metro express</a>
                                <p>гэр ахуй</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://ayanchin.shoppy.mn" target="_blank" rel="noopener">Аянчин</a>
                                <p>аяны хэрэгсэл хувцас</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://cose.mn" target="_blank" rel="noopener">Cose</a>
                                <p>арьс арчилгаа</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://joinme.mn" target="_blank" rel="noopener">JoinMe</a>
                                <p>аялал</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://tavannuden.com" target={"_blank"} rel="noopener">Таван нүдэн</a>
                                <p>үнэт эдлэл</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://carters.mn" target={"_blank"} rel={"noopener"}>Carter's</a>
                                <p>хүүхдийн хувцас</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://smartstore.mn" target={"_blank"} rel={"noopener"}>Smart store</a>
                                <p>электроникс</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://flower.mn" target={"_blank"} rel={"noopener"}>Цэцэгт мэндчилгээ</a>
                                <p>бэлэг дурсгал</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://wellbee.shoppy.mn" target={"_blank"} rel={"noopener"}>Wellbee</a>
                                <p>арчилгаа</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://gerplace.mn" target={"_blank"} rel={"noopener"}>Ger place</a>
                                <p>тавилга</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://babyworld.mn" target={"_blank"} rel={"noopener"}>Baby world</a>
                                <p>хүүхдийн</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://gobikhangaimebel.shoppy.mn" target={"_blank"} rel={"noopener"}>Gobi
                                    khangai</a>
                                <p>тавилга</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://homeshopping.mn" target={"_blank"} rel={"noopener"}>Home shopping</a>
                                <p>гэр ахуй</p>
                            </div>
                            <div className="footer-col">
                                <a target={"_blank"} rel={"noopener"}>Khur</a>
                                <p>арьсан эдлэл</p>
                            </div>
                            <div className="footer-col">
                                <a target={"_blank"} rel={"noopener"}>Sarnai</a>
                                <p>бэлэг дурсгал</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://premiumtaste.mn" target={"_blank"} rel={"noopener"}>Premium taste</a>
                                <p>коньяк, виски, дарс</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://naturerepublic.mn" target={"_blank"} rel={"noopener"}>Nature
                                    republic</a>
                                <p>арьс арчилгаа</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://shoez.shoppy.mn" target={"_blank"} rel={"noopener"}>Shoez</a>
                                <p>гутал</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://tanpopo.shoppy.mn" target={"_blank"} rel={"noopener"}>Tanpopo</a>
                                <p>хүүхдийн</p>
                            </div>
                            <div className="footer-col">
                                <a target={"_blank"} rel={"noopener"}>хүүхдийн</a>
                                <p>дарс</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://inktop.mn" target={"_blank"} rel={"noopener"}>Inktop</a>
                                <p>бичиг хэрэг</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://itstore.mn" target={"_blank"} rel={"noopener"}>itStore</a>
                                <p>электроникс</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://esansar.mn" target={"_blank"} rel={"noopener"}>eSansar</a>
                                <p>хүнс</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://baigalhouse.com" target={"_blank"} rel={"noopener"}>Baigal</a>
                                <p>үнэт эдлэл</p>
                            </div>
                            <div className="footer-col">
                                <a target={"_blank"} rel={"noopener"}>Amar</a>
                                <p>даатгал</p>
                            </div>
                            <div className="footer-col">
                                <a href="https://next.mn" target={"_blank"} rel={"noopener"}>Нэкст электроникс</a>
                                <p>цахилгаан бараа</p>
                            </div>
                        </div>
                        <div className="copyright-section">
                            <div className="left">
                                <p>КОДИ ХХК ©2021 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.</p>
                            </div>
                            <a href="https://cody.mn/" className="right" target="_blank" rel="noopener">
                                <img src={background3} className="cody" alt="cody"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </ContainerStyle>

    );
}

export default Footer