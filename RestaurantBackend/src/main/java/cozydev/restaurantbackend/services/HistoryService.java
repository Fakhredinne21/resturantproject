package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.History;
import cozydev.restaurantbackend.repositories.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HistoryService {

    private final HistoryRepository historyRepository ;

    public void saveHistroy(History history){
        historyRepository.save(history);
    }


}
