package dk.fit_track.FitTrackApp.controller;

import dk.fit_track.FitTrackApp.dto.MealDTO;
import dk.fit_track.FitTrackApp.dto.MealResponseDTO;
import dk.fit_track.FitTrackApp.mapper.MealMapper;
import dk.fit_track.FitTrackApp.model.Meal;
import dk.fit_track.FitTrackApp.model.User;
import dk.fit_track.FitTrackApp.repository.MealRepository;
import dk.fit_track.FitTrackApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
@CrossOrigin(origins = "http://localhost:5173")
public class MealController {

    private final MealRepository mealRepository;
    private final UserRepository userRepository;

    @Autowired
    public MealController(MealRepository mealRepository, UserRepository userRepository) {
        this.mealRepository = mealRepository;
        this.userRepository = userRepository;
    }

    // POST /api/meals
    @PostMapping
    public ResponseEntity<MealResponseDTO> createMeal(@RequestBody MealDTO dto) {
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Meal meal = new Meal();
        meal.setUser(user);
        meal.setMealType(dto.getMealType());
        meal.setCalories(dto.getCalories());
        meal.setProtein(dto.getProtein());
        meal.setCarbs(dto.getCarbs());
        meal.setFat(dto.getFat());
        meal.setDate(dto.getDate());

        Meal saved = mealRepository.save(meal);
        return ResponseEntity.ok(MealMapper.toResponseDTO(saved));
    }

    // PUT /api/meals/{id}
    @PutMapping("/{id}")
    public ResponseEntity<MealResponseDTO> updateMeal(@PathVariable Long id, @RequestBody MealDTO dto) {
        return mealRepository.findById(id)
                .map(meal -> {
                    User user = userRepository.findById(dto.getUserId())
                            .orElseThrow(() -> new RuntimeException("User not found"));
                    meal.setUser(user);
                    meal.setMealType(dto.getMealType());
                    meal.setCalories(dto.getCalories());
                    meal.setProtein(dto.getProtein());
                    meal.setCarbs(dto.getCarbs());
                    meal.setFat(dto.getFat());
                    meal.setDate(dto.getDate());
                    Meal updated = mealRepository.save(meal);
                    return ResponseEntity.ok(MealMapper.toResponseDTO(updated));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // GET /api/meals
    @GetMapping
    public ResponseEntity<List<MealResponseDTO>> getAllMeals() {
        List<MealResponseDTO> dtos = mealRepository.findAll().stream()
                .map(MealMapper::toResponseDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }

    // GET /api/meals/{id}
    @GetMapping("/{id}")
    public ResponseEntity<MealResponseDTO> getMealById(@PathVariable Long id) {
        return mealRepository.findById(id)
                .map(MealMapper::toResponseDTO)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE /api/meals/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMeal(@PathVariable Long id) {
        if (mealRepository.existsById(id)) {
            mealRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
