/*
  Warnings:

  - You are about to drop the column `avatar_url` on the `costumers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `costumers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `costumers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `costumers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `costumers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `costumers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `costumers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `costumers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `costumers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip_code` to the `costumers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `costumers` DROP COLUMN `avatar_url`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `complement` VARCHAR(191) NULL,
    ADD COLUMN `cpf` VARCHAR(11) NOT NULL,
    ADD COLUMN `created_by` INTEGER NOT NULL,
    ADD COLUMN `number` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `zip_code` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `costumers_cpf_key` ON `costumers`(`cpf`);

-- AddForeignKey
ALTER TABLE `costumers` ADD CONSTRAINT `costumers_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
