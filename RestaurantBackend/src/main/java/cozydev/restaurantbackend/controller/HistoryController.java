package cozydev.restaurantbackend.controller;


import cozydev.restaurantbackend.model.History;
import cozydev.restaurantbackend.repositories.HistoryRepository;
import cozydev.restaurantbackend.services.HistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/History")
@RequiredArgsConstructor
public class HistoryController {

    private final HistoryRepository historyRepository ;
    private final HistoryService historyService;

    @PostMapping
    public void saveHistory(History history){
        historyRepository.save(history);
        historyService.save(history);
    }

    @GetMapping("/date/{date}")
    public Long getHistoriesByDate(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return historyService.getHistoriesByDate(date);
    }
}
