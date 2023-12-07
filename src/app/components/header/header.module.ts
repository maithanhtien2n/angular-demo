import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { HeaderComponent } from './header.component';

import { BadgeModule } from 'primeng/badge';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [CommonModule, BadgeModule, FormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
