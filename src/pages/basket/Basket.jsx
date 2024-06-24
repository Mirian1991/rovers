import basketicon from "../../global/Images/headericons/basket.svg.svg";

export const Basket = () => {
  return (
    <div className="basket-main">
      <img src={basketicon} alt="basket" width="20px" height="20px" />
      <a href="/basket">
        <div className="basket-button"> basket </div>
      </a>
    </div>
  );
};
