import React from "react";

export default function Portada() {
  return (
    <section className="w-full bg-[#496985]">
      {/* MOBILE */}
      <div className="block md:hidden relative min-h-[100svh] text-white overflow-hidden">
        <img
          src="/01_PORTADA2.PNG"
          alt="Melissa y Miguel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25"></div>

        <div
          className="
            relative z-10
            min-h-[100svh]
            flex flex-col
            items-center
            justify-start
            text-center
            px-6
            pt-12
          "
        >
          <p className="uppercase tracking-[0.35em] text-[#F4E681] text-xs  font-semibold">
            Nuestra Boda
          </p>

          <h1 className="font-playfair text-4xl min-[390px]:text-5xl leading-tight drop-shadow-lg">
            Melissa
            <br />

            <span className="font-[DancingScript] text-[#C45A00] text-3xl min-[390px]:text-5xl">
              &
            </span>

            <br />
            Miguel
          </h1>

          <div className="w-20 h-[2px] bg-[#C45A00] mx-auto my-2"></div>

          <p className="uppercase tracking-[0.25em] text-[#F4E681] text-xs">
            Sábado
          </p>

          <p className=" tracking-[0.12em] text-2xl font-playfair drop-shadow-md">
            19 · 12 · 2026
          </p>

          <p className=" tracking-[0.25em] text-[11px] uppercase text-white/85">
            Nos casamos
          </p>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex relative h-screen text-white overflow-hidden">
        <img
          src="/01_PORTADA.JPEG"
          alt="Melissa y Miguel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25"></div>

        <div
          className="
            relative z-10
            w-full
            text-center
            px-6
            pt-16
          "
        >
          <p className="uppercase tracking-[0.35em] text-[#F4E681] text-sm mb-5 font-semibold">
            Nuestra Boda
          </p>

          <h1 className="font-playfair text-5xl lg:text-7xl leading-tight drop-shadow-lg">
            Melissa
            <span className="font-[DancingScript] text-[#C45A00] mx-5">
              &
            </span>
            Miguel
          </h1>

          <div className="w-28 h-[2px] bg-[#C45A00] mx-auto my-6"></div>

          <p className="uppercase tracking-[0.25em] text-[#F4E681] text-sm">
            Sábado
          </p>

          <p className="mt-3 tracking-[0.12em] text-3xl lg:text-4xl font-playfair drop-shadow-md">
            19 · 12 · 2026
          </p>

          <p className="mt-4 tracking-[0.25em] text-sm uppercase text-white/85">
            Nos casamos
          </p>
        </div>
      </div>
    </section>
  );
}