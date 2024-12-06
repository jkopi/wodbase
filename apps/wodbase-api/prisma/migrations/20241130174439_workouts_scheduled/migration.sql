/*
  Warnings:

  - Added the required column `scheduledTo` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "scheduledTo" TIMESTAMP(3) NOT NULL;
