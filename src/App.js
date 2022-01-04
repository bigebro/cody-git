import Home from "./_desktop/Home";
import './Font/AvertaCY.css';
import MessengerCustomerChat from "react-messenger-customer-chat";
import React from "react";


function App() {
  return (
      <MessengerCustomerChat
          pageId="331581003847973"
          appId="613554456622921"
          themeColor={'#8753F0'}
          height={14}
      />,
    <Home/>

  )
}

export default App;
