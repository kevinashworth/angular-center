import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  titleSignal = signal('Angular Trial ~ Merchant Center');
}
