import React, {useEffect, useState} from "react";
import Slider from "../../components/Slider";
import CombosCountdown from "../../components/CombosCountdown";
import CombosTarjetaXL from "../../components/CombosTarjetaXL";

const Combos = () => {

  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  useEffect(() => {
      // Función para actualizar el estado del ancho de pantalla
      const actualizarAnchoPantalla = () => {
        setAnchoPantalla(window.innerWidth);
      };

      // Agregar un listener para el evento de cambio de tamaño de la ventana
      window.addEventListener("resize", actualizarAnchoPantalla);

      // Limpiar el listener cuando el componente se desmonte
      return () => {
        window.removeEventListener("resize", actualizarAnchoPantalla);
      };
    }, []);


  return (
    <div className="h-full py-4 px-6 flex flex-col gap-3 CUSTOM-BG-HOME rounded-t-3xl " id="combos">

      <div className="rounded-3xl flex flex-col items-center justify-center bg-neutral-950 shadow-card 
          xl:flex-row 
      ">

        <div className="flex justify-center w-full p-5 ">
          <h2 className="text-xl poppins-bold text-neutral-100 
              xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl
            ">
              Combos de la semana
            </h2>
        </div>

        <article className="w-full rounded-3xl">
          <CombosCountdown />
        </article>
      </div>

      <div className="h-96 py-5 w-full flex justify-center rounded-3xl ">
        
        {
          anchoPantalla < 800 ?  (
            <Slider />
            ) : (
              
            <CombosTarjetaXL/>           
          )
        }

        
      </div>
    </div>
  );
};

export default Combos;
