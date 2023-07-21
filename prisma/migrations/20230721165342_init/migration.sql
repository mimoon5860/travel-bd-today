-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `role` ENUM('User', 'Admin') NOT NULL DEFAULT 'User',
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `thana_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Place` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `coverImage` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `thanaId` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `authorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlaceContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fileName` VARCHAR(191) NOT NULL,
    `placeId` INTEGER NOT NULL,
    `type` ENUM('photo', 'video') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `placeId` INTEGER NOT NULL,
    `rating` INTEGER NOT NULL,
    `review` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReviewContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fileName` VARCHAR(191) NOT NULL,
    `reviewId` INTEGER NOT NULL,
    `type` ENUM('photo', 'video') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Division` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `bn_name` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `District` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `bn_name` VARCHAR(191) NULL,
    `division_id` INTEGER NOT NULL,
    `lat` VARCHAR(191) NULL,
    `lon` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Thana` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `district_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `bn_name` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_thana_id_fkey` FOREIGN KEY (`thana_id`) REFERENCES `Thana`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlaceContent` ADD CONSTRAINT `PlaceContent_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `Place`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `Place`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReviewContent` ADD CONSTRAINT `ReviewContent_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `Review`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `District` ADD CONSTRAINT `District_division_id_fkey` FOREIGN KEY (`division_id`) REFERENCES `Division`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Thana` ADD CONSTRAINT `Thana_district_id_fkey` FOREIGN KEY (`district_id`) REFERENCES `District`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
