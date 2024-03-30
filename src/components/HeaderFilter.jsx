import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import kiosco from "../../kiosco.json";

const HeaderFilter = ({
  ButtonHandler,
  botonTodosActive,
  botonTodosActiveEstado,
}) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="flex gap-3 py-3">
      <motion.div className="overflow-hidden cursor-grab" ref={carousel}>
        <motion.div
          className="flex gap-2 items-center w-full flex-wrap"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {botonTodosActiveEstado && (
            <motion.button
              type="button"
              onClick={botonTodosActive}
              className="cursor-pointer px-3 py-2 rounded-3xl text-neutral-900 bg-neutral-50 text-wrap
                poppins-medium  active:scale-95
                "
            >
              Todos
            </motion.button>
          )}

          {Object.entries(kiosco[0].kiosco_productos[0]).map(
            ([tipo, productos]) =>
              productos.slice(0, 1).map((producto) => (
                <motion.button
                  key={producto}
                  className="cursor-pointer px-3 py-2 rounded-3xl text-neutral-900 bg-neutral-50 text-wrap
                    poppins-medium  active:scale-95
                  "
                  datatype={tipo}
                  onClick={ButtonHandler}
                  type="button"
                >
                  {producto.tipo}
                </motion.button>
              ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeaderFilter;
