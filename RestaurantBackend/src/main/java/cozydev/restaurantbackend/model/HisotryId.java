package cozydev.restaurantbackend.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class HisotryId {
    private Long userId;
    private Long ticketId;
}
