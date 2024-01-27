-- DropForeignKey
ALTER TABLE `merchandise_pictures` DROP FOREIGN KEY `merchandise_pictures_merchandise_id_fkey`;

-- DropForeignKey
ALTER TABLE `merchandise_sizes` DROP FOREIGN KEY `merchandise_sizes_merchandise_id_fkey`;

-- AlterTable
ALTER TABLE `admins` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `blogs` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `books` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `orders` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `podcasts` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `merchandise_pictures` ADD CONSTRAINT `merchandise_pictures_merchandise_id_fkey` FOREIGN KEY (`merchandise_id`) REFERENCES `merchandises`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `merchandise_sizes` ADD CONSTRAINT `merchandise_sizes_merchandise_id_fkey` FOREIGN KEY (`merchandise_id`) REFERENCES `merchandises`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
