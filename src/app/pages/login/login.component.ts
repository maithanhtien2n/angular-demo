import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../../utils/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validateService: ValidateService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.validateService.checkValidate(this.loginForm, () => {
      this.router.navigate(['']);
    });
  }

  getErrorMessage(field: string): string {
    return this.validateService.customErrorMessage(this.loginForm.get(field));
  }

  onClickButtonRegister() {
    this.router.navigate(['register']);
  }
}
