

import db from '../../../db/conection';


export default function Equipos() {
  return (
    <>
    <h2>Hola Equipos</h2>
    <ul>{
        db().map((equipo:any) => (
            <li key={equipo.nombre}>{equipo.nombre}</li>
        ))
    }
    </ul>
    </>
  )
}