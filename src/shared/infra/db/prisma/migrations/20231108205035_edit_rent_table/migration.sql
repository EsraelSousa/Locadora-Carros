-- AlterTable
ALTER TABLE `rentals` MODIFY `start_date` DATE NOT NULL,
    MODIFY `end_date` DATE NULL,
    MODIFY `expected_return` DATE NOT NULL,
    MODIFY `total` DOUBLE NULL;
