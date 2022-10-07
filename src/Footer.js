import React from "react";
import instagram from "./img/instagram.jpg";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import twitter from "./img/twitter.png";
import './Footer.css'

function Footer() {
  return (
    // <div
    //   classNameNameName="footer d__flex align__items__center justify__content__space__between pz-10"
    //   style={{ padding: "10px 20px", zIndex: "100" }}
    // >
    //   <img src={footerImg} alt="" classNameNameName="footer__img pointer" style={{width:'4rem', borderRadius:'60%'}} />

    //   <span
    //     classNameNameName="copyright"
    //     style={{ color: "#c6c9d8", fontSize: "20px", opacity: "0.75" }}
    //   >
    //     Copyright © 2022 programmer Ali Husaain Mansuri. All Rights Reserved.
    //   </span>
    // </div>

    <>
      <div className="footer">
         <div className="left">
          <a href="https://www.instagram.com/p/CLo_VjWljQD_EeG2RZ8yb-7LycAsyM34WsNcfQ0/?igshid=YmMyMTA2M2Y=">
            <img src={instagram} alt=""></img>
          </a>
          <a href="https://www.linkedin.com/in/ali-hussain-mansuri-4aa7a920b/">
            <img src={linkedin} alt=""></img>
          </a>
          <a href="https://github.com/ali-mansuri-07">
            <img src={github} alt=""></img>
          </a> <a href="https://twitter.com/mansuri_ali_51">
            <img src={twitter} alt=""></img>
          </a>
         </div>
         <div className="right">
             <p>Copyright © 2022 Ali Husaain Mansuri. All Rights Reserved.</p>
         </div>
      </div>

    </>
  );
}

export default Footer;
