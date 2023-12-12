import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../../utils/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validateService: ValidateService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          (control: AbstractControl) => {
            const password = control.parent?.get('password');
            const passwordConfirm = control.value;

            return password && password.value !== passwordConfirm
              ? { passwordMismatch: true }
              : null;
          },
        ],
      ],
    });
  }

  onSubmit() {
    this.validateService.checkValidate(this.registerForm, () => {
      this.router.navigate(['']);
    });
  }

  getErrorMessage(field: string): string {
    return this.validateService.customErrorMessage(
      this.registerForm.get(field)
    );
  }

  onClickButtonLogin() {
    this.router.navigate(['login']);
  }
}
