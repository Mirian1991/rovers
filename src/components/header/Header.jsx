import {Searchbar}     from "../../pages/searchbar/Searchbar";
import { Login}        from "../../pages/login/Login";
import {Changelangs}   from "../../global/changelangs/Changelangs";
import testicon        from "../../global/Images/headericons/test.svg";
 

 
export const Header = () =>  {

    return (
      <div className="header-container"> 

          
         <div className="header-first">

            <div className="header-logo"> Rovers</div>
            <Searchbar/>
            <Login/>
            <Changelangs/>
             

         </div>

          
         <div className="header-second">

         <ul className="header-second-ul">

            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
              <a href=""> shoes</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> watches</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Bags</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Dishes</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Home appliances</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Medical corner</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Testiconblabla</a>
            </li>
            
            <li className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Testiconblabla</a>
            </li>
            
         </ul>
             
            

         </div>

      </div>
    );
}