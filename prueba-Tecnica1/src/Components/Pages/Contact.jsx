import Footer from "../Header/Footer";
import Header from "../Header/Header";

const Contact = () => {

    return (
        <>
            <Header />
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contact</h1>
                        <p className="mb-8 leading-relaxed">You can contact me on LinkedIn or Instagram, if you think I have talent coding.</p>
                        <div className="flex justify-center">
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
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;