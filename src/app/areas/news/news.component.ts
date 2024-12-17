import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsHeaderComponent } from './components/news-header.component';
import { NewsListComponent } from './components/news-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsHeaderComponent, NewsListComponent, RouterLink, RouterOutlet],
  template: `
    <app-news-header />
    <div class="flex gap-4">
      <a routerLink="list" class="link">List</a>
      <a routerLink="history" class="link">History</a>
    </div>
    <router-outlet />
  `,
  styles: ``,
})
export class NewsComponent {}
