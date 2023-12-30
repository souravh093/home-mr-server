/*
  Warnings:

  - You are about to drop the column `subCategoryId` on the `bulletpoint` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `bulletPoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `folder` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `bulletpoint` DROP FOREIGN KEY `bulletPoint_subCategoryId_fkey`;

-- AlterTable
ALTER TABLE `bulletpoint` DROP COLUMN `subCategoryId`,
    ADD COLUMN `categoryId` VARCHAR(191) NOT NULL,
    MODIFY `itemThree` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `folder` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `bulletPoint` ADD CONSTRAINT `bulletPoint_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
