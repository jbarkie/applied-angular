import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" routerLink="">Applied Angular</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a routerLink="news">News</a></li>
          <li><a routerLink="golf">Golf</a></li>
          <li><a routerLink="counter">Counter</a></li>
          <li><a routerLink="lrc">Learning Resources</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent {}
