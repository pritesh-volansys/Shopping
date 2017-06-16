import { Component, OnInit , EventEmitter , Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Sample Recipe', 'city corner', 'src/Image/vol.png'),
    new Recipe('A Sample Recipe 2', 'city corner', 'src/Image/vol.png')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
