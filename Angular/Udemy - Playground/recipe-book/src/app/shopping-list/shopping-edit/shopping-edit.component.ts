import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(name: string, amount: number) {
    const ingredient = new Ingredient(name, amount)
    this.newIngredient.emit(ingredient)
  }

}
