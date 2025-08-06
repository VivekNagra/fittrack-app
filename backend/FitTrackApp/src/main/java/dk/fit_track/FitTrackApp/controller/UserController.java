package dk.fit_track.FitTrackApp.controller;

import dk.fit_track.FitTrackApp.dto.UserDTO;
import dk.fit_track.FitTrackApp.dto.UserResponseDTO;
import dk.fit_track.FitTrackApp.mapper.UserMapper;
import dk.fit_track.FitTrackApp.model.User;
import dk.fit_track.FitTrackApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(@RequestBody UserDTO dto) {
        User user = new User(dto.getName(), dto.getEmail(), dto.getAge());
        User saved = userRepository.save(user);
        return ResponseEntity.ok(UserMapper.toResponseDTO(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO dto) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(dto.getName());
                    user.setEmail(dto.getEmail());
                    user.setAge(dto.getAge());
                    User updated = userRepository.save(user);
                    return ResponseEntity.ok(UserMapper.toResponseDTO(updated));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        List<UserResponseDTO> dtos = userRepository.findAll().stream()
                .map(UserMapper::toResponseDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .map(UserMapper::toResponseDTO)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
