-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "tutorName" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_pets" ("breed", "createdAt", "dateOfBirth", "id", "name", "tutorName", "type", "updatedAt") SELECT "breed", "createdAt", "dateOfBirth", "id", "name", "tutorName", "type", "updatedAt" FROM "pets";
DROP TABLE "pets";
ALTER TABLE "new_pets" RENAME TO "pets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
