package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.HisotryId;
import cozydev.restaurantbackend.model.History;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HistoryRepository extends JpaRepository<History, HisotryId> {
}
