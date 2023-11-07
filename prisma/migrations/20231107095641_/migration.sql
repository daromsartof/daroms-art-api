-- DropIndex
DROP INDEX `Skils_authorId_fkey` ON `skils`;

-- AlterTable
ALTER TABLE `user` MODIFY `bio` LONGTEXT NULL;

-- AddForeignKey
ALTER TABLE `Skils` ADD CONSTRAINT `Skils_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
