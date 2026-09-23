import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contador = () => {
  const fechaBoda = new Date("2026-12-19T14:30:00").getTime();

  const calcularTiempo = () => {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      };
    }

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diferencia / (1000 * 60)) % 60),
      segundos: Math.floor((diferencia / 1000) % 60),
    };
  };

  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const items = [
    { label: "Días", value: tiempo.dias },
    { label: "Horas", value: tiempo.horas },
    { label: "Minutos", value: tiempo.minutos },
    { label: "Segundos", value: tiempo.segundos },
  ];

  return (
    <section className="w-full bg-[#496985] py-16 sm:py-20 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          relative
          max-w-6xl
          w-full
          min-h-[520px]
          md:h-[520px]
          bg-white
          rounded-tl-[2.5rem]
          sm:rounded-tl-[4rem]
          rounded-br-[2.5rem]
          sm:rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_15px_50px_rgba(0,0,0,0.12)]
          overflow-hidden
          px-6
          py-12
          sm:px-12
          lg:px-16
          text-center
          flex
          flex-col
          justify-center
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4E681]/20 via-transparent to-[#AFCBE8]/20 pointer-events-none"></div>

        <div className="relative z-10">
          <p className="uppercase tracking-[0.18em] text-[#C45A00] text-xs sm:text-sm font-playfair font-semibold">
            Cuenta regresiva
          </p>

          <h2 className="font-playfair text-[#496985] text-4xl sm:text-5xl md:text-6xl mt-4 leading-tight">
            Faltan
          </h2>

          <div className="w-24 h-[2px] bg-[#C45A00] mx-auto mt-6"></div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="
                  bg-[#F4E681]/20
                  border
                  border-[#F4E681]
                  rounded-3xl
                  px-4
                  py-7
                  sm:py-9
                  shadow-md
                "
              >
                <p className="font-playfair text-[#496985] text-4xl sm:text-5xl lg:text-6xl leading-none">
                  {item.value}
                </p>

                <p className="mt-3 uppercase tracking-[0.18em] text-[#C45A00] text-[10px] sm:text-xs font-playfair font-semibold">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 font-playfair text-[#496985]/75 text-base sm:text-lg">
            Para celebrar juntos nuestro gran día
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contador;