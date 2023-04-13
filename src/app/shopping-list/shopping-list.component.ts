import { Component } from '@angular/core';
import { ingredientModel } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredient: ingredientModel[] = [
    new ingredientModel('Apples', 5),
    new ingredientModel('pizaa', 10),
  ];
}
