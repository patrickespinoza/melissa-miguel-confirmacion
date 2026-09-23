import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Intinerario from './intinerario'
import Generador from './pages/generador'
import InicioReconfirmacion from './PortadaFrase'

const ruta = window.location.pathname.toLowerCase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    {ruta === "/generador" ? (
      <Generador />
    ) : (
      <div>
        <InicioReconfirmacion/>
        <Intinerario />
      </div>
    )}
  </main>
)