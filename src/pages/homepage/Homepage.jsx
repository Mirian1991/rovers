import { SectionOne } from "../section1/SectionOne";
import { SectionTwo } from "../section2/SectionTwo";
import { SectionThree } from "../section3/SectionThree";

export const Homepage = () => {
  return (
    <div className="Main-Homepage">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};
