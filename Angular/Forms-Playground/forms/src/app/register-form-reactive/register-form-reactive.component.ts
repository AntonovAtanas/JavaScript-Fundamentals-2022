import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent implements OnInit {
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'tel': new FormControl(null),
      'job': new FormControl(null),
      'password': new FormControl(null),
      'rePassword': new FormControl(null),
    })
  }
}
