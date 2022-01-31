import React, {useEffect,useState}from 'react'

import './DrawerToggleButton.css'

const DrawerToggleButton = props => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [companyName, setCompanyName] = useState();

const { show, onHide} =props;
    useEffect(() => {
        if (show) { document.body.style.overflow = 'hidden';}

        return ()=> document.body.style.overflow = 'unset';
    }, [show]);
return (
    <button className="toggle-button" >
    <div className="btn" onClick={props.click} >
    <button className={`toggle ${show && 'open'}`} ></button>
<button className={`btn-account onClick={onHide} ${show && 'open'}`} >
<span className="line line-one" ></span>
    <span className="line line-two"></span>
    <span className="line line-three"></span>
    </button>
    <div className={`account-sidebar ${show && 'open'}`} onClick={props.click}>
<header></header>
<div className={`${show && 'body'}`}>
<ul className="sidebar">
        <a href="#cody" onClick={onHide}>
    <li className="list-menus" >

       <canvas className="canvas"/>
        <button type="button" >
        <span className="float-left" >Коди Платформ</span>
        </button>

    </li>
    </a>
    <a href="#solutions" onClick={onHide}>
    <li className="list-menus">
        <canvas className="canvas"/>
        <button type="button">
        <span className="float-left">Шийдэл</span>
    </button>
    </li>
        </a>
        <a href="#features" onClick={onHide}>
    <li className="list-menus">
        <canvas className="canvas"/>
        <button type="button">
        <span className="float-left">Боломжууд</span>
    </button>
    </li>
        </a>

    <li className="list-menus" onClick={onHide}>
        <canvas className="canvas"/>
        <button type="button" >
        <span className="float-left">Харилцагч</span>
    </button>
    </li>

        <a href="/about">
        <li className="list-menus">
        <canvas className="canvas" style={{"cursor":"pointer"}}/>
        <button type="button">
        <span className="float-left">Бидний тухай</span>
    </button>
    </li>
        </a>



</ul>
        <div style={{"height":"30px", "cursor":"auto"}}></div>
   <div className="form ">
        <form action="#">
        <input name="full_name" onChange={(e) => setFullName(e.target.value)} placeholder="Овог нэр" required type="text" className="form-control" value={fullName}/>
    <input name="email" onChange={(e) => setEmail(e.target.value)} placeholder="И-мэйл" required type="text" className="form-control" value={email}/>
    <input name="phone_number" onChange={(e) => setPhoneNumber(e.target.value)}  placeholder="phone" required type="text" className="form-control" value={phoneNumber}/>
    <input name="company_name" onChange={(e) => setCompanyName(e.target.value)}   placeholder="Байгууллагын нэр" required type="text" className="form-control" value={companyName}/>
        <button type="submit">
        <span>Хамтрах</span>
        </button>
        </form>
        </div>
        <div className="footer-copyright">
        <p>©2022 Cody Inc. All rights reserved. </p>
        </div>

</div>
</div>
</div>
</button>
);

}

export default DrawerToggleButton