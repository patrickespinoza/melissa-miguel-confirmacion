import React from "react";
import { motion } from "framer-motion";

const Itinerario2 = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="w-full bg-[#496985] py-20 px-6 flex items-center justify-center overflow-hidden">
      {/* CONTENEDOR */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          max-w-6xl mx-auto
          bg-white
          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_15px_50px_rgba(0,0,0,0.2)]
          p-10 sm:p-16
          relative
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4E681]/20 via-transparent to-[#496985]/10 pointer-events-none"></div>

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative text-center"
        >
          <p
            className="
              uppercase
              tracking-[0.18em]
              text-[#C45A00]
              text-xs
              sm:text-sm
              font-playfair
              font-semibold
            "
          >
            Nuestro Día
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-playfair
              text-[#496985]
              mt-4
            "
          >
            Itinerario
          </h1>

          <div className="w-24 h-[2px] bg-[#C45A00] mx-auto mt-6"></div>
        </motion.div>

        {/* FOTO + TARJETA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            mt-14
            grid grid-cols-1 lg:grid-cols-2
            gap-8
            items-center
          "
        >
          {/* TARJETA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              relative
              bg-[#F4E681]/20
              backdrop-blur-md
              rounded-3xl
              p-8 sm:p-10
              shadow-lg
              border border-[#F4E681]
              text-center
            "
          >
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#C45A00]"></div>

            <img
              src="/arco-de-la-boda.png"
              alt="Ceremonia civil"
              className="h-20 w-20 md:h-24 md:w-24 mx-auto mt-6"
            />

            <h2
              className="
                mt-6
                text-3xl
                sm:text-4xl
                font-playfair
                text-[#496985]
              "
            >
              Ceremonia civil
            </h2>

            <p
              className="
                mt-4
                text-[#C45A00]
                font-playfair
                text-2xl
                sm:text-3xl
              "
            >
              2:30 p.m.
            </p>

            <p
              className="
                mt-5
                text-[#496985]/75
                text-base
                sm:text-lg
                leading-relaxed
                max-w-md
                mx-auto
                font-playfair
              "
            >
              Les agradecemos su puntualidad para poder iniciar la ceremonia
              acompañados de nuestros seres queridos.
            </p>

            <div className="w-24 h-[2px] bg-[#C45A00] mx-auto mt-8"></div>
          </motion.div>

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              h-[350px]
              md:h-[450px]
              rounded-tl-[3rem]
              rounded-br-[3rem]
              overflow-hidden
              shadow-lg
            "
          >
            <img
              src="/03.JPEG"
              alt="Ceremonia civil"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Itinerario2;