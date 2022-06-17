/*
  Warnings:

  - You are about to drop the column `content` on the `blogs` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "content" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subtitle" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    CONSTRAINT "content_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blogs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_blogs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "blogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_blogs" ("createdAt", "id", "image", "title", "updatedAt", "userId") SELECT "createdAt", "id", "image", "title", "updatedAt", "userId" FROM "blogs";
DROP TABLE "blogs";
ALTER TABLE "new_blogs" RENAME TO "blogs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
