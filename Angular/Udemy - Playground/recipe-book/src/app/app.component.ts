import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  renderRecipe: boolean = true;

  showRecipe(event){
    this.renderRecipe = event;
  }
}
