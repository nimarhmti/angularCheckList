import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

//a;so we can set this way
interface recipesModel {
  name: string;
  description: string;
  imagePath: string;
}
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Scallops',
      'Small handful of chives',
      'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2240,c_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'
    ),
    new Recipe(
      'Scallops',
      'Small handful of chives',
      'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2240,c_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'
    ),
    new Recipe(
      'Scallops',
      'Small handful of chives',
      'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2240,c_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'
    ),
    new Recipe(
      'Scallops',
      'Small handful of chives',
      'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2240,c_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'
    ),
  ];
}
