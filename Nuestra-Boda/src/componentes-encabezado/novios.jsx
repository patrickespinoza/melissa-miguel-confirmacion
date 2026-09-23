import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <div className="w-full bg-[#496985] py-12 sm:py-20 px-3 sm:px-6 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
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
  px-6
  py-10
  sm:px-12
  lg:px-16
  text-center
  overflow-hidden
  flex
  flex-col
  justify-center
"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4E681]/20 via-transparent to-[#AFCBE8]/20 pointer-events-none"></div>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.18em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              uppercase
              text-[#496985]
              tracking-[0.18em]
              text-[10px]
              sm:text-sm
              font-playfair
              font-semibold
            "
          >
            Nuestra Boda
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-6
              text-2xl
              min-[390px]:text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              font-playfair
              text-[#496985]
              leading-tight
            "
          >
            Melissa del Rosario Ramírez Torres
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="
              my-3
              sm:my-4
              text-4xl
              sm:text-5xl
              text-[#C45A00]
              font-[DancingScript]
              leading-none
            "
          >
            &
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="
              text-2xl
              min-[390px]:text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              font-playfair
              text-[#496985]
              leading-tight
            "
          >
            Miguel Orlando Martínez Cabrera
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#C45A00] mx-auto mt-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="
              mt-6
              text-base
              sm:text-xl
              text-[#496985]/80
              font-playfair
              leading-relaxed
            "
          >
            Con el amor de nuestras familias
          </motion.p>

          <div className="grid grid-cols-2 gap-3 sm:gap-8 mt-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="
                bg-[#F4E681]/20
                rounded-2xl
                sm:rounded-3xl
                p-4
                sm:p-7
                shadow-md
              "
            >
              <h2
                className="
                  text-[#C45A00]
                  uppercase
                  tracking-[0.18em]
                  text-[10px]
                  sm:text-sm
                  mb-3
                  font-playfair
                  font-semibold
                "
              >
                Familia
              </h2>

              <p
                className="
                  text-base
                  sm:text-2xl
                  font-playfair
                  text-[#496985]
                  leading-tight
                "
              >
                Ramírez Torres
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
              className="
                bg-[#F4E681]/20
                rounded-2xl
                sm:rounded-3xl
                p-4
                sm:p-7
                shadow-md
              "
            >
              <h2
                className="
                  text-[#C45A00]
                  uppercase
                  tracking-[0.18em]
                  text-[10px]
                  sm:text-sm
                  mb-3
                  font-playfair
                  font-semibold
                "
              >
                Familia
              </h2>

              <p
                className="
                  text-base
                  sm:text-2xl
                  font-playfair
                  text-[#496985]
                  leading-tight
                "
              >
                Martínez Cabrera
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Novios;