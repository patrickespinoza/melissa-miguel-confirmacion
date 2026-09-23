import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  dia,
  fecha,
  mesAnio,
  hora,
  lugar,
  direccion,
  ubicacion,
  titulo,
}) => {
  return (
    <div className="w-full bg-[#496985] py-10 sm:py-20 px-3 sm:px-6 flex flex-col items-center justify-center">
      {/* FECHA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.18em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            text-[#F4E681]
            uppercase
            text-[10px]
            sm:text-sm
            font-playfair
            font-semibold
            tracking-[0.18em]
          "
        >
          {dia}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-2
            sm:mt-3
            text-5xl
            sm:text-7xl
            md:text-8xl
            font-playfair
            text-white
            leading-none
            drop-shadow-lg
          "
        >
          {fecha}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          viewport={{ once: true }}
          className="
            text-[#F4E681]
            text-lg
            sm:text-2xl
            font-playfair
            tracking-[0.18em]
            mt-2
            sm:mt-3
          "
        >
          {mesAnio}
        </motion.p>
      </motion.div>

      {/* TARJETA UNIFICADA */}
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          relative
          max-w-6xl
          w-full

          h-auto
          md:h-[720px]

          bg-white

          rounded-tl-[2.5rem]
          sm:rounded-tl-[4rem]

          rounded-br-[2.5rem]
          sm:rounded-br-[4rem]

          rounded-tr-[1rem]
          rounded-bl-[1rem]

          shadow-[0_15px_50px_rgba(0,0,0,0.12)]
          border border-[#F4E681]

          px-6
          py-9
          sm:px-12
          sm:py-12
          lg:px-16

          overflow-hidden

          flex
          flex-col
          justify-center
        "
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 h-[2px] bg-[#C45A00]"
        />

        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            viewport={{ once: true }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-playfair
              text-[#496985]
              tracking-wide
            "
          >
            {titulo}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="h-[2px] mx-auto bg-[#C45A00] mt-4 sm:mt-5"
          />
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col items-center text-center space-y-7 sm:space-y-10">
          {/* HORA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p
              className="
                text-[#C45A00]
                uppercase
                tracking-[0.18em]
                text-xs
                sm:text-sm
                font-playfair
                font-semibold
              "
            >
              Hora
            </p>

            <p
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-playfair
                text-[#496985]
                mt-2
                sm:mt-3
              "
            >
              {hora}
            </p>
          </motion.div>

          {/* LUGAR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: true }}
          >
            <p
              className="
                text-[#C45A00]
                uppercase
                tracking-[0.18em]
                text-xs
                sm:text-sm
                font-playfair
                font-semibold
              "
            >
              Lugar
            </p>

            <p
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-playfair
                text-[#496985]
                mt-2
                sm:mt-3
              "
            >
              {lugar}
            </p>

            <p
              className="
                font-playfair
                text-[#496985]/70
                mt-3
                sm:mt-4
                leading-relaxed
                text-sm
                sm:text-lg
                max-w-2xl
                mx-auto
              "
            >
              {direccion}
            </p>
          </motion.div>

          {/* BOTÓN */}
          <motion.a
            href={ubicacion}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="
              bg-[#C45A00]
              text-white
              px-8
              py-3
              rounded-full
              shadow-lg
              tracking-wide
              font-playfair
              transition
              duration-300
            "
          >
            Ver Ubicación
          </motion.a>
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 h-[2px] bg-[#C45A00]"
        />
      </motion.div>
    </div>
  );
};

export default Celebracion;