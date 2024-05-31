
import basketicon from "../../global/Images/headericons/basket.svg.svg";

export const Basket = () => {

    return ( 

        <div className="basket-main">
            <img src= {basketicon} alt="basket"  width="25px" height="25px" />

           <button className="basket-button"> bask </button>
        </div>
    ) ;

}