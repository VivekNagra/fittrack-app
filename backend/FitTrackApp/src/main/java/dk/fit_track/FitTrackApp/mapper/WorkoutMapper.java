package dk.fit_track.FitTrackApp.mapper;

import dk.fit_track.FitTrackApp.dto.WorkoutDTO;
import dk.fit_track.FitTrackApp.dto.WorkoutResponseDTO;
import dk.fit_track.FitTrackApp.model.User;
import dk.fit_track.FitTrackApp.model.Workout;

public class WorkoutMapper {

    public static WorkoutResponseDTO toResponseDTO(Workout workout) {
        User user = workout.getUser();
        return new WorkoutResponseDTO(
                workout.getWorkoutId(),
                workout.getType(),
                workout.getDurationMinutes(),
                workout.getCaloriesBurned(),
                workout.getDate(),
                user != null ? user.getUserId() : null,
                user != null ? user.getName() : null,
                user != null ? user.getEmail() : null
        );
    }
}
