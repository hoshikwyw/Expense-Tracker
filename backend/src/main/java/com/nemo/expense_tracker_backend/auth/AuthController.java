package com.nemo.expense_tracker_backend.auth;

import com.nemo.expense_tracker_backend.auth.dto.*;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterRequest req) {
        authService.register(req);
        return ResponseEntity.ok(Map.of("success", true, "message", "User registered", "data", null));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequest req) {
        AuthResponse res = authService.login(req);
        return ResponseEntity.ok(Map.of("success", true, "message", "Login success", "data", res));
    }
}
