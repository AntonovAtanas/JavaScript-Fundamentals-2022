import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent implements OnInit {
  registerForm!: FormGroup;

  jobs: string[] = ['Designer', 'Programmer', 'Artist'];

  phoneCodes: string[] = ['+359', '+07', '+02', '+034'];

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'code': new FormControl('+02'),
      'tel': new FormControl(),
      'job': new FormControl('Programmer'),
      'password': new FormControl(null),
      'rePassword': new FormControl(null),
    })
  };

  onSubmit(){
    console.log(this.registerForm)
  }
}
