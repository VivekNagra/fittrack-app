package dk.fit_track.FitTrackApp.dto;

import java.time.LocalDate;

public class MealResponseDTO {
    private Long mealId;
    private String mealType;
    private int calories;
    private double protein;
    private double carbs;
    private double fat;
    private LocalDate date;
    private Long userId;
    private String userName;
    private String userEmail;

    public MealResponseDTO(Long mealId, String mealType, int calories, double protein, double carbs, double fat, LocalDate date,
                           Long userId, String userName, String userEmail) {
        this.mealId = mealId;
        this.mealType = mealType;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
        this.date = date;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
    }

    // Getters and setters
    public Long getMealId() { return mealId; }
    public void setMealId(Long mealId) { this.mealId = mealId; }

    public String getMealType() { return mealType; }
    public void setMealType(String mealType) { this.mealType = mealType; }

    public int getCalories() { return calories; }
    public void setCalories(int calories) { this.calories = calories; }

    public double getProtein() { return protein; }
    public void setProtein(double protein) { this.protein = protein; }

    public double getCarbs() { return carbs; }
    public void setCarbs(double carbs) { this.carbs = carbs; }

    public double getFat() { return fat; }
    public void setFat(double fat) { this.fat = fat; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }
}
