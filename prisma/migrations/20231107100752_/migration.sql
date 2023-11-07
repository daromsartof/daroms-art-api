/*
  Warnings:

  - You are about to drop the column `authorId` on the `skils` table. All the data in the column will be lost.
  - Added the required column `sk_category_id` to the `Skils` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Skils_authorId_fkey` ON `skils`;

-- AlterTable
ALTER TABLE `skils` DROP COLUMN `authorId`,
    ADD COLUMN `logo_path` VARCHAR(191) NULL,
    ADD COLUMN `sk_category_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Sk_Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pf_Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PortFolio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,
    `path` VARCHAR(191) NULL,
    `pf_category_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Skils` ADD CONSTRAINT `Skils_sk_category_id_fkey` FOREIGN KEY (`sk_category_id`) REFERENCES `Sk_Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortFolio` ADD CONSTRAINT `PortFolio_pf_category_id_fkey` FOREIGN KEY (`pf_category_id`) REFERENCES `Pf_Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
