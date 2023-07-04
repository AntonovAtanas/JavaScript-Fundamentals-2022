import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  @Output() renderRecipe = new EventEmitter<boolean>()

  showRecipes() {
    this.renderRecipe.emit(true);
  }

  showShoppingList() {
    this.renderRecipe.emit(false);
  }
}
