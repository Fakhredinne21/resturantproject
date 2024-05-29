package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.History;

import cozydev.restaurantbackend.repositories.HistoryRepository;
import cozydev.restaurantbackend.repositories.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor

public class HistoryService {
    private final UserRepository userRepository;
    private final HistoryRepository historyRepository ;

    public Long getHistoriesByDate(LocalDate date) {
        return  historyRepository.findAll().stream()
                .filter(history -> history.getOccuredAt().toLocalDate().equals(date))
                .count();
    }

    public void save(History history) {
        historyRepository.save(history);
    }



}
