package com.nemo.expense_tracker_backend.transaction;

import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findAllByUserIdAndTransactionDateBetween(Long userId, LocalDate from, LocalDate to);
    List<Transaction> findAllByUserIdAndCategoryIdAndTransactionDateBetween(Long userId, Long categoryId, LocalDate from, LocalDate to);
}
