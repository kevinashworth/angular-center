import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-center';
}
