/*
  Warnings:

  - You are about to drop the `Blogs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Blogs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "blogs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    CONSTRAINT "blogs_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "comment" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    CONSTRAINT "comments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "blogs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
