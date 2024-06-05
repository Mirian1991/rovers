import { createBrowserRouter ,   RouterProvider,  } from 'react-router-dom';
import { Header,Footer} from "./components";
import { Homepage, Notfoundpage , Aboutuspage, Contactuspage, Deliverypage, Helppage, Privecypage, Questionpage,  } from "./pages";


export const App = () => {



   const router = createBrowserRouter ([ 
      {
        path:"/",
        element:<Homepage/>,
        errorElement: <Notfoundpage/>,
         
      },

      {
         path:"/Aboutus",
         element:<Aboutuspage/>,
          
          
       },

       {
         path:"/Contactus",
         element: <Contactuspage/>,
       },

       {
         path:"/Delivery",
         element:<Deliverypage/>,
       },

       {
         path:"/Help",
         element:<Helppage/>,
       },

       {
         path:"/Privecy",
         element:<Privecypage/>,
       },
       
       {
         path:"/Question",
         element:<Questionpage/>,
       },
      
    
     
    ]) ;

  return (
   <>
      <Header/>
      <RouterProvider router = {router }/>
      <Footer/>

   </>
   );
}