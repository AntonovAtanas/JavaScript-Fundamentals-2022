import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {

  constructor(private router: Router){}

  onCancel(): void{
    this.router.navigate(['home'])
  }
}
