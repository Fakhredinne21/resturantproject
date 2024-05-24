package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Ticket implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int price;
    private Boolean isUsed ;

    @OneToMany(mappedBy = "ticket")
    @JsonIgnore
    private List<History> histories;


    @ManyToOne
    @JoinColumn(name = "owner")
    @JsonIgnore
    private User user;

}
