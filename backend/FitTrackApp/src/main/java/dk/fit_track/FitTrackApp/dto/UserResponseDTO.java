package dk.fit_track.FitTrackApp.dto;

import java.time.LocalDateTime;

public class UserResponseDTO {
    private Long userId;
    private String name;
    private String email;
    private int age;
    private LocalDateTime createdAt;

    public UserResponseDTO(Long userId, String name, String email, int age, LocalDateTime createdAt) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.age = age;
        this.createdAt = createdAt;
    }

    // Getters & Setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
