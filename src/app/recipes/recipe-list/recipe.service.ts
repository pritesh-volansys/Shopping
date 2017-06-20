import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();  

    private  recipes: Recipe[] = [
    new Recipe('A Sample Recipe', 'city corner', 'src/Image/vol.png'
    ,[
        new Ingredient('Tomato',1),
        new Ingredient('Buns',3)
    ]),
    new Recipe('A Sample Recipe 2', 'city corner', 'src/Image/vol.png',[
        new Ingredient('Bread',1),
        new Ingredient('onion',3)
    ])
  ];

  constructor(private slService : ShoppingListService){}

 getRecipes(){
     return this.recipes.slice();
 }

   getRecipe(index: number) {
    return this.recipes[index];
  }

 addIngreDientToShoppingList(ingredients : Ingredient[]){
     this.slService.addIngridents(ingredients);
 }
  
}