import { Button } from "keep-react";
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="relative mb-20">
            <div className="lg:flex gap-6  justify-center items-center">
                <div className="space-y-3 lg:w-full lg:ml-7">
                    <h1 className="text-center  text-2xl lg:text-start lg:text-4xl  font-extrabold capitalize text-[#425176] ">find Your Vote <br /> Fulfill <span className="font-outline-2 text-white font-bold font-sans">your Aspirations</span>  <br />easily here</h1>
                    <p className="text-[#626687]  text-center lg:text-start">Vote in our college elections. As heads, instructors, and class captains, <br /> we know its important. Lets shape our campus and beyond together. Your vote matters!</p>
                    <br />
                    <div className="flex justify-center lg:justify-start">
                        <NavLink to={''}><Button size="sm" className='bg-[#8188D9]'>
                            Vote Now
                        </Button></NavLink>
                    </div>


                </div>
                <div className="flex gap-5  w-full justify-center  mt-2 lg:mt-0 ">
                    <img src="https://i.ibb.co/N1yw3Ds/fpi-1.jpg" alt="" className="
                      w-screen h-64 md:w-full  md:h-[500px]" />

                </div>

            </div>

            <div className="space-y-3 lg:space-y-0 lg:absolute lg:right-10 lg:bottom-10 ">
                <div className="flex flex-wrap lg:flex-nowrap  gap-5  justify-center lg:justify-end ">
                    <div className="flex w-full lg:w-80 p-2 bg-white shadow-lg rounded-2xl justify-center items-center gap-3">
                        <img src="https://i.ibb.co/X4Q60XX/Group-7-1.png" className="h-20" alt="" />
                        <div>
                            <h3 className="text-black">1K+ People</h3>
                            <p className="text-slate-500 text-xs">Successfully Getting Home</p>
                        </div>


                    </div>
                    <div className="flex p-2 gap-8 w-full lg:gap-3 lg:w-80  bg-white shadow-lg rounded-2xl justify-center items-center ">
                        <div className="mr-9">
                            <img src="https://i.ibb.co/gb1s1PX/Rectangle-12.png" className="h-16" alt="" />
                        </div>
                        <div>
                            <h3 className="text-black">56 Houses</h3>
                            <p className="text-slate-500 text-xs">Sold Monthly</p>
                        </div>

                    </div>
                    <div className="flex w-full  lg:w-80  bg-white  shadow-lg rounded-2xl justify-center items-center gap-3">
                        <img src="https://i.ibb.co/YZ6cq4v/Ellipse-6-1.png" className="h-20" alt="" />
                        <div>
                            <h3 className="text-black">4K+</h3>
                            <p className="text-slate-500 text-xs">People Looking for New Homes</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Header;