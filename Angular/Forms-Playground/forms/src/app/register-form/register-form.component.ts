import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements AfterViewInit {

  @ViewChild ('f') registerForm!: NgForm

  jobs: string[] = ['Designer', 'Programmer', 'Artist'];
  defaultJob: string = 'Programmer';

  phoneCodes: string[] = ['+359', '+07', '+02'];
  defaultCode: string = '+359';



  ngAfterViewInit(): void {
    // console.log(`After View Init`, this.registerForm)
  }

  onSubmit(): void{
    console.log(`onSubmit`, this.registerForm.form.value);

    this.registerForm.reset()
  }
}
