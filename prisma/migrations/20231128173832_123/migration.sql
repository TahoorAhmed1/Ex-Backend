/*
  Warnings:

  - Added the required column `price` to the `merchandises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blogs` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `books` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `merchandises` ADD COLUMN `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `orders` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `podcasts` ALTER COLUMN `updatedAt` DROP DEFAULT;
