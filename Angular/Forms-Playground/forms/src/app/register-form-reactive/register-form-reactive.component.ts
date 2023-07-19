import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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

      'name': new FormControl(null, [Validators.required, Validators.pattern(/[A-Z][a-z]* [A-Z][a-z]*/)]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'code': new FormControl('+02', Validators.required),
      'tel': new FormControl(null, [Validators.required, Validators.pattern(/^\d{9}$/)]),
      'job': new FormControl('Programmer', Validators.required),
      'userPassword': new FormGroup({
        'password': new FormControl(null, [Validators.required, Validators.pattern(/[\w\d]{3,16}/)]),
        'rePassword': new FormControl(null, [Validators.required, Validators.pattern(/[\w\d]{3,16}/)]),
        }, {
          validators: this.arePasswordsSame
        })
    })
  };

  onSubmit(){
    console.log('submitted')
    this.registerForm.reset({
      'code': '+02',
      'job': 'Programmer'
    });
  };


  arePasswordsSame(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const rePassword = control.get('rePassword');

    if (password?.value !== rePassword?.value){
      return {
        passwordMissmatch: true
      }
    }
    return null
  }
}
