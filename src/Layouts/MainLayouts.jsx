import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/shareCompo/Navbar";
const MainOutlet = () => {
    return (
        <div className="container">
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>

        </div>
    );
};

export default MainOutlet;