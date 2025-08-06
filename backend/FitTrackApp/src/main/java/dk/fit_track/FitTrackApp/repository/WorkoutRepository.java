package dk.fit_track.FitTrackApp.repository;

import dk.fit_track.FitTrackApp.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long> {
}
