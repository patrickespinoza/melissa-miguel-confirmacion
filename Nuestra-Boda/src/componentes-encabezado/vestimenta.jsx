import React from "react";
import { motion } from "framer-motion";

const Vestimenta = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
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
    <div className="w-full bg-[#496985] py-12 sm:py-20 px-3 sm:px-6 flex items-center justify-center overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative max-w-6xl w-full
          bg-white
          rounded-tl-[2.5rem] sm:rounded-tl-[4rem]
          rounded-br-[2.5rem] sm:rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_15px_50px_rgba(0,0,0,0.12)]
          overflow-hidden
          grid grid-cols-1 md:grid-cols-2
        "
      >
        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            order-2 md:order-1
            h-[420px]
            sm:h-[520px]
            md:h-full
            md:min-h-[600px]
          "
        >
          <img
            src="/Vestimenta.JPEG"
            alt="Vestimenta"
            className="
              w-full h-full
              object-contain
              object-center
              bg-white
            "
          />

          <div className="absolute inset-0 bg-[#496985]/10"></div>
        </motion.div>

        {/* TEXTO */}
        <div
          className="
            order-1 md:order-2
            flex flex-col items-center justify-center
            text-center
            px-5 py-12
            sm:p-10
            lg:p-16
          "
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.16em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              uppercase
              text-[10px]
              sm:text-sm
              tracking-[0.16em]
              text-[#C45A00]
              font-playfair
              font-semibold
            "
          >
            Código de Vestimenta
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              font-playfair
              text-[#496985]
              mt-4
              leading-tight
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Cóctel de día
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4.5rem" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#C45A00] mt-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="
              mt-5
              text-sm
              sm:text-lg
              md:text-xl
              text-[#496985]/80
              leading-relaxed
              max-w-md
              font-playfair
            "
          >
            Queremos celebrar con un ambiente elegante y relajado. Te invitamos
            a vestir de manera formal, privilegiando prendas ligeras y cómodas.
            No es necesario traje completo ni vestido de gala. Te pedimos evitar
            el blanco, negro y tonalidades similares. Como referencia,
            compartimos una paleta de colores sugeridos.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Vestimenta;