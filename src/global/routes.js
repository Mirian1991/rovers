import { createBrowserRouter } from 'react-router-dom';
import { Homepage, Notfoundpage, Aboutuspage, Contactuspage, Deliverypage, Helppage, Privecypage, Questionpage,  } from "../pages";
import {CategoryPage} from"../components/header/headercomponents/CategoryPage" ;
import { Categories} from "../components/header/headercomponents/Categories";
import { Wrap } from "../components/WrapperContainer";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (<Wrap><Homepage /></Wrap>),
    errorElement: <Notfoundpage />,
  },
  {
    path: "/Aboutus",
    element: <Wrap><Aboutuspage /></Wrap>,
  },
  {
    path: "/Contactus",
    element: <Wrap><Contactuspage /></Wrap>,
  },
  {
    path: "/Delivery",
    element: <Wrap><Deliverypage /></Wrap>,
  },
  {
    path: "/Help",
    element: <Wrap><Helppage /></Wrap>,
  },
  {
    path: "/Privecy",
    element: <Wrap><Privecypage /></Wrap>,
  },
  {
    path: "/Question",
    element: <Wrap><Questionpage /></Wrap>,
  },

  {
    path:"/category/:id",
    element: <Wrap><CategoryPage /></Wrap>,

  },

  {

    path:"/categories",
    element :<Wrap><Categories/></Wrap>,
  },
]);
