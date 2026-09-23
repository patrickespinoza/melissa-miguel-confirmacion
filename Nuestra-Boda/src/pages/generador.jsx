import { useState } from "react";

export default function Generador() {
  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState(1);
  const [link, setLink] = useState("");

  const generarLink = () => {
    if (!nombre) return;

    const payload = JSON.stringify({
      nombre,
      pases,
    });

    // Codificación simple + reversa
    const id = btoa(payload.split("").reverse().join(""));

    const url = `${window.location.origin}/?id=${encodeURIComponent(id)}`;

    setLink(url);
  };

  const copiarLink = async () => {
    if (!link) return;

    const mensaje = `Familia ${nombre}:

Con mucho cariño les compartimos nuestra invitación.

Se han reservado ${pases} ${
      pases === 1 ? "lugar" : "lugares"
    } para ustedes.

Esperamos contar con su presencia en este día tan especial.

👇 Ver invitación:
${link}`;

    await navigator.clipboard.writeText(mensaje);

    alert("Mensaje para WhatsApp copiado ✅");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Generador de Invitaciones
        </h1>

        <input
          type="text"
          placeholder="Nombre o familia"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="number"
          min="1"
          value={pases}
          onChange={(e) => setPases(Number(e.target.value))}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button
          onClick={generarLink}
          className="w-full bg-[#6b705c] text-white py-3 rounded-lg mb-4"
        >
          Generar Link
        </button>

        {link && (
          <>
            <div className="bg-gray-100 p-3 rounded-lg break-all text-sm mb-4">
              {link}
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-sm whitespace-pre-line mb-4">
              {`Familia ${nombre}:

Con mucho cariño les compartimos nuestra invitación.

Se han reservado ${pases} ${
                pases === 1 ? "lugar" : "lugares"
              } para ustedes.

Esperamos contar con su presencia en este día tan especial.

👇 Ver invitación:
${link}`}
            </div>

            <button
              onClick={copiarLink}
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Copiar para WhatsApp
            </button>
          </>
        )}

      </div>
    </div>
  );
}