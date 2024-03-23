import React from "react";
import Spinner from "../../components/Spinner";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const Home = () => {
  return (
    <div
      className="
        h-screen w-full flex flex-col justify-center xl:flex-row lg:flex-row md:flex-row
      "
    >
      <div
        className="
          w-full h-full flex justify-center items-center CUSTOM-BG-HOME 
        "
      >
        <div
          className="
            flex items-center justify-center w-full 
          "
        >
          <img src="/logo.webp" alt="logo-img" className="w-52 h-52" />
        </div>
      </div>

      <div
        className="w-full h-full CUSTOM-BG-HOME-2 grid gap-2 p-4 sm:p-1 rounded-t-3xl 
        xl:rounded-none lg:rounded-none md:rounded-none sm:rounded-none
        xl:grid-rows-12 xl:grid-cols-12
        lg:grid-rows-12 lg:grid-cols-12
        md:grid-rows-12 md:grid-cols-12
        sm:grid-rows-12 sm:grid-cols-12
      "
      >
        <div
          className="CUSTOM-BG-HOME rounded-xl flex items-center justify-center gap-2 p-2
            xl:col-start-1 xl:col-end-13 xl:row-start-2 xl:row-end-4
            lg:col-start-1 lg:col-end-13 lg:row-start-1 lg:row-end-3
            md:col-start-1 md:col-end-13 md:row-start-1 md:row-end-3
            sm:col-start-1 sm:col-end-13 sm:row-start-1 sm:row-end-4

          "
        >
          <i className="text-orange-400 text-3xl py-3">
            <SiHomeassistantcommunitystore />
          </i>
          <h2 className="text-white text-2xl">Kiosco Colegio San Benito</h2>
        </div>

        <article
          className="CUSTOM-BG-HOME p-2 rounded-xl shadow-lg flex w-full justify-evenly h-full hover:scale-[1.01] duration-150
            xl:col-start-1 xl:col-end-7 xl:row-start-4 xl:row-end-12 xl:flex-col
            lg:col-start-1 lg:col-end-13 lg:row-start-3 lg:row-end-8 lg:flex-col
            md:col-start-1 md:col-end-13 md:row-start-3 md:row-end-8 md:flex-col
            sm:col-start-1 sm:col-end-13 sm:row-start-4 sm:row-end-8
          "
        >
          <div className="flex justify-center items-center py-3 ">
            <Spinner text="Tienda - Tienda -" />
          </div>

          <div className="inline-flex justify-center items-center ">
            <div>
              <a
                href="#"
                className="text-white flex items-center gap-1 hover:text-orange-300 py-2 px-6 border-2 border-orange-400 rounded-2xl
                  active:scale-95
                "
              >
                Ver tienda
                <i>
                  <FaArrowUpRightFromSquare />
                </i>
              </a>
            </div>
          </div>
        </article>

        <article
          className="CUSTOM-BG-HOME p-2 rounded-xl shadow-lg flex justify-evenly hover:scale-[1.01]
            xl:col-start-7 xl:col-end-13 xl:row-start-4 xl:row-end-12 xl:flex-col
            lg:col-start-1 lg:col-end-13 lg:row-start-8 lg:row-end-13 lg:flex-col
            md:col-start-1 md:col-end-13 md:row-start-8 md:row-end-13 md:flex-col
            sm:col-start-1 sm:col-end-13 sm:row-start-8 sm:row-end-12 
          "
        >
          <div className="flex justify-center items-center py-3 ">
            <Spinner text="Combos - Combos -" />
          </div>

          <div className="inline-flex justify-center items-center">
            <div>
              <a
                href="#"
                className="text-white flex items-center gap-1 hover:text-orange-300 py-2 px-6 border-2 border-orange-400 rounded-2xl
                  active:scale-95
                "
              >
                Ver Combos
                <i>
                  <FaArrowUpRightFromSquare />
                </i>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Home;
