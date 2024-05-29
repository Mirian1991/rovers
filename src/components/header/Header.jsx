import {Searchbar} from "./headercomponents/Searchbar";
import { Login}    from "./headercomponents/Login";
import basket from '../../global/Images/headericons/basket.svg.svg';
 
export const Header = () =>  {

    return (
      <div className="header-container"> 

          
         <div className="header-first">

            <div className="header-logo"> Rovers</div>
            <Searchbar/>

            <Login/>
            <div>
               <img src={basket} alt="My Icon" width="50" height="50" />
               <p>basket</p>
            </div>

         </div>
         <div className="header-second"></div>

      </div>
    );
}