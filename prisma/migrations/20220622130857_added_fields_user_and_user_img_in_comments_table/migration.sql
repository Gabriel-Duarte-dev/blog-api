/*
  Warnings:

  - Added the required column `user` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userImg` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "user" TEXT NOT NULL,
    "userImg" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    CONSTRAINT "comments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blogs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comments" ("blogId", "comment", "createdAt", "id", "updatedAt") SELECT "blogId", "comment", "createdAt", "id", "updatedAt" FROM "comments";
DROP TABLE "comments";
ALTER TABLE "new_comments" RENAME TO "comments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
