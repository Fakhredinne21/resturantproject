package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Meal;
import cozydev.restaurantbackend.repositories.MealRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealService {

    private final MealRepository mealRepository;
    public MealService(MealRepository mealRepository) {
        this.mealRepository = mealRepository;
    }

    //Creation
    public Meal mealCreation(Meal meal){
        return mealRepository.save(meal);
    }
    public List<Meal> getAllMeals(){
        return mealRepository.findAll();
    }

    public Optional<Meal> getMealById(long idTicket){
        return mealRepository.findById(idTicket);
    }


}
