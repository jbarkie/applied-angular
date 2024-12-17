import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource,
  signal,
} from '@angular/core';
import { ReadArticleStore } from '../services/read-articles.store';
import { NewsArticle } from '../types';
import { NewsItemComponent } from './news-item.component';

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsItemComponent],
  template: `
    <section>
      @if (articles.error()) {
        <p>Error loading data.</p>
      }
      @if (articles.isLoading()) {
        <span class="loading loading-spinner text-primary"></span>
      } @else {
        @for (article of articles.value(); track article.id) {
          <app-news-item
            (linkRead)="store.addArticle($event)"
            [articleToDisplay]="article"
          />
        } @empty {
          <p>No news! Check back later.</p>
        }
      }
    </section>
  `,
  styles: ``,
})
export class NewsListComponent {
  preferredHeader = signal('Preferred header');

  store = inject(ReadArticleStore);

  articles = resource<NewsArticle[], unknown>({
    loader: () =>
      fetch('http://fake-news.some-fake-server.com/news-feed').then((r) =>
        r.json(),
      ),
  });
}
