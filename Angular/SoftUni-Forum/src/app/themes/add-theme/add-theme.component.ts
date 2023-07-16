import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {

  constructor(private router: Router, private api: ApiService){}

  onCancel(): void{
    this.router.navigate(['home'])
  }

  onSubmit(themeName: string, postText: string): void {
    console.log('onSubmit')
    this.api.addTheme(themeName, postText).subscribe(res => {
      
      this.router.navigate(['all-themes'])
    })
  }
}
