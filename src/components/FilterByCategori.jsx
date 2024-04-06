import React, { useState, useEffect } from "react";
import kiosco from "../../kiosco.json";

const FilterByCategori = ({ categorie }) => {
  const [productoPorCategoria, setproductoPorCategoria] = useState([]);

  useEffect(() => {
    const i = [];

    Object.entries(kiosco[0].kiosco_productos[0]).map(
      ([tipo, productos]) =>
        tipo === categorie &&
        productos.forEach((value, index) => {
          i[index] = {
            categoria: tipo,
            nombre: value.nombre,
            precio: value.precio,
            tipo: value.tipo,
            src: value.src
          };
        })
    );

    setproductoPorCategoria(i);
  }, [categorie]);
  console.log(productoPorCategoria)

  return (
    <div className="flex gap-2 justify-center min-h-80 p-4">
      {productoPorCategoria.length > 0 ? (
        <div className="flex py-3 gap-2 justify-center min-h-80 w-full flex-wrap">
        {productoPorCategoria.map((e) => (
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
      ) : (
        <p>Problema al aplicar el filtro</p>
      )}
    </div>
  );
};

export default FilterByCategori;
