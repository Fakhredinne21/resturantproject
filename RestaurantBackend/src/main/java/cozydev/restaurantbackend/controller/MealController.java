package cozydev.restaurantbackend.controller;


import cozydev.restaurantbackend.model.Meal;
import cozydev.restaurantbackend.services.MealService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Meals")
public class MealController {

    private final MealService mealService ;

    public MealController(MealService mealService) {
        this.mealService = mealService;
    }

    @PostMapping
    public Meal mealCreation(@PathVariable Meal meal){
        return mealService.mealCreation(meal);
    }

    @GetMapping
    public List<Meal> getAllMeals(){
        return mealService.getAllMeals();
    }

    @GetMapping("/{idMeal}")
    public Optional<Meal> getMealById(@PathVariable long idMeal){
        return mealService.getMealById(idMeal);
    }


}
