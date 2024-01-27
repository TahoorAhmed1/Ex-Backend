/*
  Warnings:

  - Made the column `category_id` on table `merchandises` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `merchandises` DROP FOREIGN KEY `merchandises_category_id_fkey`;

-- AlterTable
ALTER TABLE `admins` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `blogs` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `books` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `merchandises` MODIFY `category_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `orders` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `podcasts` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `merchandises` ADD CONSTRAINT `merchandises_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
