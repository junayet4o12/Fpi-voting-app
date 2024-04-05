import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/shareCompo/Navbar";
const MainOutlet = () => {
    return (
        <div className="">
            <NavbarComponent></NavbarComponent>
            <div className="md:container mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainOutlet;