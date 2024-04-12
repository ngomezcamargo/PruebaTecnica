import React from "react";

const Footer = () => {

    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">My Profile</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Nicolas Gómez Camargo                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                    <a className="ml-3 text-gray-500" href="https://github.com/ngomezcamargo" target="_blank">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>                  
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.384.6.11.823-.255.823-.57 0-.285-.013-1.24-.02-2.25-3.338.724-4.042-1.61-4.042-1.61C4.68 18.062 3.84 17.7 3.84 17.7c-1.08-.736.084-.72.084-.72 1.194.084 1.82 1.227 1.82 1.227 1.06 1.82 2.78 1.294 3.45.99.108-.768.415-1.294.755-1.59-2.65-.3-5.45-1.324-5.45-5.896 0-1.3.465-2.365 1.227-3.197-.12-.303-.54-1.513.12-3.15 0 0 1.005-.32 3.3 1.22A11.487 11.487 0 0112 5.15c1.29-.03 2.58.426 3.75 1.26 2.29-1.54 3.29-1.22 3.29-1.22.66 1.64.24 2.85.12 3.15.765.832 1.225 1.896 1.225 3.197 0 4.587-2.81 5.59-5.465 5.88.42.36.81 1.102.81 2.22 0 1.607-.015 2.896-.015 3.287 0 .315.21.685.825.57C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/nicol%C3%A1s-g%C3%B3mez-camargo-2b1751182/" target="_blank">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    );

};

export default Footer;