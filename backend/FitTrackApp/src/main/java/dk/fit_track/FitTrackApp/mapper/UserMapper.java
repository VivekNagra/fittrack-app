package dk.fit_track.FitTrackApp.mapper;

import dk.fit_track.FitTrackApp.dto.UserResponseDTO;
import dk.fit_track.FitTrackApp.model.User;

public class UserMapper {

    public static UserResponseDTO toResponseDTO(User user) {
        return new UserResponseDTO(
                user.getUserId(),
                user.getName(),
                user.getEmail(),
                user.getAge(),
                user.getCreatedAt()
        );
    }
}
