import { Component } from '@angular/core';
import { ItemUpperComponent } from '../item-upper/item-upper.component';

@Component({
  selector: 'app-sidebar',
  imports: [ItemUpperComponent],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {}
