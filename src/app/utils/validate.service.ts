import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor() {}

  checkValidate(fromGroup: FormGroup, next: () => void) {
    if (fromGroup.valid) {
      next();
    } else {
      Object.keys(fromGroup.controls).forEach((field) => {
        const control = fromGroup.get(field);
        if (control?.invalid) {
          control.markAllAsTouched();
        }
      });
    }
  }

  customErrorMessage(formGetField: any) {
    const control = formGetField;

    if (control.hasError('required')) {
      return 'Trường này không được để trống.';
    }

    if (control.hasError('email')) {
      return 'Địa chỉ email không hợp lệ.';
    }

    if (control.hasError('minlength')) {
      return `Ít nhất ${control.errors.minlength.requiredLength} ký tự.`;
    }

    if (control.hasError('passwordMismatch')) {
      return 'Mật khẩu xác nhận không khớp.';
    }

    return '';
  }
}
