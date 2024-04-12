import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Header/>
      <div className=" text-center sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 py-56">

        Welcome to my project! Use the options on the NavBar to see what I have.

      </div>

    </>


  );

};

export default Home;
