import { Component, Input } from '@angular/core';
import { MenuItem } from '../../home.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
}
