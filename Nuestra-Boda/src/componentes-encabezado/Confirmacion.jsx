import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz5LSVsOYtmJbA8IO4lBDo5VdfBdxVmgNFmpa5c5bkFW46WptGX3EoW_n0xA-ZaJQT1vQ/exec";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let nombreDesdeLink = "";
let pasesPermitidos = 1;

if (id) {
  try {
    const datos = JSON.parse(atob(id).split("").reverse().join(""));

    nombreDesdeLink = datos.nombre || "";

    const pases = Number(datos.pases);
    pasesPermitidos =
      Number.isInteger(pases) && pases > 0 ? pases : 1;
  } catch (error) {
    console.error("Link inválido", error);
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

  const cambiarAsistencia = (respuesta) => {
    setAsistencia(respuesta);
    setInvitados(respuesta === "No podré asistir" ? 0 : 1);
    setError("");
  };

  const enviarConfirmacion = async () => {
    if (loading) return;

    const nombre = nombreInvitado.trim();

    if (!nombre || !asistencia) {
      setError("Completa tu nombre e indica si asistirás.");
      return;
    }

    if (asistencia === "Sí asistiré" && invitados > pasesPermitidos) {
      setError(
        `Solo puedes confirmar hasta ${pasesPermitidos} ${
          pasesPermitidos === 1 ? "pase" : "pases"
        }.`
      );
      return;
    }

    setError("");
    setLoading(true);

    const data = {
      tipo: "reconfirmacion",
      nombre,
      asistencia,
      invitados: asistencia === "No podré asistir" ? 0 : invitados,
      pasesAsignados: pasesPermitidos,
      mensaje: mensajeInvitado.trim(),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setEnviado(true);
      setMensajeInvitado("");

      // Se mantiene el nombre para evitar que tengan que escribirlo otra vez
      // si quieren revisar la página.
    } catch (err) {
      console.error(err);
      setError("No se pudo enviar. Revisa tu conexión e inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="reconfirmacion"
      className="flex w-full scroll-mt-4 items-center justify-center overflow-hidden bg-[#496985] px-4 py-20 sm:px-6"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative w-full max-w-3xl overflow-hidden bg-white
          px-6 py-14 text-center
          rounded-tl-[3rem] rounded-br-[3rem]
          rounded-tr-[1rem] rounded-bl-[1rem]
          shadow-[0_15px_50px_rgba(0,0,0,0.2)]
          sm:rounded-tl-[4rem] sm:rounded-br-[4rem]
          sm:px-14 sm:py-16
        "
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F4E681]/20 via-transparent to-[#496985]/10" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-5">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C45A00] sm:text-sm"
          >
            Reconfirmación
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl leading-tight text-[#496985] sm:text-5xl md:text-6xl"
          >
            Reconfirma tu Asistencia
          </motion.h1>

          <div className="mx-auto h-[2px] w-24 bg-[#C45A00]" />

          <p className="max-w-md text-base leading-relaxed text-[#496985]/75 sm:text-lg">
            Ayúdanos a preparar cada detalle de nuestro gran día.
          </p>

          <input
            type="text"
            placeholder="Nombre y apellido"
            value={nombreInvitado}
            onChange={(e) => setNombreInvitado(e.target.value)}
            disabled={enviado}
            className="
              w-full max-w-md rounded-2xl border border-[#F4E681]
              bg-white p-4 text-[#496985]
              placeholder:text-[#496985]/50
              outline-none focus:ring-2 focus:ring-[#C45A00]
              disabled:opacity-60
            "
          />

          <div className="flex w-full max-w-md flex-col gap-4 text-left">
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#F4E681] bg-[#F4E681]/20 p-4">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition ${
                  asistencia === "Sí asistiré"
                    ? "border-[#C45A00]"
                    : "border-[#496985]/40"
                }`}
              >
                {asistencia === "Sí asistiré" && (
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C45A00]" />
                )}
              </span>

              <span className="text-[#496985]">Sí asistiré</span>

              <input
                type="radio"
                name="asistencia"
                value="Sí asistiré"
                checked={asistencia === "Sí asistiré"}
                onChange={() => cambiarAsistencia("Sí asistiré")}
                disabled={enviado}
                className="sr-only"
              />
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#F4E681] bg-[#F4E681]/20 p-4">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition ${
                  asistencia === "No podré asistir"
                    ? "border-[#C45A00]"
                    : "border-[#496985]/40"
                }`}
              >
                {asistencia === "No podré asistir" && (
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C45A00]" />
                )}
              </span>

              <span className="text-[#496985]">No podré asistir</span>

              <input
                type="radio"
                name="asistencia"
                value="No podré asistir"
                checked={asistencia === "No podré asistir"}
                onChange={() => cambiarAsistencia("No podré asistir")}
                disabled={enviado}
                className="sr-only"
              />
            </label>
          </div>

          {asistencia === "Sí asistiré" && (
            <div className="w-full max-w-md">
              <label
                htmlFor="invitados"
                className="mb-2 block text-sm text-[#496985]"
              >
                ¿Cuántas personas asistirán? Tienes hasta{" "}
                {pasesPermitidos}{" "}
                {pasesPermitidos === 1 ? "pase" : "pases"}.
              </label>

              <select
                id="invitados"
                value={invitados}
                onChange={(e) => setInvitados(Number(e.target.value))}
                disabled={enviado}
                className="
                  w-full rounded-2xl border border-[#F4E681]
                  bg-white p-4 text-center text-[#496985]
                  outline-none focus:ring-2 focus:ring-[#C45A00]
                  disabled:opacity-60
                "
              >
                {Array.from(
                  { length: pasesPermitidos },
                  (_, index) => index + 1
                ).map((cantidad) => (
                  <option key={cantidad} value={cantidad}>
                    {cantidad} {cantidad === 1 ? "pase" : "pases"}
                  </option>
                ))}
              </select>
            </div>
          )}


          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                role="alert"
                className="text-sm text-[#C45A00]"
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
                role="status"
                className="text-sm font-semibold text-[#496985]"
              >
                Gracias, recibimos tu reconfirmación.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={enviarConfirmacion}
            disabled={loading || enviado}
            className={`mt-2 flex items-center justify-center gap-2 rounded-full px-8 py-4 text-white shadow-lg transition duration-300 ${
              loading || enviado
                ? "cursor-not-allowed bg-gray-400"
                : "bg-[#C45A00] hover:scale-105 hover:bg-[#a94d00]"
            }`}
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Enviando...
              </>
            ) : enviado ? (
              "Reconfirmación enviada"
            ) : (
              "Enviar reconfirmación"
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Confirmacion;