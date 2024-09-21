import { createBrowserRouter } from 'react-router-dom';
import { Homepage, Notfoundpage, Aboutuspage, Contactuspage, Deliverypage, Helppage, Privecypage, Questionpage,  } from "../pages";
import {CategoryPage} from"../components/header/headercomponents/CategoryPage" ;
import { Categories} from "../components/header/headercomponents/Categories";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Notfoundpage />,
  },
  {
    path: "/Aboutus",
    element: <Aboutuspage />,
  },
  {
    path: "/Contactus",
    element: <Contactuspage />,
  },
  {
    path: "/Delivery",
    element: <Deliverypage />,
  },
  {
    path: "/Help",
    element: <Helppage />,
  },
  {
    path: "/Privecy",
    element: <Privecypage />,
  },
  {
    path: "/Question",
    element: <Questionpage />,
  },

  {
    path:"/category/:id",
    element: <CategoryPage />,

  },

  {

    path:"/categories",
    element :<Categories/>,
  },
]);
