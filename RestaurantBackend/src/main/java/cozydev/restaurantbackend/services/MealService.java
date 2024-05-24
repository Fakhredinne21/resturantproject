package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Meal;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.repositories.MealRepository;
import cozydev.restaurantbackend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MealService {

    private final MealRepository mealRepository;
    private final UserRepository userRepository ;

    //Creation
    public Meal mealCreation(Meal meal){
        return mealRepository.save(meal);
    }
    public List<Meal> getAllMeals(){
        return mealRepository.findAll();
    }

    public Optional<Meal> getMealById(long idMeal){
        return mealRepository.findById(idMeal);
    }


    public void deleteMeal(Long id) {
        this.mealRepository.deleteById(id);
    }
}
