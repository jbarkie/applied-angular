import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReadArticleStore } from '../services/read-articles.store';

@Component({
  selector: 'app-news-history',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @if (store.entities().length === 0) {
      <p>You've read no articles</p>
    } @else {
      <p>You've read the following articles:</p>
      <ul>
        @for (article of store.entities(); track article.id) {
          <li>{{ article.title }}</li>
        }
      </ul>
    }
  `,
  styles: ``,
})
export class HistoryComponent {
  store = inject(ReadArticleStore);
}
