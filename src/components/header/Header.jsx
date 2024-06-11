import {Searchbar}                from "../../pages/searchbar/Searchbar";
import { Login}                   from "../../pages/login/Login";
import {Changelangs}              from "../../global/changelangs/Changelangs";
import testicon                   from "../../global/Images/headericons/shoes.svg";
import watchicon                  from "../../global/Images/headericons/watch.svg";
import bagicon                    from "../../global/Images/headericons/bags.svg";
import dishesicon                 from "../../global/Images/headericons/dishes.svg";
import homeappliancesicon         from "../../global/Images/headericons/appliances.svg";
import medicalicon                from "../../global/Images/headericons/medical.svg";
import smartphoneicon             from "../../global/Images/headericons/smartphone.svg";
import toolsicon                  from "../../global/Images/headericons/tools.svg";
import Mainlogo                   from "../../global/Images/main-logo/rovers.svg";

 
export const Header = () =>  {

    return (
      <div className="header-container"> 

          
         <div className="header-first">
 
            <a href="/" className="header-logo"> rovers </a>
            <Searchbar/>
            <Login/>
            <Changelangs/>
             

         </div>

          
         <div className="header-second">

         <ul className="header-second-ul">

            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "23px"  height= "23px"/> 
              <a  href=""> shoes</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {watchicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> watches</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {bagicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Bags</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {dishesicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Dishes</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {homeappliancesicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Home appliances</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {medicalicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Medical corner</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {smartphoneicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Smart phone</a>
            </li>

            <li className="header-second-flex"> 
                <img src= {toolsicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> tools</a>
            </li>
             
            
         </ul>
             
            

         </div>

      </div>
    );
}