import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Regalos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const copiarMesa = () => {
    navigator.clipboard.writeText("52017657");

    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <>
      <section className="relative bg-[#496985] py-24 px-6 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.18em] text-[#F4E681] text-xs sm:text-sm font-playfair font-semibold">
            Regalos
          </p>

          <h1 className="font-playfair text-white text-4xl sm:text-5xl md:text-6xl mt-4">
            Mesa de Regalos
          </h1>

          <div className="w-24 h-[2px] bg-[#C45A00] mx-auto mt-6"></div>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-playfair">
            Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con
            nosotros, te compartimos dos opciones para acompañarnos en esta nueva
            etapa.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* OPCIÓN 1: MESA DE REGALOS */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white/10
                border border-[#F4E681]/60
                rounded-tl-[3rem]
                rounded-br-[3rem]
                rounded-tr-[1rem]
                rounded-bl-[1rem]
                p-8
                text-center
                backdrop-blur-md
                shadow-[0_15px_50px_rgba(0,0,0,0.15)]
              "
            >
              <img
                src="/RegaloBlanco.png"
                alt="Mesa de regalos"
                className="w-24 h-24 object-contain mx-auto mb-6"
              />

              <h2 className="font-playfair text-[#F4E681] text-2xl sm:text-3xl">
                Mesa de Regalos
              </h2>

              <p className="mt-4 text-white/85 text-sm sm:text-base leading-relaxed font-playfair">
                Hemos preparado una mesa de regalos en Liverpool para comenzar
                esta nueva etapa juntos.
              </p>

              <button
                onClick={() => setMostrarModal(true)}
                className="
                  mt-8
                  bg-[#C45A00]
                  hover:bg-[#a94d00]
                  text-white
                  px-8
                  py-3
                  rounded-full
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  font-playfair
                "
              >
                Ver Mesa de Regalos
              </button>
            </motion.div>

            {/* OPCIÓN 2: LLUVIA DE SOBRES */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white/10
                border border-[#F4E681]/60
                rounded-tl-[3rem]
                rounded-br-[3rem]
                rounded-tr-[1rem]
                rounded-bl-[1rem]
                p-8
                text-center
                backdrop-blur-md
                shadow-[0_15px_50px_rgba(0,0,0,0.15)]
              "
            >
              <img
                src="/Sobre.png"
                alt="Lluvia de sobres"
                className="w-24 h-24 object-contain mx-auto mb-6"
              />

              <h2 className="font-playfair text-[#F4E681] text-2xl sm:text-3xl">
                Lluvia de Sobres
              </h2>

              <p className="mt-4 text-white/85 text-sm sm:text-base leading-relaxed font-playfair">
                O bien, una lluvia de sobres será recibida con mucho cariño el
                día de nuestra celebración.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              bg-black/60
              backdrop-blur-md
              flex
              items-center
              justify-center
              z-50
              px-4
            "
            onClick={() => setMostrarModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 60 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div
                className="
                  relative
                  w-[92vw]
                  max-w-[390px]
                  min-h-[260px]
                  rounded-[28px]
                  overflow-hidden
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  p-7
                  sm:p-8
                  bg-white
                  border
                  border-[#F4E681]
                  text-center
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4E681]/25 via-white to-[#496985]/10"></div>

                <div className="relative">
                  <p className="uppercase tracking-[0.18em] text-[#C45A00] text-xs font-playfair font-semibold">
                    Liverpool
                  </p>

                  <h2 className="font-playfair text-[#496985] text-3xl sm:text-4xl mt-3">
                    Mesa de Regalos
                  </h2>

                  <div className="w-20 h-[2px] bg-[#C45A00] mx-auto mt-5"></div>

                  <p className="mt-6 text-[#496985]/75 text-sm sm:text-base leading-relaxed font-playfair">
                    Número de evento
                  </p>

                  <p className="mt-2 text-[#496985] text-2xl sm:text-3xl font-playfair tracking-[0.12em]">
                    52017657
                  </p>

                  <button
                    onClick={copiarMesa}
                    className="
                      mt-7
                      bg-[#C45A00]
                      text-white
                      px-7
                      py-3
                      rounded-full
                      shadow-lg
                      hover:scale-105
                      transition-all
                      duration-300
                      font-playfair
                    "
                  >
                    {copiado ? "Número copiado" : "Copiar número"}
                  </button>

                  <a
                    href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/52017657"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      block
                      mt-4
                      text-[#C45A00]
                      underline
                      underline-offset-4
                      text-sm
                      font-playfair
                    "
                  >
                    Ir a Liverpool
                  </a>
                </div>
              </div>

              <button
                onClick={() => setMostrarModal(false)}
                className="
                  absolute
                  -top-3
                  -right-3
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  shadow-lg
                  text-black
                  hover:scale-110
                  transition
                "
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Regalos;