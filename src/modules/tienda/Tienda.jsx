import React from "react";
import { useState } from "react";
import HeaderFilter from "../../components/HeaderFilter";
import Products from "../../components/Products";

const Tienda = () => {
  const [categorie, setCategorie] = useState("");

  const ButtonHandler = (e) => {
    const filterCategorie = e.target.attributes[1].value;
    setCategorie(filterCategorie);
  };

  return (
    <div className="h-screen p-4">
      <div>
        <h2 className="text-neutral-800 text-7xl poppins-bold-italic">Tienda</h2>
      </div>

      <div className="w-full flex justify-center">
        <input type="text" placeholder="buscar" />
      </div>

      <div>
        <HeaderFilter ButtonHandler={ButtonHandler} />
      </div>

      <div className='
            flex h-full w-full 
            bg-gray-200
            rounded-2xl p-5 '
        >
        <Products filterProducts={categorie} />
      </div>
    </div>
  );
};

export default Tienda;
