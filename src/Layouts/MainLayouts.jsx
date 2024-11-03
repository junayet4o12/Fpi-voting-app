import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/shareCompo/Navbar";
import Footer from "../components/shareCompo/Footer";
const MainOutlet = () => {
    return (
        <div className="">
            <NavbarComponent></NavbarComponent>
            <div className="md:container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainOutlet;