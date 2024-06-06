import { Link } from "react-router-dom";

export const Notfoundpage = () => {

    return (

        <div className="Nopage-main">

            <div className="Nopage-container">

            <div className="Notfound-flex">
               <div className="Notfound-404"> 404  </div>
               <h3> Page Not Found</h3>
               <p>  We couldn't find this page </p>
               <Link to="/" className="Homepage-link"> Homepage </Link> 

               </div>

             </div>
        </div>
    );
} 