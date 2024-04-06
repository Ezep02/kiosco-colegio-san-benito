import React, { useState } from "react";
import kiosco from "../../kiosco.json";
import { useEffect } from "react";

const AllCategories = ({ inputFilter }) => {
  const [inputProduct, setInputProduct] = useState([]);

  useEffect(() => {
    if (inputFilter) {
      const filteredProducts = Object.entries(
        kiosco[0].kiosco_productos[0]
      ).map(([tipo, producto]) =>
        producto.filter((produ) => {
          return produ.tipo
            .toLocaleLowerCase()
            .includes(inputFilter.toLocaleLowerCase());
        })
      );
      const filteredProductsFlat = filteredProducts.flat();

      setInputProduct(filteredProductsFlat);
    } else if (inputFilter === "") {
      const filteredProducts = Object.entries(
        kiosco[0].kiosco_productos[0]
      ).map(([tipo, producto]) => producto);

      const filteredProductsFlat = filteredProducts.flat();
      setInputProduct(filteredProductsFlat);
    }
  }, [inputFilter]);


  return (
    <div className="flex py-3 gap-2 justify-center min-h-80 w-full flex-wrap">
      {inputProduct.map((e) => (
        <div key={e.nombre}>
          <div className="flex justify-center">
              
              <article
                key={e.precio}
                className="h-56 w-44 bg-white shadow-lg rounded-xl flex-col gap-2"
              >
                <div className="flex justify-center py-4 h-2/3 w-full">
                  <img src={e.src} className="h-full w-full object-contain rounded-full " alt="" />
                </div>
               

                <div className="w-full flex justify-center poppins-semibold text-sm">
                  <h3>{e.nombre}</h3>
                </div>

                <div className="p-2">
                  <h4>${e.precio}</h4>
                </div>
              </article>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategories;
