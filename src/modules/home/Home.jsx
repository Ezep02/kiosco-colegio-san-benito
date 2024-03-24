import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      className="
        h-screen w-full flex flex-col justify-center xl:flex-row lg:flex-row md:flex-row"
    >
      <div
        className="w-full h-full flex justify-center items-center CUSTOM-BG-HOME"
      >
        <div
          className="flex items-center justify-center w-full"
        >
          <img src="/logo.webp" alt="logo-img" className=" 
            h-32 w-32 
            xl:h-40 xl:w-40
            lg:h-40 lg:w-40
            " 
            
            />
        </div>
      </div>

      <div
        className="w-full h-full bg-zinc-100  grid gap-3 p-4 sm:p-1 rounded-t-3xl 
        xl:rounded-none lg:rounded-none md:rounded-none sm:rounded-none
        xl:grid-rows-12 xl:grid-cols-12
        lg:grid-rows-12 lg:grid-cols-12
        md:grid-rows-12 md:grid-cols-12
        sm:grid-rows-12 sm:grid-cols-12
      "
      >
        <div
          className="bg-neutral-950 shadow-card rounded-2xl flex items-center gap-2 
            xl:col-start-2 xl:col-end-12 xl:row-start-2 xl:row-end-4
            lg:col-start-1 lg:col-end-13 lg:row-start-1 lg:row-end-3
            md:col-start-1 md:col-end-13 md:row-start-1 md:row-end-3
            sm:col-start-1 sm:col-end-13 sm:row-start-1 sm:row-end-3
          "
        >
          
         <div className="px-4">
            <h2 className="text-white text-xl poppins-bold">Kiosco Colegio San Benito</h2>
            <p className="text-orange-300">Categorias</p>
         </div>
        </div>

        <article
          className="bg-[url('/bg.webp')] shadow-card p-2 rounded-2xl shadow-lg flex w-full justify-evenly h-full
            xl:col-start-2 xl:col-end-12 xl:row-start-4 xl:row-end-8 xl:flex-col
            lg:col-start-1 lg:col-end-13 lg:row-start-3 lg:row-end-8 lg:flex-col
            md:col-start-1 md:col-end-13 md:row-start-3 md:row-end-8 md:flex-col
            sm:col-start-1 sm:col-end-13 sm:row-start-3 sm:row-end-8
          "
        >
         

          <div className="inline-flex justify-center items-center ">
            <div>
              <a
                href="#"
                className="text-zinc-100 poppins-bold flex items-center gap-2 hover:text-orange-500 py-4 px-6 rounded-3xl 
                  active:scale-95 bg-neutral-950 shadow-card
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
          className="bg-[url('/bg2.webp')] shadow-card p-2 rounded-2xl shadow-lg flex justify-evenly 
            xl:col-start-2 xl:col-end-12 xl:row-start-8 xl:row-end-12 xl:flex-col
            lg:col-start-1 lg:col-end-13 lg:row-start-8 lg:row-end-13 lg:flex-col
            md:col-start-1 md:col-end-13 md:row-start-8 md:row-end-13 md:flex-col
            sm:col-start-1 sm:col-end-13 sm:row-start-8 sm:row-end-13 
          "
        >
         
          <div className="inline-flex justify-center items-center">
            <div>
              <a
                href="#"
                className="text-zinc-100 poppins-bold flex items-center gap-2 hover:text-orange-500 py-4 px-6 rounded-3xl 
                active:scale-95 bg-neutral-950 shadow-card
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
