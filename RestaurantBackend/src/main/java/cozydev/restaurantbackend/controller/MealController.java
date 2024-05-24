package cozydev.restaurantbackend.controller;


import cozydev.restaurantbackend.model.Meal;
import cozydev.restaurantbackend.services.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Meals")
@RequiredArgsConstructor
public class MealController {

    private final MealService mealService ;


    @PostMapping
    public Meal mealCreation(@RequestBody Meal meal){
        return mealService.mealCreation(meal);
    }

    @GetMapping
    public List<Meal> getAllMeals(){
        return mealService.getAllMeals();
    }

    @GetMapping("/{mealId}")
    public Optional<Meal> getMealById(@PathVariable long mealId){
        return mealService.getMealById(mealId);
    }

    @DeleteMapping("/{mealId}")
    public void deleteMeal(@PathVariable Long mealId) {
        mealService.deleteMeal(mealId);
    }

}
