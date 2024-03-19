-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "petTutorDoc" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "pets_petTutorDoc_fkey" FOREIGN KEY ("petTutorDoc") REFERENCES "tutors" ("tutorDoc") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pets" ("breed", "created_at", "dateOfBirth", "id", "name", "petTutorDoc", "type", "updated_at") SELECT "breed", "created_at", "dateOfBirth", "id", "name", "petTutorDoc", "type", "updated_at" FROM "pets";
DROP TABLE "pets";
ALTER TABLE "new_pets" RENAME TO "pets";
CREATE TABLE "new_tutors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "tutorDoc" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_tutors" ("address", "created_at", "email", "id", "name", "tutorDoc", "updated_at") SELECT "address", "created_at", "email", "id", "name", "tutorDoc", "updated_at" FROM "tutors";
DROP TABLE "tutors";
ALTER TABLE "new_tutors" RENAME TO "tutors";
CREATE UNIQUE INDEX "tutors_tutorDoc_key" ON "tutors"("tutorDoc");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
