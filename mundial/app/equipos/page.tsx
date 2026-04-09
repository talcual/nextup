

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

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