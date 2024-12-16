import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar />
    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [NavbarComponent, RouterOutlet],
})
export class AppComponent {}
