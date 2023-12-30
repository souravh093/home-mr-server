/*
  Warnings:

  - Added the required column `customerEmail` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_customerId_fkey`;

-- AlterTable
ALTER TABLE `cart` ADD COLUMN `customerEmail` VARCHAR(191) NOT NULL,
    MODIFY `customerId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
