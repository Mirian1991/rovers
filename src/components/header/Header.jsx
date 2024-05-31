import {Searchbar}     from "../../pages/searchbar/Searchbar";
import { Login}        from "../../pages/login/Login";
import {Changelangs}   from "../../global/changelangs/Changelangs";

 

 
export const Header = () =>  {

    return (
      <div className="header-container"> 

          
         <div className="header-first">

            <div className="header-logo"> Rovers</div>
            <Searchbar/>
            <Login/>
            <Changelangs/>
             

         </div>

          
         <div className="header-second"></div>

      </div>
    );
}