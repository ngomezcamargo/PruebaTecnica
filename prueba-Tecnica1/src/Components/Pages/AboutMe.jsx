import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

const AboutMe = () => {
  return (
    <>
      <Header />
      <section className="section">
        <Link to='/about-me' className="btn">
        </Link>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Nicolas Gómez Camargo</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">I´m a Systems Engineer student, currently in 4 semester. I'm studing at El Bosque university.</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 sm:py-8">I was born in Floridablanca, Santander, in Colombia. I am 19 years old. Some of my interests are gastronomy, cars and coding. I started to learn code 2 years ago, when I enter to college, where I learned about Java and Python. Currently, I am learning JavaScript and React in a Bootcamp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">My Qualities</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Next, You can see which are my 4 main qualities.</p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Patience</h2>
              <p className="leading-relaxed text-base mb-4">I am a patience person with my activities, and my life in general. I do not get upset when things does not go as they should.</p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Responsable</h2>
              <p className="leading-relaxed text-base mb-4">I am so responable with the things I have to do. I try to use all te free time that I have for do my homeworks and duties.</p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Kindness</h2>
              <p className="leading-relaxed text-base mb-4">I try to be kind with everybody because I think that good words and a gentle behaviour are relevant to the way as We make good relations with other people.</p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Empathy</h2>
              <p className="leading-relaxed text-base mb-4">I am so empathy with the people I know. I really like to think as They and trying to putting myself in their shoes. </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default AboutMe;
