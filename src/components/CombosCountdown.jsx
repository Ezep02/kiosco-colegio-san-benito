import React, { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2024-04-06T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const dias = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const horas = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const segundos = Math.floor((totalTimeLeft / 1000) % 60);
  return { dias, horas, minutos, segundos };
};

const CombosCountdown = ()  => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown flex flex-col">
      <div className="w-full justify-center flex ">
        <h2 className="text-neutral-300 
          text-sm xl:text-xl md:text-xl lg:text-xl 
          
          ">
          Proxima actualizacion de combos
        </h2>
      </div>
      
      <div className="w-full flex flex-row justify-center  gap-2">
      
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div
              className="w-[calc(100% / 4)] flex flex-col items-center justify-center py-4"
              key={label}
            >
              <div className="text-2xl bg-orange-500 text-white flex justify-center items-center 
                    rounded-xl w-[50px] h-[50px] font-semibold 
                    sm:h-20 sm:w-20
                    md:h-24 md:w-24
                    lg:h-28 lg:w-28
                    xl:h-28 xl:w-28
                  ">
                <span>{ value < 10 ? `0`+value : value} </span>
              </div>
              <span className="text-[10px] uppercase poppins-semibold text-neutral-500"> {label} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CombosCountdown;
