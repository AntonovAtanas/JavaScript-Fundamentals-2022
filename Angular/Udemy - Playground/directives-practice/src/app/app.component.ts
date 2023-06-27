import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-practice';
  hidePassword: string = 'block';

  passwordToggle(): void {
    if (this.hidePassword == 'block') {
      this.hidePassword = 'none'
    } else {
      this.hidePassword = 'block'
    }
    console.log(this.hidePassword)
  };

  
}
