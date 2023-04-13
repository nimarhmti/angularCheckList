import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
interface recipesModel {
  name: string;
  description: string;
  imagePath: string;
}
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  recipes: Recipe[] = [];
}
