/*
  Warnings:

  - You are about to drop the `tutors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `petTutorDoc` on the `pets` table. All the data in the column will be lost.
  - Added the required column `tutorName` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "tutors_tutorDoc_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tutors";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "tutorName" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "dateOfBirth" INTEGER NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_pets" ("breed", "createdAt", "dateOfBirth", "id", "name", "type", "updatedAt") SELECT "breed", "createdAt", "dateOfBirth", "id", "name", "type", "updatedAt" FROM "pets";
DROP TABLE "pets";
ALTER TABLE "new_pets" RENAME TO "pets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
