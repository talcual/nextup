

import { prisma } from '../../db/prisma';

export default async function Equipos() {

  const equipos = await prisma.user.findMany();

  return (
    <>
      <h2>Hola Equipos</h2>
      <ul>
        {equipos.map((equipo:any) => (
          <li key={equipo.id}>{equipo.name}</li>
        ))}
      </ul>
    </>
  )
}