import React, { useState } from "react";
import aboutphoto from "../../global/Images/pages/aboutpage/aboutphoto.png";

export const Aboutuspage = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="Main-aboutpage">
      <div className="Aboutpage-section">
        <h1>ჩვენს შესახებ</h1>
        <h3>Rovers.ge შეიქმნა 2017 წელს</h3>

        <div className="aboutpage-sectionflex">
          <div className="aboutpage-text">
            ჩვენს ძირითად საქმიანობას წარმოადგენს ელექტრონული კომერცია. ჩვენი
            გუნდი ყოველდღიურად მუშაობს იმისთვის, რომ პროდუქცია იყოს მაქსიმალურად
            მრავალფეროვანი, დახვეწილი და ხარისხიანი. ჩვენ ვთანამშრომლობთ მაღალი
            კვალიფიკაციისა და გამოცდილების მქონე კომპანიებთან, რაც გვაძლებს იმის
            შესაძლებლობას რომ გვქონდეს სწრაფი და პირველ რიგში ხარისხიანი
            მომსახურება. კომპანიის ძირითადი მიზანი კი უფრო მეტი ლოიალური
            მომხმარებლის მოპოვება და მათი შენარჩუნებაა. ვცდილობთ დავამკვიდროთ
            მომსახურების მაღალი სტანდარტი. უპირატესობა კი, რაც სხვა ინტერნეტ
            მაღაზიებისგან გამოგვარჩევს არის:
            {isReadMore ? (
              <>
                დაბალი ფასი, ხარისხსიანი პროდუქცია, სწრაფი მომსახურება და
                გადახდის სხვადასხვა მეთოდი, რომელიც მაქსიმალურად მორგებულია
                მომხმარებელზე
                <button onClick={handleReadMore} className="read-more-button">
                  ნაკლები
                </button>
              </>
            ) : (
              <>
                ...
                <button onClick={handleReadMore} className="read-more-button">
                  მეტის წაკითხვა
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
