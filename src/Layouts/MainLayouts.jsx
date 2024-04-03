import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/shareCompo/Navbar";
import Footer from "../components/shareCompo/Footer";
const MainOutlet = () => {
    return (
        <div className="container">
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            <Footer />

        </div>
    );
};

export default MainOutlet;