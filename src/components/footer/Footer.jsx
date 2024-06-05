import { Swiper, SwiperSlide } from 'swiper/react';
import facebookicon   from "../../global/Images/footericons/facebook.svg";
import aboutusicon    from "../../global/Images/footericons/information.svg";
import questionicon   from "../../global/Images/footericons/question.svg";
import privacyicon    from "../../global/Images/footericons/privacy.svg";
import deliveryicon   from "../../global/Images/footericons/delivery.svg";
import helpicon       from "../../global/Images/footericons/help.svg";
import contactusicon  from "../../global/Images/footericons/contact.svg";

export const Footer = () =>  {

    return (

      <div className='footer-container'>

        <div className="footer-flex">
        
          <div className='footer-first'>
              <ul>
                <li className='footer-first-flex'> <img src= {aboutusicon} alt="aboutus" width= "15px" height="15px" /> <a href="/Aboutus">  About us </a> </li>
                <li className='footer-first-flex'> <img src= {questionicon} alt="question"  width= "15px" height="15px"  /> <a href="/Question">  Frequently Asked Questions  </a> </li> 
                <li className='footer-first-flex'> <img src= {privacyicon} alt="privacy"  width= "20px" height="20px"  /> <a href="/Privecy">  Privacy    </a> </li>
                <li className='footer-first-flex'> <img src= {deliveryicon} alt="delivery"  width= "20px" height="20px"  /><a href="/Delivery">  Purchase/Delivery           </a> </li>
                <li className='footer-first-flex'> <img src= {helpicon} alt="help"  width= "20px" height="20px"  /> <a href="/Help">  Help       </a> </li>
                <li className='footer-first-flex'>  <img src={contactusicon} alt="contact us"  width= "20px" height="20px"  />  <a href="/Contactus">  Contact us </a> </li>
                
              </ul>

              <a className="footer-logo" href="https://www.facebook.com/RoversSneakers/" target="_blank">

            <img src= {facebookicon} alt="facebook"  width= "30px" height="30px"/>
                 </a>

              
           </div>
           


             

             
          <div className='footer-second'>
           

          <a href="/" className="header-logo">rovers</a>

           </div>
           
          
        </div>
         
      </div> 
    
    );

}