import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 16;
  overflow-y: hidden;

`;

const ModalWrapper = styled.div`
  width: 505px;
  height: 445px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: rgb(246, 246, 246);
  color: #000;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 16;
  border-radius: 20px;
  display: flex;
  justify-content: center;


`;


const ModalContent = styled.div`
  
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
   input[type=text]:focus{
    outline: 3px solid #b3d4fc;     
  }
  button {

    display: block;
    width: 100%;
    padding: 14px 30px;
    border-radius: 8px;
    text-align: center;
    background: linear-gradient(
            95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px;
    transition: all 0.2s ease-in-out 0s;
    color: rgb(255, 255, 255);
    font-family: "Averta CY", sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-top:40px;
  }
  
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 37px;
  right: 20px;
  width: 32px;  
  height: 32px;
  padding: 0;
 
  color:#4F03E0;
  transition: all 0.2s ease-in-out 0s;
  :hover {
    transform: rotate(90deg);

  }
  
`;

export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(-6%)` : `translateY(-20%)`
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
                        <ModalWrapper showModal={showModal} >
                            <ModalContent>
                                <form action="#">
                                    <input name="full_name" placeholder="Овог нэр" required type="text" ></input>
                                    <input name="email" placeholder="И-мэйл" required type='text'></input>
                                    <input name="phone" placeholder="Утас" required type='text'></input>
                                    <input name="company" placeholder="Байгууллагын нэр" required type='text'></input>
                                </form>
                                <button>Илгээх</button>
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