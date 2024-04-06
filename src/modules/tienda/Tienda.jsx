import React from "react";
import { useState } from "react";
import HeaderFilter from "../../components/HeaderFilter";
import Products from "../../components/Products";
import AllCategories from "../../components/AllCategories";

const Tienda = () => {
  const [categorie, setCategorie] = useState("");

  const [botonTodosActive, setBotonTodosActive] = useState(false);

  const ButtonHandler = (e) => {
    e.preventDefault();
    const filterCategorie = e.target.attributes[1].value;
    setBotonTodosActive(true);
    setCategorie(filterCategorie);
  };

  const todosHandler = (e) => {
    //desactiva el boton
    setBotonTodosActive(false);
  };

  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="h-full bg-gray-100" id="tienda">
      
      <div className="CUSTOM-BG-HOME p-4">

        <div className="rounded-3xl flex flex-col items-center justify-center bg-neutral-950 shadow-card 
          xl:flex-row">

          <div className="flex justify-center w-2/5 py-5">
            <h2 className="text-xl poppins-bold text-neutral-100 
              xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl
            ">
              Tienda
            </h2>
          </div>

          <div className="w-full flex justify-center p-2">
              <input
                type="text"
                placeholder="Buscar"
                className="
                  w-full 
                  xl:w-1/3 
                  lg:w-1/3
                  md:w-1/2
                  p-2 rounded-xl bg-slate-50 shadow-sm 
                  border-none outline-slate-200"
                  onChange={inputHandler}
              />
          </div>

        </div>

        

        <div className="w-full flex justify-center p-2">
          <HeaderFilter
            ButtonHandler={ButtonHandler}
            botonTodosActive={todosHandler}
            botonTodosActiveEstado={botonTodosActive}
          />
        </div>
      </div>

      <div
        className="
            flex h-full w-full 
            rounded-2xl min-h-fit p-4 "
      >
        {botonTodosActive ? (
          <Products filterProducts={categorie} />
        ) : (
          <AllCategories inputFilter={inputValue}/>
        )}
      </div>
    </div>
  );
};

export default Tienda;
