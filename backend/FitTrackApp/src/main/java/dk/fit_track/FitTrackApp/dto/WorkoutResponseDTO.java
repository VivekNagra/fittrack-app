package dk.fit_track.FitTrackApp.dto;

import java.time.LocalDate;

public class WorkoutResponseDTO {
    private Long workoutId;
    private String type;
    private int durationMinutes;
    private int caloriesBurned;
    private LocalDate date;

    private Long userId;
    private String userName;
    private String userEmail;

    public WorkoutResponseDTO() {}

    public WorkoutResponseDTO(Long workoutId, String type, int durationMinutes, int caloriesBurned,
                              LocalDate date, Long userId, String userName, String userEmail) {
        this.workoutId = workoutId;
        this.type = type;
        this.durationMinutes = durationMinutes;
        this.caloriesBurned = caloriesBurned;
        this.date = date;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getCaloriesBurned() {
        return caloriesBurned;
    }

    public void setCaloriesBurned(int caloriesBurned) {
        this.caloriesBurned = caloriesBurned;
    }

    public int getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(int durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getWorkoutId() {
        return workoutId;
    }

    public void setWorkoutId(Long workoutId) {
        this.workoutId = workoutId;
    }

}
