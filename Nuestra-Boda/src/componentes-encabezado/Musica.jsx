import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic } from "react-icons/fa";

const Musica = () => {
  const audioRef = useRef(null);
  const [showModal, setShowModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const activarMusica = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      setShowModal(false);
    }
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  const toggleMusica = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/musica.mp3" loop />

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                bg-white
                max-w-sm
                w-full
                rounded-[2rem]
                p-8
                text-center
                shadow-2xl
                border border-[#C45A00]/20
              "
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#496985]/10 flex items-center justify-center mb-5">
                <FaMusic className="text-[#496985] text-2xl" />
              </div>

              <h2 className="font-playfair text-2xl text-[#496985] mb-3">
                Esta invitación contiene música
              </h2>

              <p className="font-playfair text-[#496985]/75 text-sm leading-relaxed mb-6">
                Activa el sonido para disfrutar una mejor experiencia.
              </p>

              <button
                onClick={activarMusica}
                className="
                  w-full
                  bg-[#496985]
                  text-white
                  font-playfair
                  py-3
                  rounded-full
                  shadow-lg
                  hover:bg-[#3d5a72]
                  transition
                  mb-3
                "
              >
                Activar música
              </button>

              <button
                onClick={cerrarModal}
                className="
                  text-[#496985]/70
                  font-playfair
                  text-sm
                  hover:text-[#496985]
                  transition
                "
              >
                Continuar sin música
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showModal && (
        <button
          onClick={toggleMusica}
          className="
            fixed
            bottom-5
            right-5
            z-[9998]
            w-12 h-12
            rounded-full
            bg-[#496985]
            text-white
            flex items-center justify-center
            shadow-xl
            hover:scale-105
            transition
          "
        >
          <FaMusic className={isPlaying ? "animate-pulse" : ""} />
        </button>
      )}
    </>
  );
};

export default Musica;