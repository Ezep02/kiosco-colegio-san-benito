import React from "react";
import kiosco from "../../kiosco.json";

const AllCategories = () => {
  return (
    <div className="flex flex-col gap-3">

      {Object.entries(kiosco[0].kiosco_productos[0]).map(
        ([tipo, productos]) => (
          
          <div className="" key={tipo}>

            <div className="py-2">
              <h2 className="uppercase poppins-semibold-italic ">{tipo}</h2>
            </div>

            <div className="flex gap-2 flex-wrap">
              {productos.map((producto, index) => (
                
                <article key={index} className="h-60 w-60 bg-zinc-100 rounded-3xl">    
                  
                  <div className="w-full flex justify-center">
                    <h3>
                      {producto.nombre}
                    </h3>
                  </div>
                  
                  <div className="p-2">
                    <h4>${producto.precio}</h4>
                  </div>

                </article>
              ))}
            </div>
            
          </div>
        )
      )}
    </div>
  );
};

export default AllCategories;
