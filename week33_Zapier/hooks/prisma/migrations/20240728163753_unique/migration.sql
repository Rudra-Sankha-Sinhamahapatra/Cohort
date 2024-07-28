/*
  Warnings:

  - A unique constraint covering the columns `[zapRunId]` on the table `ZapRunOutBox` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ZapRunOutBox_zapRunId_key" ON "ZapRunOutBox"("zapRunId");
