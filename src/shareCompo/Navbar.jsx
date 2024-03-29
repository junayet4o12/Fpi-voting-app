
import './nav.css'
import { Navbar } from "keep-react";
import { NavLink } from "react-router-dom";

export const NavbarComponent = () => {
    return (
        <Navbar fluid={true} className="bg-[#7f87df]">

            <Navbar.Container className="flex items-center justify-between">
                <Navbar.Container className="flex items-center justify-between ">
                    <img src="https://i.ibb.co/GtbVMWL/Untitled-design-3-1.png" alt="" className="h-12 w-[110px]" />

                    {/* For mobile */}

                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="  flex flex-col gap-5">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'election'}>Election</NavLink>
                            <NavLink to={'/blog'}>Blog</NavLink>
                            <NavLink to={'/voting'}>Voting Step</NavLink>
                            <NavLink to={'/login'}>Login</NavLink>
                        </Navbar.Container>
                    </Navbar.Collapse>



                </Navbar.Container>


                {/* for desktop */}

                <Navbar.Container className="flex gap-2">
                    <Navbar.Container
                        tag="ul"
                        className=" text-white  lg:flex hidden items-center  gap-8"
                    >
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'election'}>Election</NavLink>
                        <NavLink to={'/blog'}>Blog</NavLink>
                        <NavLink to={'/voting'}>Voting Step</NavLink>
                        <NavLink to={'/login'}>Login</NavLink>
                    </Navbar.Container>
                    <Navbar.Toggle />
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
    );
}
