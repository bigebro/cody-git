import React from "react";
import './Font/AvertaCY.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./_desktop/Home";
import Career from './_desktop/components/Career'
import Webinar from "./_desktop/components/Webinar";
import About from "./_desktop/components/About"
import './index.css';

function App() {
  return (

     <BrowserRouter>
       <Routes>
         <Route path="/cody-git" element={<Home/>}/>
         <Route path="/career" element={<Career/>}/>
         <Route path="/webinar" element={<Webinar/>}/>
         <Route path="/about" element={<About/>}/>
     </Routes>
     </BrowserRouter>

  )
    
}

export default App;
