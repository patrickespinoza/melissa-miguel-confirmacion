import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let nombreDesdeLink = "";
let pasesPermitidos = 1;

if (id) {
  try {
    const datos = JSON.parse(
      atob(id).split("").reverse().join("")
    );

    nombreDesdeLink = datos.nombre || "";
    pasesPermitidos = Number(datos.pases) || 1;
  } catch (error) {
    console.error("Link inválido");
  }
}

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState(nombreDesdeLink);
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const enviarConfirmacion = async () => {
    if (!nombreInvitado || !asistencia) {
      setError("Completa tu nombre y confirma asistencia");
      return;
    }

    if (invitados > pasesPermitidos) {
      setError(`Solo puedes confirmar hasta ${pasesPermitidos} ${pasesPermitidos === 1 ? "pase" : "pases"}`);
      return;
    }

    setError("");
    setLoading(true);

    const data = {
      nombre: nombreInvitado,
      asistencia,
      invitados,
      pasesAsignados: pasesPermitidos,
      mensaje: mensajeInvitado,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbz5LSVsOYtmJbA8IO4lBDo5VdfBdxVmgNFmpa5c5bkFW46WptGX3EoW_n0xA-ZaJQT1vQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setEnviado(true);

      setNombreInvitado(nombreDesdeLink);
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados(1);

      setTimeout(() => {
        setEnviado(false);
      }, 3000);

    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#496985] py-20 px-6 flex items-center justify-center overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative
          max-w-3xl
          w-full
          bg-white
          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_15px_50px_rgba(0,0,0,0.2)]
          px-8
          py-14
          sm:px-14
          sm:py-16
          text-center
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4E681]/20 via-transparent to-[#496985]/10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-5">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.25em] text-[#C45A00] text-xs sm:text-sm font-semibold"
          >
            Confirmación
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-playfair text-[#496985] leading-tight"
          >
            Confirma tu Asistencia
          </motion.h1>

          <div className="w-24 h-[2px] bg-[#C45A00] mx-auto"></div>

          <p className="text-[#496985]/75 text-base sm:text-lg max-w-md leading-relaxed">
            Será un honor contar con tu presencia en este día tan especial.
          </p>

          <input
            type="text"
            placeholder="Nombre y apellido"
            value={nombreInvitado}
            onChange={(e) => setNombreInvitado(e.target.value)}
            className="
              w-full
              max-w-md
              p-4
              border
              border-[#F4E681]
              rounded-2xl
              text-[#496985]
              placeholder:text-[#496985]/50
              bg-white
              focus:ring-2
              focus:ring-[#C45A00]
              outline-none
            "
          />

          <div className="flex flex-col gap-4 w-full max-w-md text-left">
            <label className="flex items-center gap-3 cursor-pointer bg-[#F4E681]/20 p-4 rounded-2xl border border-[#F4E681]">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                asistencia === "Sí asistiré"
                  ? "border-[#C45A00]"
                  : "border-[#496985]/40"
              }`}>
                {asistencia === "Sí asistiré" && (
                  <div className="w-2.5 h-2.5 bg-[#C45A00] rounded-full"></div>
                )}
              </div>

              <span className="text-[#496985]">Sí asistiré</span>

              <input
                type="radio"
                name="asistencia"
                value="Sí asistiré"
                onChange={() => setAsistencia("Sí asistiré")}
                className="hidden"
              />
            </label>

            <label className="flex items-center gap-3 cursor-pointer bg-[#F4E681]/20 p-4 rounded-2xl border border-[#F4E681]">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                asistencia === "No podré asistir"
                  ? "border-[#C45A00]"
                  : "border-[#496985]/40"
              }`}>
                {asistencia === "No podré asistir" && (
                  <div className="w-2.5 h-2.5 bg-[#C45A00] rounded-full"></div>
                )}
              </div>

              <span className="text-[#496985]">No podré asistir</span>

              <input
                type="radio"
                name="asistencia"
                value="No podré asistir"
                onChange={() => setAsistencia("No podré asistir")}
                className="hidden"
              />
            </label>
          </div>

          <select
            value={invitados}
            onChange={(e) => setInvitados(Number(e.target.value))}
            className="
              w-full
              max-w-md
              p-4
              border
              border-[#F4E681]
              rounded-2xl
              text-center
              text-[#496985]
              bg-white
              focus:ring-2
              focus:ring-[#C45A00]
              outline-none
            "
          >
            {[...Array(pasesPermitidos)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1} {index + 1 === 1 ? "pase" : "pases"}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Mensaje para los novios (opcional)"
            value={mensajeInvitado}
            onChange={(e) => setMensajeInvitado(e.target.value)}
            className="
              w-full
              max-w-md
              min-h-[120px]
              p-4
              border
              border-[#F4E681]
              rounded-2xl
              text-[#496985]
              placeholder:text-[#496985]/50
              bg-white
              focus:ring-2
              focus:ring-[#C45A00]
              outline-none
            "
          />

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[#C45A00] text-sm"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {enviado && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[#496985] text-sm font-semibold"
              >
                ✅ Confirmación enviada correctamente
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={enviarConfirmacion}
            disabled={loading}
            className={`mt-2 px-8 py-4 rounded-full shadow-lg transition duration-300 text-white flex items-center justify-center gap-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#C45A00] hover:bg-[#a94d00] hover:scale-105"
            }`}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Enviando...
              </>
            ) : (
              "Enviar Confirmación"
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Confirmacion;