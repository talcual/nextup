-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "equipo" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
