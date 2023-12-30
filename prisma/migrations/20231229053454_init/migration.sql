/*
  Warnings:

  - Added the required column `itemFive` to the `Requirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemFour` to the `Requirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemOne` to the `Requirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemSix` to the `Requirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemThree` to the `Requirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemTwo` to the `Requirement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `requirement` ADD COLUMN `itemFive` VARCHAR(191) NOT NULL,
    ADD COLUMN `itemFour` VARCHAR(191) NOT NULL,
    ADD COLUMN `itemFourAttachment` VARCHAR(191) NULL,
    ADD COLUMN `itemOne` VARCHAR(191) NOT NULL,
    ADD COLUMN `itemSix` VARCHAR(191) NOT NULL,
    ADD COLUMN `itemSixAttachment` VARCHAR(191) NULL,
    ADD COLUMN `itemThree` VARCHAR(191) NOT NULL,
    ADD COLUMN `itemTwo` VARCHAR(191) NOT NULL,
    ADD COLUMN `itemTwoAttachment` VARCHAR(191) NULL;
