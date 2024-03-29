import { Outlet } from "react-router-dom";
import  { NavbarComponent } from "../shareCompo/Navbar";
const MainOutlet = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainOutlet;