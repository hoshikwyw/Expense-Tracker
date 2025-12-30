package com.nemo.expense_tracker_backend.common;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    @GetMapping("/")
    public String home() {
        return "Expense Tracker API is running";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}
