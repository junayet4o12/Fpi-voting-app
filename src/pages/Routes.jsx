import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Eror";
import MainOutlet from "./MainOutlet";
import Home from "./Home";

 const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
         element: <MainOutlet></MainOutlet>,
         children :[{
            path : '/',
            element:<Home></Home>
         }]
    },
]);
export default router;