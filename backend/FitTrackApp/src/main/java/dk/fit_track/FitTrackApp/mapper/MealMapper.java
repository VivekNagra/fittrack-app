package dk.fit_track.FitTrackApp.mapper;

import dk.fit_track.FitTrackApp.dto.MealResponseDTO;
import dk.fit_track.FitTrackApp.model.Meal;
import dk.fit_track.FitTrackApp.model.User;

public class MealMapper {

    public static MealResponseDTO toResponseDTO(Meal meal) {
        User user = meal.getUser();
        return new MealResponseDTO(
                meal.getMealId(),
                meal.getMealType(),
                meal.getCalories(),
                meal.getProtein(),
                meal.getCarbs(),
                meal.getFat(),
                meal.getDate(),
                user != null ? user.getUserId() : null,
                user != null ? user.getName() : null,
                user != null ? user.getEmail() : null
        );
    }
}
