import { Routes } from '@angular/router';
import { GolfComponent } from './golf.component';
import { UiComponent } from './components/ui.component';
import { HistoryComponent } from './components/history.component';
import { GolfStore } from './services/golf-store';
export const GOLF_ROUTES: Routes = [
  {
    path: '',
    providers: [GolfStore],
    component: GolfComponent,
    children: [
      {
        path: 'ui',
        component: UiComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
    ],
  },
];
