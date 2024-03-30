import React from "react";
import { useState } from "react";
import HeaderFilter from "../../components/HeaderFilter";
import Products from "../../components/Products";
import AllCategories from "../../components/AllCategories";

const Tienda = () => {
  const [categorie, setCategorie] = useState("");

  const [botonTodosActive, setBotonTodosActive] = useState(false);

  const ButtonHandler = (e) => {
    e.preventDefault()
    const filterCategorie = e.target.attributes[1].value;
    setBotonTodosActive(true);
    setCategorie(filterCategorie);
  };

  const todosHandler = (e) => {
    //desactiva el boton
    setBotonTodosActive(false);
  };

  return (
    <div className="h-full p-4 bg-gray-100">
      <div>
        <h2 className="text-neutral-800 text-7xl poppins-bold-italic">
          Tienda
        </h2>
      </div>

      <div className="w-full flex justify-center ">
        <input type="text" placeholder="Buscar"  className="
            w-full 
            xl:w-1/3 
            lg:w-1/3
            md:w-1/2
            p-2 rounded-xl bg-slate-50 shadow-sm 
            border-none outline-slate-200"
          />
      </div>

      <div className="w-full flex justify-center">
        <HeaderFilter
          ButtonHandler={ButtonHandler}
          botonTodosActive={todosHandler}
          botonTodosActiveEstado={botonTodosActive}
        />
      </div>

      <div
        className="
            flex h-full w-full 
            rounded-2xl min-h-fit "
      >
        {botonTodosActive ? (
          <Products filterProducts={categorie} />
        ) : (
          <AllCategories />
        )}
      </div>
    </div>
  );
};

export default Tienda;
