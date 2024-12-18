import { Routes } from '@angular/router';
import { NewsComponent } from './areas/news/news.component';
import { ReadArticleStore } from './areas/news/services/read-articles.store';
import { NewsListComponent } from './areas/news/components/news-list.component';
import { HistoryComponent } from './areas/news/components/history.component';

export const routes: Routes = [
  {
    path: 'lrc',
    loadChildren: () =>
      import('./areas/lrc/lrc.routes').then((r) => r.LRC_ROUTES),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./areas/counter-lab/counter.routes').then(
        (r) => r.COUNTER_ROUTES,
      ),
  },
  {
    path: 'golf',
    loadChildren: () =>
      import('./areas/golf/golf.routes').then((r) => r.GOLF_ROUTES),
  },
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
