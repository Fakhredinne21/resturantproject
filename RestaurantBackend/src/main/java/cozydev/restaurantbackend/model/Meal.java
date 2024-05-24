package cozydev.restaurantbackend.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long mealId ;
        private String description ;

        @CreatedDate
        @Column(nullable =false ,updatable = false)
        private LocalDateTime createdDate ;
        private long price ;

        @OneToMany(mappedBy = "meal")
        @JsonIgnore
        private List<Review> reviews;
}
