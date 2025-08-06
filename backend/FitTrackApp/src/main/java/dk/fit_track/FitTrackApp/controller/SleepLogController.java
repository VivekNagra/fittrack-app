package dk.fit_track.FitTrackApp.controller;

import dk.fit_track.FitTrackApp.model.SleepLog;
import dk.fit_track.FitTrackApp.repository.SleepLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sleep-logs")
@CrossOrigin(origins = "http://localhost:5173")
public class SleepLogController {

    @Autowired
    private SleepLogRepository sleepLogRepository;

    @PostMapping
    public ResponseEntity<SleepLog> createSleepLog(@RequestBody SleepLog log) {
        SleepLog saved = sleepLogRepository.save(log);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public List<SleepLog> getAllLogs() {
        return sleepLogRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<SleepLog> getByUserId(@PathVariable Long userId) {
        return sleepLogRepository.findByUserId(userId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        if (sleepLogRepository.existsById(id)) {
            sleepLogRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
