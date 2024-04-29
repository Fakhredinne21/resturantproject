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

    public User() {
    }

    public User(Long id, String First_name, String Last_name, int phone_Number, String email, String password, boolean status, Date date_creation, byte[] image) {
        this.id = id;
        this.First_name = First_name;
        this.Last_name = Last_name;
        this.phone_Number = phone_Number;
        this.email = email;
        this.password = password;
        this.status = status;
        this.date_creation = date_creation;
        this.image = image;
    }
}
