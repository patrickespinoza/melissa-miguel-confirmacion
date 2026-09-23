// InicioReconfirmacion.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";

const InicioReconfirmacion = ({ fechaLimite }) => {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#496985] px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-3xl overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl bg-white px-6 py-12 text-center shadow-2xl sm:rounded-tl-[4rem] sm:rounded-br-[4rem] sm:px-12 sm:py-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F4E681]/25 via-transparent to-[#496985]/10" />

        <div className="relative z-10">
          <Heart
            className="mx-auto mb-5 text-[#C45A00]"
            size={30}
            strokeWidth={1.5}
          />

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C45A00] sm:text-sm">
            Melissa & Miguel
          </p>

          <h1 className="font-playfair text-4xl leading-tight text-[#496985] sm:text-5xl">
            ¡Ya falta poco para la boda!
          </h1>

          <div className="mx-auto my-7 h-[2px] w-24 bg-[#C45A00]" />

          <div className="mx-auto max-w-xl space-y-5 text-base leading-relaxed text-[#496985] sm:text-lg">
            <p>
              Para ayudarnos a organizar todos los detalles de ese día, nos
              gustaría reconfirmar tu asistencia.
            </p>

            <p>
              Te agradeceríamos mucho que nos confirmaras{" "}
              <strong className="text-[#C45A00]">
                antes del 15 de Noviembre
              </strong>{" "}
              mediante el formulario que encontrarás abajo.
            </p>

            <p>
              Si por alguna razón tus planes han cambiado, no hay ningún
              problema; solamente te pedimos que nos lo hagas saber para poder
              organizar correctamente los lugares.
            </p>

            <p className="font-playfair text-xl text-[#496985]">
              ¡Muchas gracias!
            </p>
          </div>

          <a
            href="#reconfirmacion"
            className="mx-auto mt-9 inline-flex items-center gap-2 rounded-full bg-[#C45A00] px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-[#a94d00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C45A00]"
          >
            Reconfirmar asistencia
            <ArrowDown size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default InicioReconfirmacion;