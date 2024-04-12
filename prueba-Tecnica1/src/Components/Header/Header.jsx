import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const Navbar = () => [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Services",
            link: "/services",
        },
        {
            name: "Portafolio",
            link: "/",
        },
        {
            name: "Contact",
            link: "/contact",
        },


    ]

    return (
        <>
            <nav className="w-full h-auto bg-gray-700 lg:px-16 sm:px-14 px-12 py-2 shadow-md">
                <div className="justify-between mx-aut lg:w-full md:items-center md:flex">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link to= "/"className="text-3xl text-grey-500 font-bold tracking-[0.1rem]">
                                My profile
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-between items-center md:block">
                        <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">


                            <li>
                                <Link to="/about-me" className="text-gray-200 text-[1.15rem] font-medium tracking-wide hover:text-gray-200 ease-out duration-700r">
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-200 text-[1.15rem] font-medium tracking-wide hover:text-gray-200 ease-out duration-700r">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/pomodoro" className="text-gray-200 text-[1.15rem] font-medium tracking-wide hover:text-gray-200 ease-out duration-700r">
                                    Pomodoro
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-200 text-[1.15rem] font-medium tracking-wide hover:text-gray-200 ease-out duration-700r">
                                    Contact
                                </Link>

                            </li>


                        </ul>


                    </div>
                </div>
            </nav>

        </>


    );

};

export default Header;
