import React from "react";
import image from "../image/careerimage.png"
import styled from "styled-components";
const ContainerComp = styled.div`

.CareerBanner {
    max-width: 100%;
    overflow: hidden;
    background-size: cover;
    position: relative;

}

.CareerBanner img {
    width: 100%;
    object-fit: contain;
}

.CareerBanner .banner-text {
    width: 600px;
    z-index: 1;
    margin-top: 20%;
    margin-left: 20%;
    position: absolute;
    top: 0px;
}

 .CareerBanner span {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
}

.CareerBanner:after {
    width: 1000vw;
    height: 4000vw;
    content: "";
    z-index: 1;
    background-color: rgb(241, 243, 255);
    border-top-left-radius: 1200vw;
    border-top-right-radius: 1200vw;
    position: absolute;
    left: -450vw;
    top: 89%;
}

`;

function CareerBanner() {
return(


    <ContainerComp>

<div className="CareerBanner">
<img src={image} />
<div className="banner-text">
<span>
Бид авъяаслаг, чөлөөт сэтгэхүйтэй, бүтээлч, хөдөлмөрч залуустай хамтран 
ажиллахдаа үргэлж нээлттэй байх болно.
</span>
</div>

</div>
    </ContainerComp>
   

)

}

export default CareerBanner;