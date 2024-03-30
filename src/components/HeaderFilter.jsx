import React from "react";

import kiosco from "../../kiosco.json";

const HeaderFilter = ({ ButtonHandler }) => {
  return (
    <div className="flex gap-3 py-3">
      {Object.entries(kiosco[0].kiosco_productos[0]).map(([tipo, productos]) =>
        productos.slice(0, 1).map((producto, index) => (
          <button
            key={index}
            className="cursor-pointer px-3 py-2 rounded-3xl text-neutral-900 bg-neutral-50 text-wrap
              poppins-medium shadow-button active:scale-95 outline-none
              border-none
              "
            datatype={tipo}
            onClick={ButtonHandler}
            type="button"
          >
            {producto.tipo}
          </button>
        ))
      )}
    </div>
  );
};

export default HeaderFilter;
