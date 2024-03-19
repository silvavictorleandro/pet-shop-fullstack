/*
  Warnings:

  - You are about to drop the column `created_at` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `tutors` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `tutors` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `tutors` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `tutors` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "dateOfBirth" INTEGER NOT NULL,
    "petTutorDoc" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "pets_petTutorDoc_fkey" FOREIGN KEY ("petTutorDoc") REFERENCES "tutors" ("tutorDoc") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_pets" ("breed", "dateOfBirth", "id", "name", "petTutorDoc", "type") SELECT "breed", "dateOfBirth", "id", "name", "petTutorDoc", "type" FROM "pets";
DROP TABLE "pets";
ALTER TABLE "new_pets" RENAME TO "pets";
CREATE TABLE "new_tutors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "tutorDoc" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_tutors" ("address", "email", "id", "name", "tutorDoc") SELECT "address", "email", "id", "name", "tutorDoc" FROM "tutors";
DROP TABLE "tutors";
ALTER TABLE "new_tutors" RENAME TO "tutors";
CREATE UNIQUE INDEX "tutors_tutorDoc_key" ON "tutors"("tutorDoc");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
