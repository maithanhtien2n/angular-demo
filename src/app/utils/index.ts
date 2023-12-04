import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Index {
  formatCurrencyVND(value: number): string {
    if (isNaN(value)) {
      return 'Invalid Number';
    }

    return value.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
