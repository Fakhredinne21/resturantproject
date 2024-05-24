package cozydev.restaurantbackend.model;

import jakarta.persistence.Embeddable;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Embeddable
public class HisotryId {

    private Long senderId;
    private Long receiverId;
    private Long ticketId;

}
