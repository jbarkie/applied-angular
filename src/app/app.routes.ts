import { Routes } from '@angular/router';
import { NewsComponent } from './areas/news/news.component';
import { ReadArticleStore } from './areas/news/services/read-articles.store';

export const routes: Routes = [
  {
    path: 'news',
    providers: [ReadArticleStore],
    component: NewsComponent,
  },
];
