-- AlterTable
ALTER TABLE "tutors" ADD COLUMN "deleted_at" DATETIME;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "dateOfBirth" INTEGER NOT NULL,
    "petTutorDoc" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME,
    CONSTRAINT "pets_petTutorDoc_fkey" FOREIGN KEY ("petTutorDoc") REFERENCES "tutors" ("tutorDoc") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_pets" ("breed", "created_at", "dateOfBirth", "id", "name", "petTutorDoc", "type", "updated_at") SELECT "breed", "created_at", "dateOfBirth", "id", "name", "petTutorDoc", "type", "updated_at" FROM "pets";
DROP TABLE "pets";
ALTER TABLE "new_pets" RENAME TO "pets";
CREATE UNIQUE INDEX "pets_petTutorDoc_key" ON "pets"("petTutorDoc");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
