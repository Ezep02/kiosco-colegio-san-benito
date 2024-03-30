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
          };
        })
    );

    setproductoPorCategoria(i);
  }, [categorie]);

  return (
    <div className="flex gap-2">
      {productoPorCategoria.length > 0 ? (
        <div>
          <div className="py-2">
            <h2 className="uppercase poppins-semibold-italic">
              {productoPorCategoria[0].categoria}
            </h2>
          </div>

          <div className="flex gap-2 flex-wrap">
            {productoPorCategoria.map((producto) => (
              <article
                key={producto.nombre}
                className="h-60 w-60 bg-zinc-100 rounded-3xl"
              >
                <div className="w-full flex justify-center">
                  <h3>{producto.nombre}</h3>
                </div>

                <div className="p-2">
                  <h4>${producto.precio}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <p>Problema al aplicar el filtro</p>
      )}
    </div>
  );
};

export default FilterByCategori;
