import { Routes } from '@angular/router';
import { NewsComponent } from './areas/news/news.component';
import { ReadArticleStore } from './areas/news/services/read-articles.store';
import { NewsListComponent } from './areas/news/components/news-list.component';
import { HistoryComponent } from './areas/news/components/history.component';

export const routes: Routes = [
  {
    path: 'news',
    providers: [ReadArticleStore],
    component: NewsComponent,
    children: [
      {
        path: 'list',
        component: NewsListComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
    ],
  },
];
