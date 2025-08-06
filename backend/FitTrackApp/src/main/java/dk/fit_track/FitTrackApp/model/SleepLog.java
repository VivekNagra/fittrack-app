package dk.fit_track.FitTrackApp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "sleep_logs")
public class SleepLog {

    @Id
    private String id;

    private Long userId;
    private LocalDate date;
    private double hoursSlept;
    private String sleepQuality;
    private String notes;

    public SleepLog() {}

    public SleepLog(Long userId, LocalDate date, double hoursSlept, String sleepQuality, String notes) {
        this.userId = userId;
        this.date = date;
        this.hoursSlept = hoursSlept;
        this.sleepQuality = sleepQuality;
        this.notes = notes;
    }

    // Getters and setters
    public String getId() {
        return id;
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

    public double getHoursSlept() {
        return hoursSlept;
    }

    public void setHoursSlept(double hoursSlept) {
        this.hoursSlept = hoursSlept;
    }

    public String getSleepQuality() {
        return sleepQuality;
    }

    public void setSleepQuality(String sleepQuality) {
        this.sleepQuality = sleepQuality;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
