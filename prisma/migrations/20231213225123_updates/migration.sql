/*
  Warnings:

  - You are about to drop the column `preview` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `tax_amount` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `tax_rate` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `admins` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `blogs` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `preview`,
    ADD COLUMN `preview_url` VARCHAR(191) NULL,
    ADD COLUMN `type` ENUM('PHYSICAL_BOOK', 'E_BOOK', 'AUDIO_BOOK') NOT NULL DEFAULT 'PHYSICAL_BOOK',
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `tax_amount`,
    DROP COLUMN `tax_rate`,
    ADD COLUMN `discount` DOUBLE NOT NULL DEFAULT 0,
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `podcasts` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- CreateTable
CREATE TABLE `book_download_urls` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookId` INTEGER NOT NULL,
    `download_url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `book_download_urls_bookId_key`(`bookId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `book_download_urls` ADD CONSTRAINT `book_download_urls_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
