package dk.fit_track.FitTrackApp.controller;

import dk.fit_track.FitTrackApp.dto.WorkoutDTO;
import dk.fit_track.FitTrackApp.model.User;
import dk.fit_track.FitTrackApp.model.Workout;
import dk.fit_track.FitTrackApp.repository.UserRepository;
import dk.fit_track.FitTrackApp.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import dk.fit_track.FitTrackApp.dto.WorkoutDTO;
import dk.fit_track.FitTrackApp.dto.WorkoutResponseDTO;
import dk.fit_track.FitTrackApp.mapper.WorkoutMapper;


import java.util.List;

@RestController
@RequestMapping("/api/workouts")
@CrossOrigin(origins = "http://localhost:5173")
public class WorkoutController {

    private final WorkoutRepository workoutRepository;
    private final UserRepository userRepository;

    @Autowired
    public WorkoutController(WorkoutRepository workoutRepository, UserRepository userRepository) {
        this.workoutRepository = workoutRepository;
        this.userRepository = userRepository;
    }

    // POST with DTO
    @PostMapping
    public ResponseEntity<WorkoutResponseDTO> createWorkout(@RequestBody WorkoutDTO workoutDTO) {
        User user = userRepository.findById(workoutDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Workout workout = new Workout();
        workout.setUser(user);
        workout.setType(workoutDTO.getType());
        workout.setDurationMinutes(workoutDTO.getDurationMinutes());
        workout.setCaloriesBurned(workoutDTO.getCaloriesBurned());
        workout.setDate(workoutDTO.getDate());

        Workout saved = workoutRepository.save(workout);
        return ResponseEntity.ok(WorkoutMapper.toResponseDTO(saved));
    }

    // PUT with DTO
    @PutMapping("/{id}")
    public ResponseEntity<Workout> updateWorkout(@PathVariable Long id, @RequestBody WorkoutDTO dto) {
        return workoutRepository.findById(id)
                .map(workout -> {
                    User user = userRepository.findById(dto.getUserId())
                            .orElseThrow(() -> new RuntimeException("User not found"));
                    workout.setUser(user);
                    workout.setType(dto.getType());
                    workout.setDurationMinutes(dto.getDurationMinutes());
                    workout.setCaloriesBurned(dto.getCaloriesBurned());
                    workout.setDate(dto.getDate());
                    return ResponseEntity.ok(workoutRepository.save(workout));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // GET all
    @GetMapping
    public ResponseEntity<List<WorkoutResponseDTO>> getAllWorkouts() {
        List<Workout> workouts = workoutRepository.findAll();
        List<WorkoutResponseDTO> dtos = workouts.stream()
                .map(WorkoutMapper::toResponseDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }


    // GET by id
    @GetMapping("/{id}")
    public ResponseEntity<Workout> getWorkoutById(@PathVariable Long id) {
        return workoutRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkout(@PathVariable Long id) {
        if (workoutRepository.existsById(id)) {
            workoutRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
