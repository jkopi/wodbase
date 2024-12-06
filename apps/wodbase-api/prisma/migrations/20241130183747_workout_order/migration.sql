/*
  Warnings:

  - Added the required column `order` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "WorkoutType" ADD VALUE 'WORKOUT';

-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "order" INTEGER NOT NULL;
