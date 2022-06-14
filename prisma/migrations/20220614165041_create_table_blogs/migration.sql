-- CreateTable
CREATE TABLE "Blogs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "blogId" TEXT NOT NULL,
    CONSTRAINT "Blogs_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
