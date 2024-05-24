package cozydev.restaurantbackend.controller;


import cozydev.restaurantbackend.model.History;
import cozydev.restaurantbackend.repositories.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/History")
@RequiredArgsConstructor
public class HistoryController {
    private final HistoryRepository historyRepository ;

    @PostMapping
    public void saveHistory(History history){
        historyRepository.save(history);
    }
}
