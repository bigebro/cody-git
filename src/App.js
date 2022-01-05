import React from "react";
import './Font/AvertaCY.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./_desktop/Home";
import Career from './_desktop/components/Career'
import Webinar from "./_desktop/components/Webinar";


function App() {
  return (

     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="career" element={<Career/>}/>
         <Route path="webinar" element={<Webinar/>}/>
     </Routes>
     </BrowserRouter>

  )
    
}

export default App;
