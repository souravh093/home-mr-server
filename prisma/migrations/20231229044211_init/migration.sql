/*
  Warnings:

  - Added the required column `customerId` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gigsId` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `gigsId` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_gigsId_fkey` FOREIGN KEY (`gigsId`) REFERENCES `Gigs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
