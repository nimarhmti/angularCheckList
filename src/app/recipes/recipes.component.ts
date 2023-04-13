import { Component } from '@angular/core';

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
export class RecipesComponent {}
