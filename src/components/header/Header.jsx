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

            <div className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
              <a href=""> Test</a>
            </div>
            
            <div className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Test</a>
            </div>
            
            <div className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Test</a>
            </div>
            
            <div className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Testiconblabla</a>
            </div>
            
            <div className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Testiconblabla</a>
            </div>
            
            <div className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Testiconblabla</a>
            </div>
            
            <div className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Testiconblabla</a>
            </div>
            
            <div className="header-second-flex"> 
                <img src= {testicon} alt="testicon"  width= "20px"  height= "20px"/> 
                <a href=""> Testiconblabla</a>
            </div>
            
            
             
            

         </div>

      </div>
    );
}