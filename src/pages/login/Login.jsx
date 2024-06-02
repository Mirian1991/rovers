import loginicon from "../../global/Images/headericons/login.svg.svg";
import { Basket} from "../basket/Basket";
 


export  const Login = ( ) => {

    return (
        
      <div className="main-logo-basket">

        <div className="login-flex">
           <img src= {loginicon} alt="login"  width= "20px"  height= "20px"/>
           <a href="/Loginpage">
             <div className="login-button">login</div>
           </a>
         </div>
           <Basket/>
    </div>
     );

}