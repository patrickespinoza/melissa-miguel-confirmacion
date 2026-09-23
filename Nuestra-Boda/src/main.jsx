import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Portada from './portada'
import Intinerario from './intinerario'
import Generador from './pages/generador'

const ruta = window.location.pathname.toLowerCase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    {ruta === "/generador" ? (
      <Generador />
    ) : (
      <div>
        <Portada />
        <Intinerario />
      </div>
    )}
  </main>
)