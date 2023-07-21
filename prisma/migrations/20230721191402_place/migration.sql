/*
  Warnings:

  - You are about to drop the column `thanaId` on the `place` table. All the data in the column will be lost.
  - You are about to drop the `placecontent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `thana_id` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `placecontent` DROP FOREIGN KEY `PlaceContent_placeId_fkey`;

-- AlterTable
ALTER TABLE `place` DROP COLUMN `thanaId`,
    ADD COLUMN `thana_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `placecontent`;

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_thana_id_fkey` FOREIGN KEY (`thana_id`) REFERENCES `Thana`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
