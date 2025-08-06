package dk.fit_track.FitTrackApp.repository;

import dk.fit_track.FitTrackApp.model.SleepLog;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SleepLogRepository extends MongoRepository<SleepLog, String> {
    List<SleepLog> findByUserId(Long userId);
}
