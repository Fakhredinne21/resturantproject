package cozydev.restaurantbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="User")
@Getter
@Setter
@ToString
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String First_name;
    private String Last_name;
    private int phone_Number;
    private String email;
    private String password;
    private boolean status;
    @Temporal(TemporalType.DATE)
    private Date date_creation;
    @Lob
    private byte[] image;
}
