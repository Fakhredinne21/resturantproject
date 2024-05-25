package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.History;
import cozydev.restaurantbackend.repositories.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HistoryService {

    private final HistoryRepository historyRepository ;

    public void saveHistroy(History history){
        historyRepository.save(history);
    }

    public Long getHistoriesByDate(LocalDate date) {
        return  historyRepository.findAll().stream()
                .filter(history -> history.getOccuredAt().toLocalDate().equals(date))
                .count();
    }

    public void save(History history) {
        historyRepository.save(history);
    }
}
