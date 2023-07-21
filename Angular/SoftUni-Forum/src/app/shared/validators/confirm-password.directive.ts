import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appConfirmPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmPasswordDirective,
      multi: true,
    },
  ],
})
export class ConfirmPasswordDirective implements Validator {
  @Input() appConfirmPassword: any;

  password: string = '';
  rePassword: string = '';

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.password = control.value['password'];
    this.rePassword = control.value['rePassword'];

    if (this.password !== this.rePassword) {
      return { passwordMatchError: true };
    } else {
      return null;
    }
  }
}
