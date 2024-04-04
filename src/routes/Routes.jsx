import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";
import MainOutlet from "../Layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Election from "../pages/Election/Election";
import VotingStep from "../pages/VotingStep/VotingStep";
import Login from "../pages/Login/Login";
import RegisterPage from "../pages/Register/RegisterPage";

const router = createBrowserRouter([
   {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainOutlet></MainOutlet>,
      children: [{
         path: '/',
         element: <Home></Home>
      },
         {
            path: '/blog',
            element: <Blog />
         },
         {
            path: '/election',
            element: <Election />
         },
         {
            path: '/voting',
            element: <VotingStep/>
         },
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/register',
            element: <RegisterPage />
         }
   ]
   },
]);
export default router;