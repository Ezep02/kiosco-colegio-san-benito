import React from "react";
import kiosco from "../../kiosco.json";

const AllCategories = () => {
  return (
    <div className="flex flex-col gap-3 w-full items-center">
      {Object.entries(kiosco[0].kiosco_productos[0]).map(
        ([tipo, productos]) => (
          <div className="" key={tipo}>
            <div className="p-2">
              <h2 className="uppercase poppins-semibold-italic ">{tipo}</h2>
            </div>

            <div className="flex gap-2 flex-wrap">
              <div className="flex gap-3 flex-wrap px-2">
                {productos.map((producto, index) => (
                  <article
                    key={index}
                    className="h-56 w-44 bg-neutral-50 shadow-2xl rounded-xl"
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
          </div>
        )
      )}
    </div>
  );
};

export default AllCategories;
