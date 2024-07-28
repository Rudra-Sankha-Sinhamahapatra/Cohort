/*
  Warnings:

  - Added the required column `metadata` to the `zapRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "zapRun" ADD COLUMN     "metadata" JSONB NOT NULL;
