import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Index {
  formatCurrencyVND(value: number | undefined): string {
    const numberToUse = value !== undefined ? value : 0;
    if (isNaN(numberToUse)) {
      return 'Invalid Number';
    }

    return numberToUse.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
