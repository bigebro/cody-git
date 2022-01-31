import React, {useRef, useEffect } from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import {useSpring, animated} from 'react-spring';
import solutions from '../image/Solutions.svg'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 16;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
`;

const ModalWrapper = styled.div`
  padding: 30px 40px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: rgb(246, 246, 246);
  color: #000;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 16;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  border: none;
  width: 1140px;
  margin-top: 320px;
  @media only screen and (max-width:1199px) {
  width: 800px;
    }
      @media only screen and (max-width:991px) {
  width: 500px;
 
  overflow:auto;
  
    }
    
         @media only screen and (max-width:750px) {
  width: 530px;
 
    }

    

`;


const ModalContent = styled.div`

  .con-content {
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
      margin-bottom: 0;
    }


  }
  
       @media only screen and (max-width:750px) {
  width: 560px;
 
    }



  .scroll {

     @media only screen and (max-width:991px) {
      
    overflow-x: hidden auto;
       max-width:420px;

   
  
  
  
    }
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
  
  
  .content-modal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 49px 80px;
    overflow-y: auto;
    max-height: 700px;
    margin-right: -23px;
    padding-right: 23px;
    
        @media only screen and (max-width:750px) {
  overflow:hidden;
   grid-template-columns: repeat(1, 1fr);
   h5 {
      font-size: 16px;
    margin-bottom: 9px;
   }
  p {
   font-size: 14px;
    margin-bottom: -30px;
   }
     }

    
    
  }

  .container-modal {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-clip: padding-box;
    outline: 0;


    }

  .solution-title {
    color: rgb(30, 32, 48);
    font-family: "Averta CY";
    font-weight: bold;
    text-align: center;
    font-size: 28px;
    width: fit-content;
    margin: auto;
    margin-bottom:40px;
    margin-top:20px;
    
     @media only screen and (max-width:750px) {
     text-transform: uppercase; 
       }
 
    
      @media only screen and (max-width:700px) {
       
       font-size: 16px;
    
    

  }
  
    :after {
       filter: invert(21%) sepia(79%) saturate(125%) hue-rotate(22deg) brightness(119%) contrast(24%);
      fill: #d9534f;
      background-image: url(${solutions});
      content: "";
      display: inline-block;
      background-size: contain;
      margin-bottom: 10px;
      width: 84px;
      height: 30px;
       background-repeat: no-repeat;
    }


  form {
    margin-top: 40px;
  }

  form input {
    display: flex;
    height: 50px;
    font-size: 16px;
    width: 410px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    padding-left: 20px;
  }

  input[type=text]:focus {
    outline: 3px solid #b3d4fc;
  }

  button {

    display: block;
    width: 100%;
    padding: 14px 30px;
    border-radius: 8px;
    text-align: center;
    background: linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px;
    transition: all 0.2s ease-in-out 0s;
    color: rgb(255, 255, 255);
    font-family: "Averta CY", sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-top: 40px;
  }

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 27px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;

  color: #4F03E0;
  transition: all 0.2s ease-in-out 0s;

  :hover {
    transform: rotate(90deg);

  }

`;

export const ModalSolutions = ({showModal, setShowModal}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 300
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(-1.5%)` : `translateY(-12%)`
    });


    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';

        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);


    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalContent>
                                <div className="container-modal">
                                    <h1 className="solution-title">
                                        Шийдлүүд
                                    </h1>
                                    <div className="scroll content-modal">
                                        <div className="con-content">
                                            <h5>Headless Ecommerce</h5>
                                            <p>Headless цахим худалдааны шийдлээр бизнесийн онцлогтоо тохирох цахим
                                                худалдааг бүтээж
                                                ирээдүйтэй бэлтгэ</p>
                                        </div>
                                        <div className="con-content">
                                            <h5>Multi Store</h5>
                                            <p>Ашиглахад хялбар, салбар бизнесүүдийнхээ сүлжээг бий болгож удирдах</p>
                                        </div>
                                        <div className="con-content">
                                            <h5>Market Place</h5>
                                            <p>Бизнесийн загвартай тохируулан олон төрлийн борлуулагчдын зах зээлийг бий
                                                болгох
                                                боломжтой</p>
                                        </div>

                                        <div className="con-content">
                                            <h5>Media Platform</h5>
                                            <p>Медиа платформын тусламжтайгаар контент дээр суурьласан цахим худалдаагаа
                                                эхлүүлээрэй</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> In App</h5>
                                            <p> In app шийдлийн тусламжтайгаар томоохон Цахим хэтэвт, Супер аппликэйшд
                                                худалдаагаа өргөжүүлэх</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> Digital Wallet</h5>
                                            <p> Цахим хэтэвч дээр суурласан төлбөр тооцооны нэмэлт шийдэлүүдийг
                                                болгох</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> Mobile applications</h5>
                                            <p> Андройд болон IOS whitelabel апплекэйшнтэй нэмэлт програмчлалын
                                                шаардлаггүй болох</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> Page Builder</h5>
                                            <p> Прогчлал, кодлох шаардлаггүйгээр контентоо хялбархан бүтээх</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> B2B and B2C business</h5>
                                            <p> B2C болон B2B Бизнес загварт зориулан хөгжүүлсэн цахим худалдааны нэмэлт
                                                боломжууд</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> Custom Development</h5>
                                            <p> Захиалагчийн хүсэлтийн дагуу нэмэлт хөгжүүлэлт боломжуудыг хөгжүүлэх</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> Multi language</h5>
                                            <p> Цахим дэлгүүрээ олон хэл дээр гадаад дотоодын үйлчлүүлэгчтэй хүргэх
                                                боломжтой</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> Online to Offline</h5>
                                            <p> Pos (Point of sale), смарт дэлгүүрийн шийдлийн тусламжтай худалдаагаа
                                                өргөжүүлэх</p>
                                        </div>
                                        <div className="con-content">
                                            <h5> Social Ecommerce</h5>
                                            <p> Томоохон сошиал суваг дээр худалдааны орон зайгаа бий болгох
                                                боломжууд</p>
                                        </div>


                                    </div>
                                </div>

                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}
                            />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};