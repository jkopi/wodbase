-- CreateEnum
CREATE TYPE "InfoType" AS ENUM ('IMPORTANT_INFO', 'GENERAL_INFO', 'WEEKLY_INFO', 'CONTACT_INFO');

-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_gymId_fkey";

-- CreateTable
CREATE TABLE "GymInfo" (
    "id" TEXT NOT NULL,
    "type" "InfoType" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gymId" TEXT NOT NULL,

    CONSTRAINT "GymInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GymInfo" ADD CONSTRAINT "GymInfo_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE CASCADE ON UPDATE CASCADE;
