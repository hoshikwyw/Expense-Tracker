package com.nemo.expense_tracker_backend.category;

import com.nemo.expense_tracker_backend.user.User;
import jakarta.persistence.*;

@Entity
@Table(name = "categories",
       uniqueConstraints = @UniqueConstraint(name = "uq_user_category_title", columnNames = {"user_id", "title"}))
public class Category {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, length = 60)
    private String title;

    @Column(length = 200)
    private String description;

    // getters/setters
    public Long getId() { return id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
